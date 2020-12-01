import React from "react";
import "./Slider.css";

function Slider() {
  return (
    <>
      <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 no-padding">
        <div
          className="tourHomeHeader"
          id="bg-banner-home"
          style={{
            backgroundImage:
              "url(" + "//cdn2.ivivu.com/2020/11/24/09/moc-chau2.png)",
          }}
        >
          <div className="container">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
              <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-8 col-lg-8 tourHomeSearchPanel no-padding">
                  <div className="positionPanel">
                    <div
                      className="col-xs-12 col-sm-12 col-md-12 col-lg-12 no-padding tourHomeSearchForm"
                      id="tour-form-panel"
                    >
                      <div
                        className="col-xs-12 col-sm-12 col-md-12 col-lg-12 no-padding typeAHeadDiv"
                        id="typeAHeadDiv"
                      >
                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 no-padding tourHomeIntro">
                          <h1>Du lịch theo phong cách riêng</h1>
                          <h2>Trải nghiệm trọn vẹn - Giá cả phải chăng.</h2>
                        </div>
                        <div className="col-xs-12 search-form home-page">
                          <div className="row">
                            <div className="col-xs-12 v-margin-bottom-15 typeahead-container search-fullframe">
                              <div className="col-xs-12 no-padding v_field">
                                <div className="input-icon">
                                  <i className="fas fa-map-marker-alt"></i>
                                </div>
                                <span
                                  className="twitter-typeahead"
                                  style={{
                                    position: "relative",
                                    display: "inline-block",
                                  }}
                                >
                                  <input
                                    type="text"
                                    className="form-control v_field__input search-input typeahead tt-hint"
                                    maxLength="200"
                                    readOnly=""
                                    autoComplete="off"
                                    spellCheck="false"
                                    tabIndex="-1"
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
                                    maxLength="200"
                                    placeholder="Bạn muốn đi đâu?"
                                    autoComplete="off"
                                    spellCheck="false"
                                    dir="auto"
                                    style={{
                                      position: "relative",
                                      verticalAlign: "top",
                                      backgroundColor: "transparent",
                                    }}
                                  />
                                  <pre
                                    aria-hidden="true"
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
                                  value=""
                                />
                              </div>
                            </div>

                            <div
                              className="col-xs-12 col-sm-5 no-padding-r dates md-margin-bottom-15"
                              id="dates"
                            >
                              <div className="col-xs-12 no-padding date">
                                <div className="col-xs-12 v_field">
                                  <div className="v_field__icon-container">
                                    <i className="fas fa-calendar-day"></i>
                                  </div>
                                  <div className="v_field__content">
                                    <p
                                      className="v_field__text"
                                      id="DateOfWeekCheckinStr"
                                    >
                                      Thứ ba
                                    </p>
                                    <p
                                      className="v_field__description"
                                      id="DateCheckinStr"
                                    >
                                      01-12-2020
                                    </p>
                                  </div>
                                </div>
                                <div className="col-xs-12 no-padding invisible-date-container">
                                  <label
                                    readOnly=""
                                    type="text"
                                    className="v_field__input dates-date invisible-date-picker"
                                    id="dates-date"
                                    value="11-11-2017"
                                  ></label>
                                </div>
                              </div>
                            </div>

                            <div
                              className="col-xs-12 col-sm-5 no-padding-r departure md-margin-bottom-15"
                              id="departure"
                            >
                              <div className="col-xs-12 no-padding form">
                                <div className="col-xs-12 v_field">
                                  <div className="v_field__icon-container">
                                    <i className="fas fa-plane-departure"></i>
                                  </div>
                                  <div className="v_field__content">
                                    <p className="v_field__text">
                                      Khởi hành từ
                                    </p>
                                    <p
                                      className="v_field__description"
                                      id="DepartLocation"
                                    >
                                      Hồ Chí Minh
                                    </p>
                                  </div>
                                </div>
                                <div className="col-xs-12 no-padding departure-container">
                                  <label
                                    readOnly=""
                                    type="text"
                                    className="v_field__input departure departure-location"
                                    id="departure-location"
                                    value="11-11-2017"
                                  ></label>
                                </div>
                              </div>
                            </div>
                            <div className="col-xs-12 col-sm-2 ">
                              <button className="btn btn-action btn-block  search-form-button btn-big">
                                <b>
                                  Tìm{" "}
                                  {/* <span className="visible-xs-inline-block">kiếm</span> */}
                                </b>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 whyIvivu no-padding">
        <div class="container">
          <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 no-padding whyIvivuContainer v-margin-top-15">
            <div class="row">
              <div class="col-xs-12 col-sm-4 col-md-4 col-lg-4">
                <div class="media">
                  <div class="media-left media-middle">
                    <i class="fa fa-check-circle"></i>
                  </div>
                  <div class="media-body media-middle">
                    <p class="media-heading">
                      Tour chọn lọc <b>chất lượng nhất</b>
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-xs-12 col-sm-4 col-md-4 col-lg-4">
                <div class="media">
                  <div class="media-left media-middle">
                    <i class="fa fa-check-circle"></i>
                  </div>
                  <div class="media-body media-middle">
                    <p class="media-heading">
                      Bảo đảm <b>giá tốt nhất</b>
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-xs-12 col-sm-4 col-md-4 col-lg-4">
                <div class="media">
                  <div class="media-left media-middle">
                    <i class="fa fa-check-circle"></i>
                  </div>
                  <div class="media-body media-middle">
                    <p class="media-heading">
                      Đội ngũ tư vấn <b>chi tiết và tận tình</b>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Slider;
