import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Table, Button, Space, Form } from "antd";
import EditableCell from "../../components/EditableCell";
import "../../../../assets/css/AdminPage/TourCatTable.css";
import { EditableContext } from "../../../../context/editableContext";
import { editTour } from "../../../../redux/actions/tours";
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

function TourTable() {
  const tours = useSelector((state) => state.tours.data);
  const tourConfig = useSelector((state) => state.tourConfig.data);
  const dispatch = useDispatch();
  const [columns, setColumns] = useState([]);
  const [distinctTourCat, setDistinctTourCat] = useState([]);

  useEffect(() => {
    setDistinctTourCat(new Set(tours.map((item) => item.tourCat.tourCatId)));
    // Set Init Data
    let newColumns = createColumnsFromObj(
      tours[0],
      tourConfig,
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
          <Button type="default" danger onClick={() => deleteTour(cell)}>
            X
          </Button>
        </>
      ),
    });
    setColumns(newColumns);
  }, [tours, tourConfig]);

  const handleSave = (row) => {
    const newData = [...tours];
    const index = newData.findIndex((item) => row.tourId === item.tourId);
    const item = newData[index];
    //// TODO: Save to the redux store
    //// Create field before saving to firestore database
    // let newField = createConfigFieldFromEl(row);
    dispatch(editTour({ ...item, ...row }));
  };

  const handleSwitchChange = (cell, row, key) => {
    console.log(distinctTourCat);
    const newData = [...tours];
    const index = newData.findIndex((item) => row.tourId === item.tourId);
    const item = newData[index];
    item[key] = !cell;
    dispatch(editTour(item));
  };

  if (tours.length === 0) {
    return null;
  }

  const deleteTour = (row) => {
    console.log(row);
    Swal.fire({
      title: "Xóa Tour",
      text: `Bạn có muốn xóa tour?`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Chấp Nhận",
      cancelButtonText: "Bỏ Qua",
    }).then((result) => {
      if (result.isConfirmed) {
        toursApi.deleteTour(row.tourId).then((data) => {
          Swal.fire("Thành Công!", "Xóa dữ liệu tour thành công", "success");
        });
      }
    });
  };

  return (
    <div>
      <Space style={{ marginBottom: 16 }}>
        <Button type="primary">Tạo Tour Mới</Button>
      </Space>
      <Table
        // loading={loading}
        title={() => <strong>Bảng Dữ Liệu Tour (Firebase)</strong>}
        columns={columns}
        rowClassName={() => "editable-row"}
        dataSource={tours.length !== 0 ? tours : null}
        scroll={{ y: 400 }}
        pagination={{
          pageSize: 30,
          showSizeChanger: true,
          pageSizeOptions: ["10", "20", "30", "50", "100"],
        }}
        rowKey="tourId"
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

export default TourTable;
