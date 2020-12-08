import React, { useRef, useEffect } from "react";
import "../../assets/css/TourDetail.css";
import Header from "../../components/Header";
import DetailSideBar from "./components/DetailSideBar";

function TourDetail(props) {
  const detailRef = useRef();

  let aTagList = [];
  useEffect(() => {
    // Step 1: Convert all img src which is local -> get from cdn (using data-src attribue)
    aTagList = detailRef.current.querySelectorAll("img");
    aTagList.forEach((element) => {
      let image = element.getAttribute("data-src");
      element.setAttribute("src", image);
    });

    // Step 2: TODO find a way to load background-image
    let titleImgDiv = detailRef.current.querySelector(".tourHeaderCover2");
    let imgSrc = titleImgDiv.style.backgroundImage;
  }, [detailRef]);
  return (
    <div className="content-wrapper">
      <Header></Header>
      <div className="container">
        <div className="col-xs-12 no-padding">
          <div className="row">
            <DetailSideBar></DetailSideBar>
            <div
              ref={detailRef}
              style={{ marginLeft: 0 }}
              dangerouslySetInnerHTML={{
                __html: props.tour.tourDetail.content,
              }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TourDetail;
