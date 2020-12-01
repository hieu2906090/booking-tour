import React from "react";
import Footer from "./components/Footer";
import HomePage from "./views/HomePage/HomePage";
import axios from "axios";

function App() {
  axios.get("scrape_ivivu.json").then((data) => {
    console.log(data);
  });
  return (
    <div className="wrapper">
      <div
        className="content-wrapper"
        style={{ backgroundColor: "#ecf0f5 !important", zIndex: 800 }}
      >
        <HomePage></HomePage>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
