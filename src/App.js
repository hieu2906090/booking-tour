import React, { useState, useEffect } from "react";
import Footer from "./components/Footer";
import HomePage from "./views/HomePage/HomePage";
import axios from "axios";
import { HomepageContext } from "./context/homepage";
import { Switch, Route, Redirect } from "react-router-dom";
import TourDetail from "./views/TourDetail/TourDetail";
import TourFilter from "./views/TourFilter/TourFilter";

function App() {
  const [tours, setTours] = useState("");
  useEffect(() => {
    axios
      .get("scrape_ivivu_new.json")
      .then((data) => {
        setTours(data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  if (!tours) {
    return null;
  }

  function getTourFromId(id, keyUrl) {
    let tour = tours[keyUrl].find((tour) => tour.tourId === id);
    return tour;
  }

  return (
    <div className="wrapper">
      <div
        className="content-wrapper"
        style={{ backgroundColor: "#ecf0f5 !important", zIndex: 800 }}
      >
        <Switch>
          <Route
            path="/"
            exact
            render={(props) => {
              return (
                <HomepageContext.Provider value={tours}>
                  <HomePage></HomePage>
                </HomepageContext.Provider>
              );
            }}
          ></Route>
          <Route
            path="/tour/:id"
            render={(props) => {
              // if (getTourFromId(props.match.params.id) === undefined) {
              //   return;
              // }
              // console.log(getTourFromId(props.match.params.id) === undefined);
              let keyUrl = props.location.keyUrl;
              let tour = getTourFromId(
                props.match.params.id,
                keyUrl
                // props.location.keyUrl
              );

              return <TourDetail tour={tour} />;
            }}
          ></Route>
          <Route
            path="/tour-list/:list"
            render={(props) => {
              return <TourFilter></TourFilter>;
              // if (getTourListFromPath(props.match.params.id) === undefined) {
              //   return;
              // }
              // return <TourDetail tour={getTourFromId(props.match.params.id)} />;
            }}
          ></Route>
        </Switch>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
