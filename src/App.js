import React, { useState, useEffect } from "react";
import Footer from "./components/Footer";
import HomePage from "./views/HomePage/HomePage";
import axios from "axios";
import { HomepageContext } from "./context/homepage";

function App() {
  const [tours, setTours] = useState("");
  console.log("Call Axios APp");
  useEffect(() => {
    axios
      .get("scrape_ivivu.json")
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
  return (
    <div className="wrapper">
      <div
        className="content-wrapper"
        style={{ backgroundColor: "#ecf0f5 !important", zIndex: 800 }}
      >
        <HomepageContext.Provider value={tours}>
          <HomePage></HomePage>
        </HomepageContext.Provider>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
