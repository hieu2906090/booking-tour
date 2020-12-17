import React from "react";
import "../../assets/css/TourDetail/TourDetail.css";
import Header from "../../components/Header";
import DetailSideBar from "./components/DetailSideBar";
import DetailContent from "./components/DetailContent";

function TourDetail(props) {
  return (
    <div className="content-wrapper">
      <Header></Header>
      <div className="container">
        <div className="col-xs-12 no-padding">
          <div className="row">
            <DetailSideBar></DetailSideBar>
            <DetailContent tour={props.tour}></DetailContent>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TourDetail;
