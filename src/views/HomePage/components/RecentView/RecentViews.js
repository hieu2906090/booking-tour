import React from "react";
import RecentViewItem from "./RecentViewItem";

function RecentViews() {
  return (
    <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 recentSearch">
      <div class="container">
        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 no-padding itemList">
          <h3 class="localHeadLine">
            <span>Tours du lịch bạn đã xem gần đây</span>
          </h3>
          <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 v-margin-top-15 no-padding">
            <div class="recentSearchWrapper">
              <div class="row recent-row">
                <RecentViewItem></RecentViewItem>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RecentViews;
