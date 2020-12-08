import React from "react";
import "../../assets/css/TourDetail.css";

function TourDetail(props) {
  console.log(props.tour.tourDetail.content);
  return (
    <div
      style={{ marginLeft: 0 }}
      dangerouslySetInnerHTML={{ __html: props.tour.tourDetail.content }}
    ></div>
  );
}

export default TourDetail;
