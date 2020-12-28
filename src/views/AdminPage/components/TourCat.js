import React from "react";
import TourCatTableRaw from "./TourCat/TourCatTableRaw";
import { Tabs } from "antd";

const { TabPane } = Tabs;
function callback(key) {
  console.log(key);
}

function TourCat() {
  return (
    <Tabs onChange={callback} type="card">
      <TabPane tab="DS Phân Loại (RAW)" key="1">
        <TourCatTableRaw></TourCatTableRaw>
      </TabPane>
      <TabPane tab="DS Phân Loại" key="2">
        Content of Tab Pane 2
      </TabPane>
      <TabPane tab="Cấu Hình Hiển Thị" key="3">
        Content of Tab Pane 3
      </TabPane>
    </Tabs>
  );
}

export default TourCat;
