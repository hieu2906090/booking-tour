import React from "react";
import SectionItem from "./SectionItem";

function Section() {
  return (
    <div className="col-xs-12 no-padding tourHomeContainer ">
      <div className="col-xs-12 no-padding">
        <h3 className="localHeadLine hasLine">
          <a href="">
            <span>iVIVU Tết Tân Sửu</span>
            <span className="readMoreTours hidden-xs">
              XEM THÊM TOURS{" "}
              <i className="glyphicon glyphicon-chevron-right"></i>
            </span>
            <span className="clearfix"></span>
          </a>
        </h3>
        <div className="row">
          <SectionItem></SectionItem>
        </div>
      </div>
    </div>
  );
}

export default Section;
