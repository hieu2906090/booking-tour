import React, { useRef, useEffect } from "react";
import "../../assets/css/TourDetail/TourDetail.css";
import Header from "../../components/Header";
import DetailSideBar from "./components/DetailSideBar";
import DetailContent from "./components/DetailContent";

function TourDetail(props) {
  const modalRef = useRef("");
  let modal = null;

  useEffect(() => {
    modal = document.getElementById("myModal");
    console.log(modal);
  }, [modal]);

  return (
    <div className="content-wrapper">
      <Header></Header>
      <div className="container">
        <div className="col-xs-12 no-padding">
          <div className="row">
            <DetailSideBar></DetailSideBar>
            <DetailContent tour={props.tour}></DetailContent>
          </div>
        </div>
      </div>
      <div id="myModal" class="modal" ref={modalRef}>
        <div class="modal-content">
          <span class="close">&times;</span>
          <form action="">
            <label for=""> Họ& Tên:</label>
            <input type="text" />
            <label for=""> Điện thoại:</label>
            <input type="text" />
            <label for="">Email</label>
            <input type="text" />
            <label for="">Yêu cầu khác</label>
            <input type="text" />
            <button class="modal-btn">Gửi yêu cầu</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default TourDetail;
