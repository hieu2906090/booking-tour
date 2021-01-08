import { Table, Button, Switch } from "antd";

export const numberWithCommas = (x) => {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

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
              // Case1: Sort if value is boolean
              if (typeof a[key] === "boolean") {
                return a === b ? 0 : a ? -1 : 1;
              }
              // Case2: Sort if value is string
              if (isNaN(parseInt(a[key]))) {
                if (a[key] < b[key]) {
                  return -1;
                }
                return 1;
              }
              // Case3: Sort if value is number
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
                  handleSwitchChange(cell, row, key);
                }}
                defaultChecked={row[key]}
              ></Switch>
            ),
          }
        : null;

      const innerEditable = _value.isEdit ? { editable: "true" } : null;

      const innerEllipsis = _value.isEllipsis
        ? {
            ellipsis: {
              showTitle: true,
            },
          }
        : null;

      columns.push({
        title: _value.headerName,
        width: _value.width ? parseInt(_value.width) : 15,
        dataIndex: key,
        key: key,
        stt: _value.stt,
        ...sortObj,
        ...innerSwitch,
        ...innerEditable,
        ...innerEllipsis,
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
