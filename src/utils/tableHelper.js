import { Table, Button, Switch } from "antd";

export const reCreateOrderSttWhenSortEnd = (arr) => {
  let countIncre = 1;
  arr.forEach((element) => {
    element.stt = countIncre;
    countIncre += 1;
  });
  return arr;
};

export const createColumnsFromObj = (obj, config, handleSwitchChange) => {
  let count = 0;
  let columns = [];
  if (config) {
    for (const [key, _value] of Object.entries(config)) {
      if (!_value.display) {
        continue;
      }
      const sortObj = _value.isSort
        ? {
            sorter: (a, b) => {
              console.log(key);
              return parseInt(a[key]) - parseInt(b[key]);
            },
            // sortDirections: ["ascend"],
          }
        : null;
      const innerSwitch = _value.isSwitch
        ? {
            width: 8,
            render: (cell, row) => (
              <Switch
                onChange={() => {
                  handleSwitchChange(cell, row);
                }}
                defaultChecked={row[key]}
              ></Switch>
            ),
          }
        : null;

      const innerEditable = _value.isEdit ? { editable: true } : null;

      columns.push({
        title: _value.headerName,
        width: _value.width ? parseInt(_value.width) : 15,
        dataIndex: key,
        key: key,
        stt: _value.stt,
        ...sortObj,
        ...innerSwitch,
        ...innerEditable,
      });
      count += 1;
    }
    columns.sort((a, b) => a.stt - b.stt);
    return columns;
  }
  for (const [key, _value] of Object.entries(obj)) {
    columns.push({
      title: key,
      width: 15,
      dataIndex: key,
      key: count,
    });
    count += 1;
  }
  return columns;
};
