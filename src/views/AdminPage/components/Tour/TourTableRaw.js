import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Table, Button, Space, Switch } from "antd";
import * as toursApi from "../../../../apis/tours";
import {
  createColumnsFromObj,
  reCreateOrderSttWhenSortEnd,
} from "../../../../utils/tableHelper";
import Swal from "sweetalert2";

function TourTableRaw() {
  const tourRaw = useSelector((state) => state.tourRaw.data);
  const tourCats = useSelector((state) => state.tourCats.data);
  const tourCatConfig = useSelector((state) => state.tourCatConfig.data);
  const [columns, setColumns] = useState([]);

  useEffect(() => {
    // Set Init Data
    let newColumns = createColumnsFromObj(
      tourCats[0],
      tourCatConfig,
      handleSwitchChange
    );
    newColumns = newColumns.map((col) => {
      if (!col.editable) {
        return col;
      }
      return {
        ...col,
        onCell: (record) => ({
          record,
          editable: col.editable,
          dataIndex: col.dataIndex,
          title: col.title,
          handleSave: handleSave,
        }),
      };
    });
    newColumns.sort((a, b) => {
      return a.stt - b.stt;
    });
    newColumns.unshift({
      title: "Thao Tác",
      key: "operation",
      // fixed: "right",
      width: 15,
      render: (cell) => (
        <>
          <Button type="default" danger onClick={() => deleteAllTours()}>
            X
          </Button>
          <Button type="default" onClick={() => createToursFromCatRaw(cell)}>
            Load Tours
          </Button>
        </>
      ),
    });
    setColumns(newColumns);
  }, [tourCats, tourCatConfig]);

  const handleSave = (row) => {
    const newData = [...tourCats];
    const index = newData.findIndex((item) => row.fid === item.fid);
    const item = newData[index];
    //// TODO: Save to the redux store
    //// Create field before saving to firestore database
    // let newField = createConfigFieldFromEl(row);
    // dispatch(editTourCat({ ...item, ...row }));
  };

  const handleSwitchChange = (cell, row) => {
    const newData = [...tourCats];
    const index = newData.findIndex((item) => row.fid === item.fid);
    const item = newData[index];
    console.log(newData);
    // item.isDisplay = !cell;
    // dispatch(editTourCat(item));
  };

  const createToursFromCatRaw = (cell) => {
    let catData = { tourCatId: cell.fid, tourCatUrl: cell.url };
    Swal.fire({
      title: "Upload Firebase",
      text: `Bạn có muốn lưu database ${
        tourRaw[cell.url].length
      } tour thuộc danh mục này?`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Chấp Nhận",
      cancelButtonText: "Bỏ Qua",
    }).then((result) => {
      if (result.isConfirmed) {
        createToursPromiseAll(tourRaw[cell.url], catData).then((res) => {
          Swal.fire(
            "Thành Công!",
            "Upload dữ liệu lên firebase thành công",
            "success"
          );
        });
      }
    });
    // console.log(tourRaw[testUrl]);
  };

  const deleteAllTours = async () => {
    let tours = await toursApi.getAllTours();
    Swal.fire({
      title: "Upload Firebase",
      text: `Bạn có xóa tất cả tours?`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Chấp Nhận",
      cancelButtonText: "Bỏ Qua",
    }).then(async (result) => {
      if (result.isConfirmed) {
        for (const tour of tours) {
          await toursApi.deleteTour(tour.fid);
        }
        Swal.fire(
          "Thành Công!",
          "Delete dữ liệu lên firebase thành công",
          "success"
        );
      }
    });
  };

  async function createToursFromRaw(e) {
    let countFirebase = await toursApi.countTours();
    if (countFirebase === 0) {
      Swal.fire({
        title: "Cảnh Báo",
        text: `Bạn có muốn tạo mới danh sách tour từ dữ liệu RAW?`,
        showDenyButton: false,
        showCancelButton: true,
        cancelButtonText: "Bỏ Qua",
        confirmButtonText: `Đồng Ý`,
      }).then(async (result) => {
        if (result.isConfirmed) {
          createToursFromCatRaw();
          // TODO: Check if there are existing data -> bypass
          // let data_ = [...originalData];
          // createToursPromiseAll(firebaseTours, data_)
          //   .then((res) => {
          //     let countErr = res.filter((data) => data.isError).length;
          //     Swal.fire(
          //       "Thành Công!",
          //       `Số bản ghi thành công ${
          //         data_.length - countErr
          //       }, số bản ghi bị lỗi ${countErr}`,
          //       "success"
          //     );
          //     setData(data_);
          //   })
          //   .catch((err) => {
          //     Swal.fire("Lỗi!", `Lưu Thay Đổi Bị Lỗi ${err}`, "danger");
          //   });
        } else if (result.isDenied) {
          return;
        }
      });
    }
  }

  return (
    <div>
      <Space style={{ marginBottom: 16 }}>
        <Button type="primary" onClick={(e) => createToursFromRaw(e)}>
          Tạo Tất Cả Tour Từ RAW
        </Button>
        <Button type="default" danger onClick={(e) => deleteAllTours()}>
          Xóa Tất Cả Tours
        </Button>
      </Space>
      <Table
        // loading={loading}
        columns={columns}
        dataSource={tourCats}
        rowKey="fid"
        scroll={{ y: 500 }}
        pagination={{
          pageSize: 30,
          showSizeChanger: true,
          pageSizeOptions: ["10", "20", "30", "50", "100"],
        }}
        // sticky
      />
    </div>
  );
}

export default TourTableRaw;

async function createToursPromiseAll(insertData, catData) {
  return Promise.all(
    insertData.map((data) => {
      return toursApi.createTour({ ...data, tourCat: catData });
    })
  );
}
