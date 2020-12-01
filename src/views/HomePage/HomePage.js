import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import RecentViews from "./components/RecentView/RecentViews";
import Section from "./components/Section/Section";
import Slider from "./components/Slider/Slider";

import "../../assets/css/HomePage.css";

export default function HomePage() {
  return (
    <>
      <Header></Header>
      <Slider></Slider>
      {/* <RecentViews></RecentViews> */}
      <div className="container">
        <section className="content no-padding">
          <div className="col-xs-12 no-padding">
            <Section></Section>
            <Section></Section>
            <Section></Section>
          </div>
        </section>
      </div>
      {/* <Footer></Footer> */}
    </>
  );
}
