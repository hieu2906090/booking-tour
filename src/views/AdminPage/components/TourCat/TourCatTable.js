import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Table, Button, Space, Form, Switch } from "antd";
import EditableCell from "../../components/EditableCell";
import "../../../../assets/css/AdminPage/TourCatTable.css";
import { EditableContext } from "../../../../context/editableContext";
import { editTourCat } from "../../../../redux/actions/tourCats";
import { createColumnsFromObj } from "../../../../utils/tableHelper";

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
      width: 10,
      render: () => (
        <Button type="default" danger>
          X
        </Button>
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

  const handleSwitchChange = (cell, row) => {
    const newData = [...tourCats];
    const index = newData.findIndex((item) => row.fid === item.fid);
    const item = newData[index];
    console.log(newData);
    item.isDisplay = !cell;
    dispatch(editTourCat(item));
  };

  if (tourCats.length === 0) {
    return null;
  }

  return (
    <div>
      <Space style={{ marginBottom: 16 }}>
        <Button type="primary">Tạo Danh Mục Tour Mới</Button>
      </Space>
      <Table
        // loading={loading}
        columns={columns}
        rowClassName={() => "editable-row"}
        dataSource={tourCats}
        scroll={{ y: 600 }}
        pagination={{ pageSize: 30 }}
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
