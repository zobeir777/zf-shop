import React from "react";
import Navbar from "./components/Navbar";
//import { Data } from "./data";
//import formatCurrency from "./util";
//import { useSelector, useDispatch } from "react-redux";
import Slidebar from "./components/Slidebar";
import Category from "./components/Category";
import Popular from "./components/Popular";
import Off from "./components/Off";
import Latest from "./components/Latest";
import Footer from "./components/Footer";
function Home() {
  return (
    <>
      <div className='main'>
        <Navbar />
        <div className='slider'>
          <Slidebar />
        </div>
        <Category />
        <div className='ad'>
          <Off />
          <img src='./image/images.png'></img>
        </div>
        <Popular />
        <Latest />
        <Footer />
      </div>
    </>
  );
}

export default Home;
