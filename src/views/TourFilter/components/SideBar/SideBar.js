import React from "react";
import "../../../../assets/css/TourFilter/SideBar.css";

function SideBar() {
  return (
    <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3 col-md-pull-9 col-lg-pull-9 tourListSideBar">
      <div className="panel-group" role="tablist" ariaMultiselectable="true">
        <div className="panel panel-default">
          <div className="panel-heading" role="tab">
            <h4 className="panel-title">Địa điểm HOT trong nước</h4>
          </div>
          <div className="panel-collapse">
            <div className="panel-body">
              <div className="row">
                <div className="col-xs-12 col-sm-3 col-md-12 col-lg-12">
                  <a href="/du-lich/tour-sapa ">
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 no-padding">
                      Sapa
                    </div>
                  </a>
                </div>
                <div className="col-xs-12 col-sm-3 col-md-12 col-lg-12">
                  <a href="/du-lich/tour-ha-noi ">
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 no-padding">
                      Hà Nội
                    </div>
                  </a>
                </div>
                <div className="col-xs-12 col-sm-3 col-md-12 col-lg-12">
                  <a href="/du-lich/tour-ha-long ">
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 no-padding">
                      Hạ Long
                    </div>
                  </a>
                </div>
                <div className="col-xs-12 col-sm-3 col-md-12 col-lg-12">
                  <a href="/du-lich/tour-da-lat ">
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 no-padding">
                      Đà Lạt
                    </div>
                  </a>
                </div>
                <div className="col-xs-12 col-sm-3 col-md-12 col-lg-12">
                  <a href="/du-lich/tour-mien-tay ">
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 no-padding">
                      Miền Tây
                    </div>
                  </a>
                </div>
                <div className="col-xs-12 col-sm-3 col-md-12 col-lg-12">
                  <a href="/du-lich/tour-phu-quoc ">
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 no-padding">
                      Phú Quốc
                    </div>
                  </a>
                </div>
                <div className="col-xs-12 col-sm-3 col-md-12 col-lg-12">
                  <a href="/du-lich/tour-da-nang ">
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 no-padding">
                      Đà Nẵng
                    </div>
                  </a>
                </div>
                <div className="col-xs-12 col-sm-3 col-md-12 col-lg-12">
                  <a href="/du-lich/tour-nha-trang ">
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 no-padding">
                      Nha Trang
                    </div>
                  </a>
                </div>
                <div className="col-xs-12 col-sm-3 col-md-12 col-lg-12">
                  <a href="/du-lich/tour-phu-yen ">
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 no-padding">
                      Phú Yên
                    </div>
                  </a>
                </div>
                <div className="col-xs-12 col-sm-3 col-md-12 col-lg-12">
                  <a href="/du-lich/tour-quy-nhon ">
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 no-padding">
                      Quy Nhơn
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SideBar;
