import React from "react";
import "../../../../assets/css/TourFilter/ListView.css";
import ListViewItem from "./ListViewItem";

function ListView() {
  return (
    <div className="col-xs-12 col-sm-12 col-md-9 col-lg-9 col-md-push-3 col-lg-push-3 tourListContainer v-margin-bottom-15">
      <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 no-padding tourListContainerHeader">
        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 no-padding hidden-xs">
          <h1 class="pageTitle vcolor-primary v-margin-top-0">
            <b>Thám Hiểm Hang Động từ Hồ Chí Minh</b>
          </h1>
        </div>
        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 no-padding">
          <div class="box box-default text-center non-border">
            <div class="row">
              <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 orderList">
                <div class="col-xs-12 col-sm-3 col-md-3 col-lg-2 orderTitle hidden-xs">
                  <p class="text-left">Sắp xếp theo:</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 no-padding">
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 no-padding">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 no-padding tourListContainerHeader">
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 no-padding tourList">
                <ListViewItem></ListViewItem>
                <ListViewItem></ListViewItem>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ListView;
