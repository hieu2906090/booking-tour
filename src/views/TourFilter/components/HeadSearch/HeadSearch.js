import React from "react";
import HeadSearchPopOver from "./HeadSearchPopOver";

function HeadSearch(props) {
  return (
    <div className=" container tour-list-search-container">
      <div className="col-xs-12 no-padding ">
        <div className="col-xs-12 search-form tour-list">
          <div className="row main-search-form" data-display="false">
            <div className="col-xs-12 col-md-4 no-padding-r md-margin-bottom-15 typeahead-container">
              <div className="col-xs-12 v_field no-padding" id="typeAHeadDiv">
                <div
                  className="v_field__icon-container"
                  style={{ position: "absolute" }}
                >
                  <i className="icon margin-left-15 fas fa-map-marker-alt"></i>
                </div>
                <div
                  className="v_field__content"
                  id="LocationContent"
                  style={{
                    position: "absolute",
                    paddingLeft: "40px",
                    width: "100%",
                  }}
                  onclick="TriggerSearch();"
                >
                  <p className="v_field__text" id="TourDepartLocation">
                    Nha Trang
                  </p>
                  <p
                    className="v_field__description vcolor-primary"
                    style={{ color: "#003C71" }}
                    id="TourCount"
                  >
                    36 Tours
                  </p>
                  <input type="hidden" id="keyword-hd" value="" />
                </div>
                <div
                  style={{ width: "100%" }}
                  className="hidden"
                  id="SearchContent"
                >
                  <span
                    className="twitter-typeahead"
                    style={{ position: "relative", display: "inline-block" }}
                  >
                    <input
                      type="text"
                      className="form-control v_field__input search-input typeahead tt-hint"
                      maxlength="200"
                      readonly=""
                      autocomplete="off"
                      spellcheck="false"
                      tabindex="-1"
                      dir="ltr"
                      style={{
                        position: "absolute",
                        top: "0px",
                        left: "0px",
                        borderColor: "transparent",
                        boxShadow: "none",
                        opacity: 1,
                        background:
                          "none 0% 0% / auto repeat scroll padding-box border-box rgba(0, 0, 0, 0)",
                      }}
                    />
                    <input
                      type="text"
                      className="form-control v_field__input search-input typeahead tt-input"
                      name="search-home-text"
                      id="search-home-text"
                      maxlength="200"
                      placeholder="Bạn muốn đi đâu?"
                      autocomplete="off"
                      spellcheck="false"
                      dir="auto"
                      style={{
                        position: "relative",
                        verticalAlign: "top",
                        backgroundColor: "transparent",
                      }}
                    />
                    <pre
                      ariaHidden="true"
                      style={{
                        position: "absolute",
                        visibility: "hidden",
                        whiteSpace: "pre",
                        fontFamily:
                          "Helvetica Neue, Helvetica, Arial, sans-serif",
                        fontSize: "16px",
                        fontStyle: "normal",
                        fontVariant: "normal",
                        fontWeight: 400,
                        wordSpacing: "0px",
                        letterSpacing: "0px",
                        textIndent: "0px",
                        textRendering: "auto",
                        textTransform: "none",
                      }}
                    ></pre>
                    <div
                      className="tt-menu"
                      style={{
                        position: "absolute",
                        top: "100%",
                        left: "0px",
                        zIndex: 100,
                        display: "none",
                      }}
                    >
                      <div className="tt-dataset tt-dataset-locas"></div>
                      <div className="tt-dataset tt-dataset-popularLocation"></div>
                    </div>
                  </span>
                  <input
                    type="hidden"
                    className="form-control v_field__input search-input"
                    name="tour-type"
                    id="tour-type"
                    value=""
                  />
                  <input
                    type="hidden"
                    className="form-control v_field__input search-input"
                    name="tour-link"
                    id="tour-link"
                    value="/du-lich/tour-nha-trang"
                  />
                </div>
              </div>
            </div>
            <div
              className="col-xs-12 col-sm-5 col-md-3 no-padding-r md-margin-bottom-15 dates"
              id="dates"
            >
              <div className="col-xs-12 no-padding date">
                <div className="col-xs-12 v_field">
                  <div className="v_field__icon-container">
                    <span className="fas fa-calendar-alt"></span>
                  </div>
                  <div className="v_field__content">
                    <p className="v_field__text" id="DateOfWeekCheckinStr">
                      Thứ năm
                    </p>
                    <p className="v_field__description" id="DateCheckinStr">
                      10-12-2020
                    </p>
                  </div>
                </div>
                <div className="col-xs-12 no-padding invisible-date-container">
                  <label
                    readonly=""
                    type="text"
                    className="v_field__input dates-date invisible-date-picker"
                    id="dates-date"
                    value="11-11-2017"
                  ></label>
                </div>
              </div>
            </div>
            <div
              className="col-xs-12 col-sm-5 col-md-3 no-padding-r md-margin-bottom-15 departure"
              id="departure"
            >
              <div className="col-xs-12 no-padding">
                <div className="col-xs-12 v_field">
                  <div className="v_field__icon-container">
                    <i className="fas fa-plane-departure"></i>
                  </div>
                  <div className="v_field__content">
                    <p className="v_field__text">Khởi hành từ</p>
                    <p className="v_field__description" id="DepartLocation">
                      hồ-chí-minh
                    </p>
                  </div>
                </div>
                <div className="col-xs-12 no-padding departure-container">
                  <label
                    readonly=""
                    type="text"
                    className="v_field__input departure departure-location"
                    id="departure-location"
                    value="Hồ Chí Minh"
                  ></label>
                </div>
                <div
                  className="col-xs-12 departure-popover"
                  data-display="false"
                  style={{ display: "none" }}
                >
                  <div
                    className="col-xs-12 departure-popover__inner"
                    id="departure-list"
                  >
                    <HeadSearchPopOver></HeadSearchPopOver>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xs-12 col-sm-2 col-md-2">
              <button className="btn btn-action btn-block  search-form-button btn-big">
                <b>
                  {" "}
                  Tìm <span className="visible-xs-inline-block">kiếm</span>
                </b>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeadSearch;
