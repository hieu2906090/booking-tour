import React, { useEffect, useState } from "react";
import { Table, Button, Space } from "antd";
import { useSelector } from "react-redux";
import * as tourCatApi from "../../../../apis/toursCat";
import Swal from "sweetalert2";
import { CloseCircleOutlined, RedoOutlined } from "@ant-design/icons";
import { uuidv4 } from "../../../../utils/idHelper";

function TourCatTableRaw() {
  const toursRaw = useSelector((state) => state.tourRaw.data);
  const tourCats = useSelector((state) => state.tourCats.data);
  const [data, setData] = useState([]);
  const [originalData, setOriginalData] = useState([]);
  const columns = [
    {
      title: "STT",
      width: 5,
      dataIndex: "stt",
      key: "stt",
    },
    {
      title: "Error",
      width: 20,
      key: "3",
      render: (data) => {
        if (!data.isError) {
          return null;
        }
        return (
          <>
            <Button type="default" danger icon={<CloseCircleOutlined />}>
              Lỗi
            </Button>{" "}
            <Button type="default" icon={<RedoOutlined />}>
              Reload
            </Button>
          </>
        );
      },
    },
    {
      title: "URL",
      width: 30,
      dataIndex: "url",
      key: "1",
    },
    {
      title: "Count",
      width: 10,
      dataIndex: "count",
      key: "2",
    },

    {
      title: "Action",
      key: "operation",
      // fixed: "right",
      width: 10,
      render: () => (
        <Button type="default" danger>
          Xóa
        </Button>
      ),
    },
  ];

  // const [loading, setLoading] = useState(true);
  useEffect(() => {
    let count = 0;
    let listData = [];
    for (const [key, _value] of Object.entries(toursRaw)) {
      count += 1;
      listData.push({
        id: uuidv4(),
        stt: count,
        key: key,
        url: key,
        count: _value.length,
        tours: _value.map((tour) => {
          return {
            id: tour.tourId,
            url: tour.tourUrl,
            imgSrc: tour.tourImgSrc,
          };
        }),
      });
    }
    // console.log(originalData);
    setData([...listData]);
    setOriginalData([...listData]);
  }, [toursRaw]);

  async function createTourCatFromRaw(e, data) {
    let tours = await tourCatApi.getAllTourCats();
    if (tours.length === 0) {
      Swal.fire({
        title: "Cảnh Báo",
        text: `Bạn có muốn tạo mới phân loại tour từ dữ liệu RAW?`,
        showDenyButton: false,
        showCancelButton: true,
        cancelButtonText: "Bỏ Qua",
        confirmButtonText: `Đồng Ý`,
      }).then(async (result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
          // TODO: Check if there are existing data -> bypass
          let data_ = [...originalData];
          uploadAllTourCatPromsie(tours, data_)
            .then((res) => {
              let countErr = res.filter((data) => data.isError).length;
              Swal.fire(
                "Thành Công!",
                `Số bản ghi thành công ${
                  data_.length - countErr
                }, số bản ghi bị lỗi ${countErr}`,
                "success"
              );
              setData(data_);
            })
            .catch((err) => {
              Swal.fire("Lỗi!", `Lưu Thay Đổi Bị Lỗi ${err}`, "danger");
            });
        } else if (result.isDenied) {
          return;
        }
      });
    }
    if (tours.length !== 0) {
      Swal.fire(
        "Thất Bại!",
        `Bạn không được tạo mới dữ liệu! Dữ liệu đang có ${tours.length} bản ghi! Bạn phải xóa trước khi tạo mới.`,
        "error"
      );
    }
  }

  async function uploadAllTourCatPromsie(existingData, data_) {
    console.log("Existing Data la: ", existingData);
    return Promise.all(
      data_.map((data) => {
        if (existingData.find((el) => el.id === data.id)) {
          return;
        }
        return tourCatApi.createTourCat(data);
      })
    );
  }

  async function deleteAllTourCats() {
    let tours = await tourCatApi.getAllTourCats();
    console.log(tours);
    if (tours !== undefined) {
      Swal.fire({
        title: "Cảnh Báo",
        text: `Bạn có muốn xóa dữ liệu phân loại tour hiện tại? Hiện dữ liệu này đang có ${tours.length} bản ghi`,
        showDenyButton: false,
        showCancelButton: true,
        cancelButtonText: "Bỏ Qua",
        confirmButtonText: `Đồng Ý`,
        icon: "warning",
      }).then(async (result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
          deleteAllTourCatsPromise(tours)
            .then((res) => {
              // let countErr = res.filter((data) => data.isError).length;
              Swal.fire("Thành Công", `Xóa thành công`, "success");
            })
            .catch((err) => {
              Swal.fire(`Lỗi: ${err}`);
            });
        } else if (result.isDenied) {
          return;
        }
      });
    }
  }

  function deleteAllTourCatsPromise(data_) {
    return Promise.all(
      data_.map((data) => {
        tourCatApi.deleteTourCat(data.fid);
      })
    );
  }

  return (
    <div>
      <Space style={{ marginBottom: 16 }}>
        <Button type="primary" onClick={(e) => createTourCatFromRaw(e, data)}>
          Tạo Danh Mục Tour
        </Button>
        <Button type="default" danger onClick={(e) => deleteAllTourCats()}>
          Xóa Danh Mục Tour
        </Button>
      </Space>
      <Table
        // loading={loading}
        columns={columns}
        dataSource={data}
        scroll={{ y: 300 }}
        pagination={{ pageSize: 30 }}
        // sticky
      />
    </div>
  );
}

export default TourCatTableRaw;
