import React from "react";
import "../assets/css/Footer.css";

function Footer() {
  return (
    <footer className="homePageFooterDiv">
      <div className="container">
        <div className="homePageFooter">
          <div className="row footerContainer">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 no-padding">
              <div className="foot-col-1 col-xs-12 col-sm-6 col-md-3 col-lg-2 footerPanel hidden-xs">
                <ul>
                  <li>
                    <h3>Về iVIVU.com</h3>
                  </li>
                  <li>
                    <a href="//www.ivivu.com/gioi-thieu">Giới thiệu</a>
                  </li>
                  <li>
                    <a
                      href="//www.ivivu.com/blog/category/chung-toi"
                      target="_blank"
                    >
                      Chúng tôi
                    </a>
                  </li>
                  <li>
                    <a href="//www.ivivu.com/blog/" target="_blank">
                      iVIVU Blog
                    </a>
                  </li>
                  <li>
                    <a href="//www.ivivu.com/pms" target="_blank">
                      PMS - Miễn phí
                    </a>
                  </li>
                </ul>
              </div>
              <div className="foot-col-2 col-xs-12 col-sm-6 col-md-3 col-lg-2 footerPanel hidden-xs">
                <ul>
                  <li>
                    <h3>Thông Tin Cần Biết</h3>
                  </li>
                  <li>
                    <a
                      href="//www.ivivu.com/dieu-kien-dieu-khoan"
                      target="_blank"
                    >
                      Điều kiện &amp; Điều khoản
                    </a>
                  </li>
                  <li>
                    <a href="//www.ivivu.com/quy-che-hoat-dong" target="_blank">
                      Quy chế hoạt động
                    </a>
                  </li>

                  <li>
                    <a href="//www.ivivu.com/hoi-dap" target="_blank">
                      Câu hỏi thường gặp
                    </a>
                  </li>
                </ul>
              </div>
              <div className="foot-col-3 col-xs-12 col-sm-6 col-md-3 col-lg-2 footerPanel hidden-xs">
                <ul>
                  <li>
                    <h3>Đối Tác &amp; Liên kết</h3>
                  </li>
                  <li>
                    <a
                      href="http://vietnamairlines.com/vi/vna-holidays/mua-vna-holidays"
                      target="_blank"
                    >
                      Vietnam Airlines
                    </a>
                  </li>
                  <li>
                    <a
                      href="http://dulich.vnexpress.net/khach-san/viet-nam"
                      target="_blank"
                    >
                      VNExpress
                    </a>
                  </li>
                </ul>
              </div>
              <div className="foot-col-4 col-xs-12 col-sm-6 col-md-3 col-lg-2 footerPanel hidden-xs">
                <ul>
                  <li>
                    <h3>Được chứng nhận</h3>
                  </li>
                  <li>
                    <div>
                      <a href="http://online.gov.vn/HomePage/WebsiteDisplay.aspx?DocId=21871">
                        <img
                          alt=""
                          title=""
                          src="/du-lich/content/img/bocongthuong.png"
                        />
                      </a>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="foot-col-5 col-xs-12 col-sm-12 col-md-12 col-lg-4 footerPanel">
                <ul>
                  <li>
                    <h3>Kết nối với iVIVU</h3>
                  </li>
                  <li>
                    <div className="messageIcons">
                      <a href="viber://add?number=84906355542">
                        <img
                          src="/du-lich/content/img/icon-viber.jpg"
                          alt="iVIVU Viber"
                          className="img-circle"
                        />
                      </a>
                      <a href="https://zalo.me/84906355542">
                        <img
                          src="/du-lich/content/img/icon-zalo.jpg"
                          alt="iVIVU Zalo"
                          className="img-circle"
                        />
                      </a>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 no-padding ">
              <div className="col-xs-12 no-padding footer2">
                <div className="foot-col-6 col-xs-12 col-sm-12 col-md-3 col-lg-4 col-md-push-9 col-lg-push-8 footerContact footerPanel ">
                  <div>
                    <span className="bestBookingSystemSpan">
                      Bạn cần trợ giúp? <b>Hãy gọi ngay</b>
                    </span>
                    <div className="v-margin-top-15">
                      <p>
                        <i className="glyphicon glyphicon-earphone vcolor-gray fixGlyphicon"></i>
                        <b>CSKH:</b>{" "}
                        <a href="tel:02839338002">(028) 3933 8002</a>
                      </p>
                      <p>
                        <i className="glyphicon glyphicon-earphone vcolor-gray fixGlyphicon"></i>
                        <b>Hotline:</b>{" "}
                        <a href="tel:0906355542">0906 355 542</a>
                      </p>
                      <p>
                        <i className="glyphicon glyphicon-time vcolor-gray fixGlyphicon"></i>{" "}
                        Từ 8h30 - 18h hằng ngày
                      </p>
                    </div>
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 no-padding socialIcons hidden-xs">
                      <span
                        itemScope=""
                        itemType="http://schema.org/Organization"
                      >
                        <a
                          itemProp="sameAs"
                          href="https://facebook.com/iVIVU"
                          target="_blank"
                          className="v-margin-right-5"
                        >
                          <i
                            className="fa fa-facebook facebook-icon"
                            title="Facebook iVIVU"
                          ></i>
                        </a>
                        <a
                          itemProp="sameAs"
                          href="https://twitter.com/#!/ivivudotcom"
                          target="_blank"
                          className="v-margin-left-5 v-margin-right-5"
                        >
                          <i
                            className="fa fa-twitter twitter-icon"
                            title="Twitter iVIVU"
                          ></i>
                        </a>

                        <a
                          itemProp="sameAs"
                          href="https://www.instagram.com/ivivu/"
                          target="_blank"
                          className="v-margin-right-5"
                        >
                          <i
                            className="fa fa-instagram instagram-icon"
                            title="Instagram iVIVU"
                          ></i>
                        </a>
                        <a
                          itemProp="sameAs"
                          href="https://www.youtube.com/channel/UC7_UHi9BBHFXJViCQEcplQg"
                          target="_blank"
                          className="v-margin-left-5 v-margin-right-5"
                        >
                          <i
                            className="fa fa-youtube-play youtube-icon"
                            title="Youtube iVIVU"
                          ></i>
                        </a>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="foot-col-7 col-xs-12 col-sm-12 col-md-9 col-lg-8 col-md-pull-3 col-lg-pull-4 footerContact footerPanel">
                  <div>
                    <a
                      className="worldTravelAwards"
                      href="https://www.worldtravelawards.com/award-vietnams-leading-online-travel-agency-2020"
                      target="_blank"
                    >
                      <img
                        alt="Vietnams leading online travel agency 2020 winner"
                        title="Vietnams leading online travel agency 2020 winner"
                        src="/du-lich/content/img/vietnams-leading-online-travel-agency-2020-winner.png"
                      />
                      <span>
                        iVIVU.com © 2020 - Đại lý Du lịch Trực tuyến Hàng đầu
                        Việt Nam 2020
                      </span>
                    </a>
                    <div className="v-margin-top-15 hidden-xs">
                      <p>
                        <b>
                          DKKD: 0312788481, Ngày cấp: 21/05/2014, Sở kế hoạch
                          đầu tư thành phố Hồ Chí Minh
                        </b>
                      </p>
                      <p>
                        <i className="glyphicon glyphicon-map-marker vcolor-gray fixGlyphicon"></i>
                        <b>HCM:</b> Lầu 7, Tòa nhà Anh Đăng, 215 Nam Kỳ Khởi
                        Nghĩa, Phường 7, Quận 3, Tp. Hồ Chí Minh
                      </p>
                      <p>
                        <i className="glyphicon glyphicon-map-marker vcolor-gray fixGlyphicon"></i>
                        <b>HN:</b> Tầng 12, 70-72 Bà Triệu, Quận Hoàn Kiếm, Hà
                        Nội
                      </p>
                      <p>
                        <i className="glyphicon glyphicon-map-marker vcolor-gray fixGlyphicon"></i>
                        <b>Cần Thơ:</b> Tầng 7 - Tòa nhà STS - 11B Đại Lộ Hòa
                        Bình, P. Tân An, Q. Ninh Kiều, TP. Cần Thơ.
                      </p>
                    </div>
                  </div>
                  <div
                    className="col-xs-12 no-padding hidden-xs"
                    style={{
                      position: "relative",
                      top: "4px",
                      overflow: "hidden",
                    }}
                  >
                    <span
                      style={{
                        color: "#3b5998",
                        fontWeight: "bold",
                        float: "left",
                      }}
                    >
                      Like để cập nhật
                      <span
                        style={{ color: "#3b5998", fontWeight: "bold" }}
                        className="visible-xs-inline-block"
                      >
                        thông tin
                      </span>
                      <span
                        style={{ color: "#3b5998", fontWeight: "bold" }}
                        className="hidden-xs"
                      >
                        cẩm nang du lịch
                      </span>
                      &nbsp;&nbsp;
                    </span>
                    <div
                      className="fb-like v-margin-left-5  fb_iframe_widget"
                      style={{ float: "left" }}
                      data-href="https://www.facebook.com/iVIVU"
                      data-layout="button_count"
                      data-action="like"
                      data-share="false"
                      fb-xfbml-state="rendered"
                      fb-iframe-plugin-query="action=like&amp;app_id=628025334278848&amp;container_width=120&amp;href=https%3A%2F%2Fwww.facebook.com%2FiVIVU&amp;layout=button_count&amp;locale=en_US&amp;sdk=joey&amp;share=false"
                    >
                      <span
                        style={{
                          verticalAlign: "bottom",
                          width: "90px",
                          height: "28px",
                        }}
                      >
                        <iframe
                          name="f28966dc9a70004"
                          width="1000px"
                          height="1000px"
                          data-testid="fb:like Facebook Social Plugin"
                          title="fb:like Facebook Social Plugin"
                          frameBorder="0"
                          // allowTransparency="true"
                          allowFullScreen="true"
                          scrolling="no"
                          allow="encrypted-media"
                          src="https://www.facebook.com/v7.0/plugins/like.php?action=like&amp;app_id=628025334278848&amp;channel=https%3A%2F%2Fstaticxx.facebook.com%2Fx%2Fconnect%2Fxd_arbiter%2F%3Fversion%3D46%23cb%3Df1a16809b76918%26domain%3Dwww.ivivu.com%26origin%3Dhttps%253A%252F%252Fwww.ivivu.com%252Ff680507ca2517c%26relation%3Dparent.parent&amp;container_width=120&amp;href=https%3A%2F%2Fwww.facebook.com%2FiVIVU&amp;layout=button_count&amp;locale=en_US&amp;sdk=joey&amp;share=false"
                          style={{
                            border: "none",
                            visibility: "visible",
                            width: "90px",
                            height: "28px",
                          }}
                          className=""
                        ></iframe>
                      </span>
                    </div>
                    <i className="glyphicon glyphicon-envelope vcolor-gray fixGlyphicon v-margin-left-5"></i>
                    <a href="mailto:tour@ivivu.com">tour@ivivu.com</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
