import React from "react";

function RecentViewItem(props) {
  return (
    <div
      class="col-xs-12 col-sm-6 col-md-4 col-lg-4 recent-col"
      data-tourid="1434"
    >
      <a href="/du-lich/tour-moc-chau-2n1d-san-may-hang-kia-pa-co/1434">
        <div class="card">
          <div class="card-item">
            <span class="v-ribbon">
              <h1 title="Tour mới">
                <i class="fa fa-gift"></i>
              </h1>
            </span>
            <img
              class=""
              data-src="//cdn2.ivivu.com/2020/11/11/10/ivivu-hang-kia-pa-co-bia-120x120.gif"
              src="//cdn2.ivivu.com/2020/11/11/10/ivivu-hang-kia-pa-co-bia-120x120.gif"
            />
            <div class="card-content">
              <div class="card-name">
                <p>Tour Mộc Châu 2N1D: Săn Mây Hang Kia - Pà Cò</p>
              </div>
              <div class="card-price">
                <p>
                  1.420.000 <small class="textCurrencySmall">VND</small>
                </p>
              </div>
            </div>
            <div class="card-removal">
              <button
                type="button"
                class="btn btn-box-tool removeTourRecentItem"
                style="z-index: 3"
              >
                <i class="fa fa-times"></i>
              </button>
            </div>
          </div>
        </div>
      </a>
    </div>
  );
}

export default RecentViewItem;
