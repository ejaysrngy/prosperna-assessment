// import Header from "../components/Header/Header";
import Content from "../components/Content/Content";
import Shop from "../components/Shop/Shop";
// import Footer from "../components/Footer/Footer";
import Banner from "../components/Banner/Banner";
import ItemPopUp from "../components/ItemPopUp/ItemPopUp"
import React from "react";

export default function MainLanding() {

  return (
    <div>
        {/* <Header /> */}
        <Content />
        <Shop />
        <ItemPopUp />
        <Banner />
        {/* <Footer /> */}
    </div>
  );
}
