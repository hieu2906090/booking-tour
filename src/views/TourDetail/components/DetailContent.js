import React, { useRef, useEffect } from "react";
import "../../../assets/css/TourDetail/DetailContent.css";

function DetailContent(props) {
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
    // let newTitleImg = React.createElement("div", {
    //   dangerouslySetInnerHTML: titleImgDiv.toString(),
    // });
    // titleImgDiv.dangerouslySetInnerHTML = newTitleImg;
  }, [detailRef]);

  return (
    <div
      className="col-xs-12 col-sm-12 col-md-8 col-lg-8 col-lg-pull-4 col-md-pull-4 mainContent"
      ref={detailRef}
      // style={{ marginLeft: 0 }}
      dangerouslySetInnerHTML={{
        __html: props.tour.tourDetail.content,
      }}
    ></div>
  );
}

export default DetailContent;
