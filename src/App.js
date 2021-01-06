import React, { useState, useEffect } from "react";
import Footer from "./components/Footer";
import HomePage from "./views/HomePage/HomePage";
import axios from "axios";
import { HomepageContext } from "./context/homepage";
import { Switch, Route, Redirect } from "react-router-dom";
import TourDetail from "./views/TourDetail/TourDetail";
import TourFilter from "./views/TourFilter/TourFilter";
import { getAllToursRaw } from "./redux/actions/tours";
import { getAllTourCats } from "./redux/actions/tourCats";
import { getTourCatConfig } from "./redux/actions/tourCatsConfig";
import { useSelector, useDispatch } from "react-redux";
import AdminPage from "./views/AdminPage/AdminPage";

function App() {
  const dispatch = useDispatch();
  const [tours, setTours] = useState("");
  useEffect(() => {
    dispatch(getAllToursRaw());
    dispatch(getAllTourCats());
    dispatch(getTourCatConfig());
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
            let tour = getTourFromId(
              props.match.params.id,
              props.location.keyUrl
            );

            return <TourDetail tour={tour} />;
          }}
        ></Route>
        <Route
          path="/tour-list/:list"
          render={(props) => {
            console.log(props.location.keyUrl);
            let tourList = tours[props.location.keyUrl];
            return <TourFilter tours={tourList}></TourFilter>;
          }}
        ></Route>
        <Route
          path="/admin"
          render={(props) => {
            return <AdminPage></AdminPage>;
          }}
        ></Route>
      </Switch>
      {/* <Footer></Footer>  */}
    </div>
  );
}

export default App;
