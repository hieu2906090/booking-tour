import React from "react";

function HeadSearchPopOver() {
  return (
    <div className="col-xs-12 departure-popover__item">
      <div
        className="col-xs-12 departure-popover__location no-padding handleBarsDepartureLocationItem"
        data-location="Hồ Chí Minh"
      >
        <div className="media-body media-middle">
          <h4 className="media-heading">Hồ Chí Minh</h4>
          <span className="vcolor-primary"></span>
          <i className="fas fa-check"></i>
        </div>
      </div>
    </div>
  );
}

export default HeadSearchPopOver;
