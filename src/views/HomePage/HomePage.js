import React, { useState, useEffect, useContext } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import RecentViews from "./components/RecentView/RecentViews";
import Section from "./components/Section/Section";
import Slider from "./components/Slider/Slider";
import { HomepageContext } from "../../context/homepage";
import { Link } from "react-router-dom";

import "../../assets/css/HomePage.css";

export default function HomePage() {
  const tours = useContext(HomepageContext);
  //   const [tourList, setTourList] = useState([]);
  const tourList = [
    {
      key: "tour-ha-noi",
      name: "Tour Hà Nội",
      keyUrl: "https://www.ivivu.com/du-lich/tour-ha-noi",
      value: tours["https://www.ivivu.com/du-lich/tour-ha-noi"],
    },
    {
      key: "tour-da-nang",
      name: "Tour Đà Nẵng",
      keyUrl: "https://www.ivivu.com/du-lich/tour-da-nang",
      value: tours["https://www.ivivu.com/du-lich/tour-da-nang"],
    },
    {
      key: "tour-da-lat",
      name: "Tour Đà Lạt",
      keyUrl: "https://www.ivivu.com/du-lich/tour-da-lat",
      value: tours["https://www.ivivu.com/du-lich/tour-da-lat"],
    },
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
              return (
                <Link to={"/tourlist/" + tourList.key}>
                  <Section
                    key={tourList.key}
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
      {/* <Footer></Footer> */}
    </>
  );
}
