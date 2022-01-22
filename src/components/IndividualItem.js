// eslint-disable-next-line jsx-a11y/alt-text
import React from "react";
import "./IndividualItem.css";

export default function IndividualItem({
  itemName,
  itemColor,
  itemPrice,
  itemImg,
}) {
  return (
    <div className="item-container">
      <img src={itemImg} alt={itemName}/>
      <div className="item-container__desc col-lg">
        <h6> {itemName} </h6>
        <h5>
          Php {itemPrice.toLocaleString(undefined, { minimumFractionDigits: 2 })}
        </h5>
      </div>
      <div className="item-container__buyNow">
          <button> Buy Now </button>
      </div>
    </div>
  );
}
