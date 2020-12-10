import React from "react";
import Header from "../../components/Header";
import "../../assets/css/TourFilter/TourFilter.css";
import HeadSearch from "./components/HeadSearch/HeadSearch";

function TourFilter(props) {
  return (
    <div className="content-wrapper">
      <Header></Header>
      <div className="container">
        <div className="col-xs-12 no-padding">
          <div className="row">
            <HeadSearch></HeadSearch>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TourFilter;
