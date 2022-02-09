// import Header from "../components/Header/Header";
import Content from "../components/Content/Content";
import Shop from "../components/Shop/Shop";
// import Footer from "../components/Footer/Footer";
import Banner from "../components/Banner/Banner";
// import ItemPopUp from "./ItemPopUp/ItemPopUp";
import { ItemContext } from "./ItemContext";
import React from "react";

export default function MainLanding() {
  const {cart} = React.useContext(ItemContext);


  return (
    <div>
        {/* <Header /> */}
        <Content />
        <Shop />
        {/* {cart.length > 0 && <ItemPopUp />} */}
        <Banner />
        {/* <Footer /> */}
    </div>
  );
}
