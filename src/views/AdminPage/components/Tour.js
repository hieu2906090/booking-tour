import { Tabs } from "antd";
import React from "react";
import TourTable from "./Tour/TourTable";
import TourTableConfig from "./Tour/TourTableConfig";
import TourTableRaw from "./Tour/TourTableRaw";

const { TabPane } = Tabs;
function callback(key) {
  console.log(key);
}

function Tour() {
  return (
    <Tabs onChange={callback} type="card">
      <TabPane tab="DS Tour (RAW)" key="1">
        <TourTableRaw></TourTableRaw>
      </TabPane>
      <TabPane tab="DS Tour" key="2">
        <TourTable></TourTable>
      </TabPane>
      <TabPane tab="Cấu Hình Bảng" key="3">
        <TourTableConfig></TourTableConfig>
      </TabPane>
    </Tabs>
  );
}

export default Tour;
