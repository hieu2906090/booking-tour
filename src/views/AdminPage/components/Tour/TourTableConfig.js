import React, { useEffect, useState, useContext, useRef } from "react";
import {
  sortableContainer,
  sortableElement,
  sortableHandle,
} from "react-sortable-hoc";
import { useSelector, useDispatch } from "react-redux";
import {
  Table,
  Button,
  Space,
  Popconfirm,
  Form,
  Input,
  Switch,
  Badge,
} from "antd";
import { MenuOutlined } from "@ant-design/icons";
import arrayMove from "array-move";
import "../../../../assets/css/AdminPage/TourCatTableConfig.css";
import {} from "../../../../redux/actions/toursConfig";
import { createTourConfig } from "../../../../redux/actions/toursConfig";
import EditableCell from "../EditableCell";
import { reCreateOrderSttWhenSortEnd } from "../../../../utils/tableHelper";
import { EditableContext } from "../../../../context/editableContext";

function TourTableConfig() {
  const tours = useSelector((state) => state.tours.data);
  const tourCats = useSelector((state) => state.tourCats.data);
  const tourConfig = useSelector((state) => state.tourConfig.data);
  const [data, setData] = useState([]);
  const [maxStt, setMaxStt] = useState(0);
  const dispatch = useDispatch();
  const SortableItem = sortableElement((props) => <tr {...props} />);
  const SortableContainer = sortableContainer((props) => <tbody {...props} />);
  const DragHandle = sortableHandle(() => (
    <MenuOutlined style={{ cursor: "pointer", color: "#999" }} />
  ));
  const columns = [
    {
      title: "Sort",
      dataIndex: "sort",
      width: 5,
      className: "drag-visible",
      render: () => <DragHandle />,
    },
    {
      title: "STT",
      width: 5,
      dataIndex: "stt",
      key: "stt",
      className: "drag-visible",
    },
    {
      title: "Trường Dữ Liệu",
      width: 15,
      dataIndex: "field",
      key: "field",
      className: "drag-visible",
      editable: true,
    },
    {
      title: "Tên Hiển Thị Bảng",
      width: 20,
      dataIndex: "headerName",
      key: "headerName",
      className: "drag-visible",
      editable: true,
    },
    {
      title: "Độ Rộng Cột",
      width: 10,
      dataIndex: "width",
      key: "width",
      className: "drag-visible",
      editable: true,
    },
    {
      title: "Hiển Thị",
      width: 10,
      dataIndex: "display",
      key: "display",
      className: "drag-visible",
      render: (cell, row) => {
        return (
          <Switch
            onChange={() => handleSwitchRowChange(cell, row, "DISP")}
            defaultChecked={row.display}
          ></Switch>
        );
      },
    },
    {
      title: "Sắp Xếp",
      width: 10,
      dataIndex: "isSort",
      key: "isSort",
      className: "drag-visible",
      render: (cell, row) => {
        return (
          <Switch
            onChange={() => handleSwitchRowChange(cell, row, "SORT")}
            defaultChecked={row.isSort}
          ></Switch>
        );
      },
    },
    {
      title: "Thay Đổi Text",
      width: 10,
      dataIndex: "isEdit",
      key: "isEdit",
      className: "drag-visible",
      render: (cell, row) => {
        return (
          <Switch
            onChange={() => handleSwitchRowChange(cell, row, "EDIT")}
            defaultChecked={row.isEdit}
          ></Switch>
        );
      },
    },
    {
      title: "Thay Đổi True/False",
      width: 10,
      dataIndex: "isSwitch",
      key: "isSwitch",
      className: "drag-visible",
      render: (cell, row) => {
        return (
          <Switch
            onChange={() => handleSwitchRowChange(cell, row, "SWITCH")}
            defaultChecked={row.isSwitch}
          ></Switch>
        );
      },
    },
    {
      title: "Hiển Thị Đủ",
      width: 10,
      dataIndex: "isEllipsis",
      key: "isEllipsis",
      className: "drag-visible",
      render: (cell, row) => {
        return (
          <Switch
            onChange={() => handleSwitchRowChange(cell, row, "ELLIPSIS")}
            defaultChecked={row.isEllipsis}
          ></Switch>
        );
      },
    },
    {
      title: "Thao Tác",
      key: "operation",
      // fixed: "right",
      width: 10,
      render: () => (
        <Button type="default" danger>
          X
        </Button>
      ),
    },
  ];
  const newcolumns = columns.map((col) => {
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

  function createDataTableConfig(obj) {
    let count = 1;
    let data = [];
    // If full and nothing to compare -> get from firestore (redux as well)
    if (
      tourConfig &&
      Object.entries(tourConfig).length >= Object.entries(obj).length
    ) {
      for (const [key, value] of Object.entries(tourConfig)) {
        data.push(value);
        count += 1;
      }
      data.sort((a, b) => {
        return a.stt - b.stt;
      });
      return [data, count];
    }
    if (tourConfig) {
      for (const [key, _value] of Object.entries(obj)) {
        if (tourConfig.hasOwnProperty(key)) {
          data.push(tourConfig[key]);
        } else {
          data.push({
            field: key,
            headerName: "",
            display: false,
            stt: count,
          });
        }
        count += 1;
      }
      reCreateOrderSttWhenSortEnd(data);
      return [data, count];
    }
    for (const [key, _value] of Object.entries(obj)) {
      data.push({
        field: key,
        headerName: "",
        display: false,
        stt: count,
      });
      count += 1;
    }
    return [data, count];
  }

  const handleSwitchRowChange = (cell, row, mode) => {
    const newData = [...data];
    const index = newData.findIndex((item) => row.field === item.field);
    const item = newData[index];
    switch (mode) {
      case "SORT":
        item.isSort = !cell;
        break;
      case "DISP":
        item.display = !cell;
        break;
      case "EDIT":
        item.isEdit = !cell;
        break;
      case "SWITCH":
        item.isSwitch = !cell;
        break;
      case "ELLIPSIS":
        item.isEllipsis = !cell;
        break;
      default:
        break;
    }
    let newField = createConfigFieldFromEl(row);
    dispatch(createTourConfig(newField));
    setData(newData);
  };

  const handleSave = (row) => {
    const newData = [...data];
    const index = newData.findIndex((item) => row.field === item.field);
    const item = newData[index];
    // TODO: Save to the redux store
    // Create field before saving to firestore database
    let newFirestoreObj = createConfigFieldFromEl(row);
    dispatch(createTourConfig(newFirestoreObj));

    // Remove the old item and add new state
    newData.splice(index, 1, { ...item, ...row });
    setData(newData);
  };

  const createConfigFieldFromEl = (row) => {
    let newObj = {};
    newObj[row.field] = row;
    // Create new obj to push to firestore
    let newFirestoreObj = { ...tourConfig, ...newObj };
    return newFirestoreObj;
  };

  useEffect(() => {
    let [data, stt] = createDataTableConfig(tours[0]);
    setData(data);
    setMaxStt(stt);
  }, [tours]);

  if (tours.length === 0) {
    return null;
  }

  function addNewField() {
    setMaxStt(maxStt + 1);
    setData([
      ...data,
      {
        stt: maxStt,
        field: "New Field",
        headerName: "New Field",
        display: false,
      },
    ]);
  }

  const DraggableContainer = (props) => (
    <SortableContainer
      useDragHandle
      helperClass="row-dragging"
      onSortEnd={onSortEnd}
      {...props}
    />
  );

  const DraggableBodyRow = ({ className, style, ...restProps }) => {
    const dataSource = data;
    // function findIndex base on Table rowKey props and should always be a right array index
    const index = dataSource.findIndex(
      (x) => x.stt === restProps["data-row-key"]
    );
    // return <SortableItem index={index} {...restProps} />;
    const [form] = Form.useForm();
    return (
      <Form form={form} component={false}>
        <EditableContext.Provider value={form}>
          {/* <tr {...props} /> */}
          <SortableItem className={className} index={index} {...restProps} />
        </EditableContext.Provider>
      </Form>
    );
  };

  const onSortEnd = ({ oldIndex, newIndex }) => {
    const dataSource = data;
    let newObj = {};
    if (oldIndex !== newIndex) {
      const newData = arrayMove(
        [].concat(dataSource),
        oldIndex,
        newIndex
      ).filter((el) => !!el);
      // TODO: Change the stt number to represent the order in redux store
      reCreateOrderSttWhenSortEnd(newData);
      for (const item of newData) {
        newObj = createConfigFieldFromEl(item);
      }
      dispatch(createTourConfig(newObj));
      setData(newData);
    }
  };

  if (!data) {
    return null;
  }

  return (
    <div>
      <Space style={{ marginBottom: 16 }}>
        <Button type="primary" onClick={addNewField}>
          Thêm Mới Trường
        </Button>
      </Space>
      <Table
        // loading={loading}
        columns={newcolumns}
        rowClassName={() => "editable-row"}
        dataSource={data}
        scroll={{ y: 600 }}
        pagination={{ pageSize: 30 }}
        rowKey="stt"
        components={{
          body: {
            wrapper: DraggableContainer,
            row: DraggableBodyRow,
            cell: EditableCell,
          },
        }}
      />
    </div>
  );
}
export default TourTableConfig;
