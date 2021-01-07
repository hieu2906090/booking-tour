import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Table, Button, Space, Form, Switch, Empty, Badge } from "antd";
import EditableCell from "../../components/EditableCell";
import "../../../../assets/css/AdminPage/TourCatTable.css";
import { EditableContext } from "../../../../context/editableContext";
import { editTourCat } from "../../../../redux/actions/tourCats";
import { createColumnsFromObj } from "../../../../utils/tableHelper";
import * as toursApi from "../../../../apis/tours";
import * as tourCatsApi from "../../../../apis/toursCat";
import Swal from "sweetalert2";

const EditableRow = ({ index, ...props }) => {
  const [form] = Form.useForm();
  return (
    <Form form={form} component={false}>
      <EditableContext.Provider value={form}>
        <tr {...props} />
      </EditableContext.Provider>
    </Form>
  );
};

function TourCatTable() {
  const tourRaw = useSelector((state) => state.tourRaw.data);
  const tourCats = useSelector((state) => state.tourCats.data);
  const tourCatConfig = useSelector((state) => state.tourCatConfig.data);
  const dispatch = useDispatch();
  const [columns, setColumns] = useState([]);
  const [data, setData] = useState([]);

  useEffect(() => {
    // Set Init Data
    let newColumns = createColumnsFromObj(
      tourCats[0],
      tourCatConfig,
      handleSwitchChange
    );
    newColumns = newColumns.map((col) => {
      if (col.key === "hasFData") {
        return {
          ...col,
          render: (cell) =>
            cell ? (
              <Button
                style={{
                  backgroundColor: "#52c41a",
                  color: "white",
                  cursor: "default",
                }}
              >
                Có
              </Button>
            ) : null,
        };
      }
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
    newColumns.push({
      title: "Thao Tác",
      key: "operation",
      // fixed: "right",
      width: 15,
      render: (cell) => (
        <>
          <Button type="default" danger onClick={() => deleteTourCat(cell)}>
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
    dispatch(editTourCat({ ...item, ...row }));
  };

  const handleSwitchChange = (cell, row, key) => {
    const newData = [...tourCats];
    const index = newData.findIndex((item) => row.fid === item.fid);
    const item = newData[index];
    console.log(newData);
    item[key] = !cell;
    dispatch(editTourCat(item));
  };

  if (tourCats.length === 0) {
    return null;
  }

  const deleteTourCat = (row) => {
    console.log(row);
    Swal.fire({
      title: "Xóa Phân Loại",
      text: `Bạn có muốn xóa phân loại tour và tất cả tour của phân loại này?`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Chấp Nhận",
      cancelButtonText: "Bỏ Qua",
    }).then((result) => {
      if (result.isConfirmed) {
        tourCatsApi.deleteTourCatBatch(row).then((data) => {
          console.log("Delete Firebabse data: ", data);
          Swal.fire("Thành Công!", "Xóa dữ liệu tourCat thành công", "success");
        });
      }
    });
  };

  const createToursFromCatRaw = (cell) => {
    let catData = {
      tourCatId: cell.fid,
      tourCatUrl: cell.url,
      tourCatName: cell.displayName ? cell.displayName : null,
    };
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
          const newData = [...tourCats];
          const index = newData.findIndex((item) => cell.fid === item.fid);
          const item = newData[index];
          item.hasFData = true;
          dispatch(editTourCat({ ...item }));
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

  return (
    <div>
      <Space style={{ marginBottom: 16 }}>
        <Button type="primary">Tạo Danh Mục Tour Mới</Button>
      </Space>
      <Table
        // loading={loading}
        title={() => <strong>Bảng Dữ Liệu Phân Loại Tour (Firebase)</strong>}
        columns={columns}
        rowClassName={() => "editable-row"}
        dataSource={tourCats.length !== 0 ? tourCats : null}
        scroll={{ y: 400 }}
        pagination={{
          pageSize: 30,
          showSizeChanger: true,
          pageSizeOptions: ["10", "20", "30", "50", "100"],
        }}
        rowKey="fid"
        components={{
          body: {
            row: EditableRow,
            cell: EditableCell,
          },
        }}
        // sticky
      />
    </div>
  );
}

export default TourCatTable;

async function createToursPromiseAll(insertData, catData) {
  return Promise.all(
    insertData.map((data) => {
      return toursApi.createTour({
        ...data,
        catName: catData.tourCatName,
        tourCat: catData,
      });
    })
  );
}
