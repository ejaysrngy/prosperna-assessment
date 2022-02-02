import React from "react";
import IndividualItem from "../IndividualItem/IndividualItem";
import ITEMS from "../../assets/items.json";
import {Swiper, SwiperSlide} from "swiper/react"
import "swiper/css"
import "./Shop.css";

// create products with product ID; refer to JSON file
// const ITEMS = [
//   {
//     productID: "0001",
//     name: "Nike Air Force 1",
//     color: "White",
//     price: 4795.0,
//     img: "/images/air-force-1-07-shoe-NMmm1B.jpg",
//   },
//   {
//     productID: "0002",
//     name: "Jordan 1 Shattered Backboard Low",
//     color: "Orange/Black/White",
//     price: 4795.0,
//     img: "/images/Jordan_1_SBB_low-1_2000x.jpg",
//   },
//   {
//     productID: "0003",
//     name: "Off White Jordan 1 Retro High",
//     color: "Off-White University Blue",
//     price: 90000.0,
//     img: "/images/offwhite.jpg",
//   },
// ];

export default function Shop() {
  return (
      <div className="shop" id="shop">
    <div className="shop-title row">
      <div className="shop-title_text col-lg-12">
        <h1>Shop</h1>
      </div>
    </div>
    <div className="shop-items row">
        {/* map ITEMS to individual items */}
        <Swiper
      spaceBetween={50}
      slidesPerView={3}
    >
        {ITEMS["products"].map((item, index) => {
          return (
            <SwiperSlide style={{width: "auto"}}key={index}>
            <IndividualItem
              item={item}
              // itemName={item.name}
              // itemColor={item.color}
              // itemPrice={item.price}
              // itemImg={item.img}
            />
            </SwiperSlide>
          );
        })}
        </Swiper>
      </div>
    </div>
  );
}
