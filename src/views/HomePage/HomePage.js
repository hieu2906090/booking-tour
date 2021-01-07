import React, { useState, useEffect, useContext } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import RecentViews from "./components/RecentView/RecentViews";
import Section from "./components/Section/Section";
import Slider from "./components/Slider/Slider";
import { HomepageContext } from "../../context/homepage";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Swal from "sweetalert2";

import "../../assets/css/HomePage.css";

export default function HomePage() {
  const tourCats = useSelector((state) => state.tourCats.data);
  const tours = useSelector((state) => state.tours.data);
  let tourList = createTourListFromTourCats(tourCats);

  function createTourListFromTourCats(tourCats_) {
    const tourList = [];
    for (const tourCat of tourCats_) {
      if (tourCat.isDisplay) {
        tourList.push({
          id: tourCat.fid,
          key: tourCat.appUrl,
          name: tourCat.displayName,
          keyUrl: tourCat.url,
          value: tours.filter((tour) => tour.tourCat.tourCatId === tourCat.fid),
        });
      }
    }
    return tourList;
  }

  if (tourCats === undefined) {
    return null;
  }

  return (
    <div
      className="content-wrapper"
      style={{ backgroundColor: "#ecf0f5 !important", zIndex: 800 }}
    >
      {/* <Header></Header> */}
      <Slider></Slider>
      {/* <RecentViews></RecentViews> */}
      <div className="container">
        <section className="content no-padding">
          <div className="col-xs-12 no-padding">
            {tourList.map((tourList) => {
              return (
                <Link
                  to={{
                    pathname: "/tour-list/" + tourList.key,
                    keyUrl: tourList.keyUrl,
                  }}
                >
                  <Section
                    key={tourList.id}
                    name={tourList.name}
                    tourList={tourList.value}
                    keyUrl={tourList.keyUrl}
                  ></Section>
                </Link>
              );
            })}
          </div>
        </section>
      </div>
    </div>
  );
}
