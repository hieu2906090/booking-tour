import React from "react";
import TourCatTableRaw from "./TourCat/TourCatTableRaw";
import { Tabs } from "antd";
import TourCatTable from "./TourCat/TourCatTable";
import TourCatTableConfig from "./TourCat/TourCatTableConfig";

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
        <TourCatTable></TourCatTable>
      </TabPane>
      <TabPane tab="Cấu Hình Hiển Thị" key="3">
        <TourCatTableConfig></TourCatTableConfig>
      </TabPane>
    </Tabs>
  );
}

export default TourCat;
