import React, { useState, useEffect } from "react";
import Footer from "./components/Footer";
import HomePage from "./views/HomePage/HomePage";
import Login from "./views/Login";
import axios from "axios";
import { HomepageContext } from "./context/homepage";
import { Switch, Route, Redirect } from "react-router-dom";
import TourDetail from "./views/TourDetail/TourDetail";
import TourFilter from "./views/TourFilter/TourFilter";
import { getAllTours } from "./redux/actions/tours";
import { getAllToursRaw } from "./redux/actions/tourRaw";
import { getAllTourCats } from "./redux/actions/tourCats";
import { getTourCatConfig } from "./redux/actions/tourCatsConfig";
import { getTourConfig } from "./redux/actions/toursConfig";
import { useSelector, useDispatch } from "react-redux";
import AdminPage from "./views/AdminPage/AdminPage";

function App() {
  let uid = localStorage.getItem("uid");
  const userId = useSelector((state) => state.auth.userId);
  let isAuthenticated = userId != null || uid != null;
  console.log(isAuthenticated);
  const dispatch = useDispatch();
  const [tours, setTours] = useState("");
  useEffect(() => {
    dispatch(getAllToursRaw()); // Gọi theo kiểu của redux thunk đẻ lấy dữ liệu từ server (bất đồng bộ)
    dispatch(getAllTourCats());
    dispatch(getTourCatConfig());
    dispatch(getTourConfig());
    dispatch(getAllTours());
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

  let routes = (
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
      <Route path="/login" component={Login} />
      <Redirect to="/login"></Redirect>
    </Switch>
  );
  if (isAuthenticated) {
    routes = (
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
          render={() => {
            return <AdminPage></AdminPage>;
          }}
        ></Route>
        <Redirect to="/admin"></Redirect>
      </Switch>
    );
  }

  return (
    <div className="wrapper">
      {routes}
      {/* <Footer></Footer>  */}
    </div>
  );
}

export default App;
