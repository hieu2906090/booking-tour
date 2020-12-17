import React from "react";
import "../../../../assets/css/TourFilter/ListViewItem.css";

function ListViewItem(props) {
  return (
    <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 tourItem">
      <div>
        <div class="col-xs-12 col-sm-3 col-md-3 col-lg-3 no-padding tourItemImage">
          <a
            class="linkDetail"
            target="_blank"
            href="/du-lich/tour-mao-hiem-phong-nha-1n-kham-pha-hang-tien/1375"
            data-datedepart="12/18/2020 12:00:00 AM"
          >
            <picture>
              <img
                class="img-responsive visible-xs lazy"
                src="/du-lich/content/img/no-image.svg"
                data-src="//cdn2.ivivu.com/2020/09/23/10/ivivu-hang-tien-bia2-450x265.gif"
              />
              <img
                class="img-responsive hidden-xs"
                src="//cdn2.ivivu.com/2020/09/23/10/ivivu-hang-tien-bia2-204x153.gif"
                data-src="//cdn2.ivivu.com/2020/09/23/10/ivivu-hang-tien-bia2-204x153.gif"
              />
            </picture>
          </a>
        </div>
        <div class="col-xs-12 col-sm-9 col-md-9 col-lg-9 tourItemContent">
          <div class="row v-margin-top-10">
            <div class="col-xs-12 col-sm-8 col-md-8 col-lg-8 ">
              <span class="tourItemName">
                <a
                  class="linkDetail"
                  target="_blank"
                  href="/du-lich/tour-mao-hiem-phong-nha-1n-kham-pha-hang-tien/1375"
                  data-datedepart="12/18/2020 12:00:00 AM"
                >
                  Tour Mạo Hiểm Phong Nha 1N: Khám Phá Hang Tiên
                </a>
              </span>
              <br />
              <div class="v-margin-top-10 hidden-xs">
                <span class="v-margin-right-15">
                  Mã: <span>TO1375</span>
                </span>
                <span class="v-margin-right-15">
                  <i class="glyphicon glyphicon-time"></i> Trong Ngày
                </span>
                <br class="visible-xs visible-sm" />
                <span class="v-margin-right-15 transportDiv">
                  Phương tiện:
                  <i
                    class="fa icon-bus"
                    data-toggle="tooltip"
                    title=""
                    data-original-title="Di chuyển bằng Ô tô"
                  ></i>
                  <i
                    class="fa fa fa-pagelines"
                    data-toggle="tooltip"
                    title=""
                    data-original-title="Di chuyển bằng Trekking"
                  ></i>
                </span>
                <br />
                <ul class="tourListPros list-inline v-margin-top-10">
                  <li>Khám Phá Thạch Nhũ</li>
                  <li>Tắm Trong Hang Tiên</li>
                  <li>Trải Nghiệm Trekking</li>
                </ul>
                <input
                  type="hidden"
                  class="TopPlace"
                  value="Khám Phá Thạch Nhũ,Tắm Trong Hang Tiên,Trải Nghiệm Trekking"
                />
              </div>
            </div>
            <div class="col-xs-12 col-sm-4 col-md-4 col-lg-4 tourItemContentPrice text-right">
              <span class="tourItemDateTime">Khởi hành: 18-12-2020</span>
              <br />
              <span class="tourItemPrice">
                1.800.000<span class="tourItemCurrency"> VND</span>
              </span>
              <br />
              <span class="tourItemPricePerGuest">*Áp dụng nhóm 1 khách</span>
              <br />
              <div class="tourBooking24H hidden" data-id="1375">
                0 khách đặt trong 24h qua
              </div>
              <br class="hidden-xs" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ListViewItem;
