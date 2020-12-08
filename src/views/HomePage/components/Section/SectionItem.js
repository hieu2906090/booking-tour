import React from "react";
import "../../../../assets/css/SectionItem.css";
import { Link } from "react-router-dom";

function SectionItem(props) {
  return (
    <>
      <div className="col-xs-12 col-sm-6 col-md-4">
        <div className="col-xs-12 cardItem">
          <Link
            to={{
              pathname: "/tour/" + props.tour.tourId,
              keyUrl: props.keyUrl,
            }}
          >
            <div className="col-xs-12 no-padding cardItemContainer">
              <div className="col-xs-12 no-padding cardItemImage">
                <div className="ribbonContainerOuter">
                  <div className="ribbonContainerInner">
                    <span className="v-ribbon">
                      <h1>Tour bán chạy</h1>
                    </span>
                  </div>
                </div>
                <figure>
                  <picture>
                    <img
                      className="img-responsive"
                      src={props.tour.tourImgSrc}
                      // src="//cdn2.ivivu.com/2019/02/19/15/ivivu-tour-mien-bac-5n4d-ha-noi-sapa-ha-long-ha-noi-sapa-home-360x225.jpg"
                      data-src="//cdn2.ivivu.com/2019/02/19/15/ivivu-tour-mien-bac-5n4d-ha-noi-sapa-ha-long-ha-noi-sapa-home-360x225.jpg"
                    />
                  </picture>
                </figure>
                <div className="cardItemPriceDivOuter">
                  <div className="cardItemPriceDivInner">
                    <span className="cardItemPriceAfterDiscount">
                      <i class="fas fa-map-marker-alt"></i> Hạ Long, Hà Nội,
                      Ninh Bình, Sapa
                    </span>
                  </div>
                </div>
              </div>
              <div className="col-xs-12 cardItemContent">
                <div className="col-xs-12 no-padding">
                  <div className="col-xs-12 v-margin-bottom-10 cardItemTourNameDiv">
                    <span className="cardItemTourName">
                      {props.tour.tourTitle}
                    </span>
                  </div>
                  <div className="col-xs-12 no-padding cardItemTourDetailDiv">
                    <div className="col-xs-12 v-margin-bottom-10">
                      <div className="row">
                        <div className="col-xs-12">
                          <span className="score-container__inner">
                            <span className="score">8.0</span>
                            <span className="score-description">Rất tốt </span>
                            <span> | 1 đánh giá </span>
                          </span>
                        </div>
                      </div>
                    </div>
                    <div
                      dangerouslySetInnerHTML={{ __html: props.tour.tourPros }}
                      className="col-xs-12 col-sm-12 col-md-12 col-lg-12 v-margin-bottom-5 cardItemDepartDiv"
                    ></div>
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 cardItemPrice">
                      <div className="tourBooking24H hidden" data-id="1257">
                        0 khách đặt trong 24h qua
                      </div>
                      <div className="clearfix visible-xs"></div>
                      <span className="price vcolor-info">
                        6.290.000 <small className="textCurrency">VND</small>
                      </span>
                      <div className="price-line">6.490.000 VND</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}

export default SectionItem;
