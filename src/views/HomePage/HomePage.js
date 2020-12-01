import React, { useState, useEffect, useContext } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import RecentViews from "./components/RecentView/RecentViews";
import Section from "./components/Section/Section";
import Slider from "./components/Slider/Slider";
import { HomepageContext } from "../../context/homepage";

import "../../assets/css/HomePage.css";

export default function HomePage() {
  const tours = useContext(HomepageContext);
  //   const [tourList, setTourList] = useState([]);
  const tourList = [
    tours["https://www.ivivu.com/du-lich/tour-ha-noi"],
    tours["https://www.ivivu.com/du-lich/tour-da-nang"],
    tours["https://www.ivivu.com/du-lich/tour-da-lat"],
  ];

  return (
    <>
      <Header></Header>
      <Slider></Slider>
      {/* <RecentViews></RecentViews> */}
      <div className="container">
        <section className="content no-padding">
          <div className="col-xs-12 no-padding">
            {tourList.map((tourList) => {
              return <Section tourList={tourList}></Section>;
            })}
          </div>
        </section>
      </div>
      {/* <Footer></Footer> */}
    </>
  );
}
