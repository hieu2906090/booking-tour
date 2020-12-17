import React from "react";
import SideBar from "./SideBar/SideBar";
import ListView from "./ListView/ListView";
import "../../../assets/css/TourFilter/TourFilterContainer.css";

function TourFilterContainer() {
  return (
    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 no-padding">
      <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 no-padding v-margin-bottom-15">
        <div className="row">
          <ListView></ListView>
          <SideBar></SideBar>
        </div>
      </div>
    </div>
  );
}

export default TourFilterContainer;
