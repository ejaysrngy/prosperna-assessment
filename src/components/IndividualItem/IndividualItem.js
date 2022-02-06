import { Link } from "react-router-dom";
import React from "react";
import { ItemContext } from "../ItemContext";

import "./IndividualItem.css";

export default function IndividualItem({item}) {
  const {name: itemName, color: itemColor, price: itemPrice, img: itemImg, description: itemDesc} = item
  const { setChosenItem, setCart } = React.useContext(ItemContext);

  const onClickHandler = () => {
    setCart([])
    setChosenItem({
        chosenColor: itemColor,
        chosenName: itemName,
        chosenPrice: itemPrice,
        chosenImg: itemImg,
        chosenDesc: itemDesc,
    });
  }

  const addToCartHandler = () => {
    setCart((prevCart) => {
      return [
        {
          chosenColor: itemColor,
          chosenName: itemName,
          chosenPrice: itemPrice,
          chosenImg: itemImg,
          chosenDesc: itemDesc,
        }, ...prevCart
      ];
    });
  }

  return (
    <div className="item-container col-xl">
      <img src={itemImg} alt={itemName} />
      <div className="item-container__desc">
        <h6> {itemName} </h6>
        <h5>
          Php{" "}
          {itemPrice.toLocaleString(undefined, { minimumFractionDigits: 2 })}
        </h5>
        <h6 id="item-color">{itemColor}</h6>
      </div>
      <div className="item-container__buyNow">
        <img
          onClick={addToCartHandler}
          src="/images/shopping-cart-add(1).png"
          alt="cart"
        />
        <Link
          to={{
            pathname: "/checkout",
          }}
        >
          <button onClick={onClickHandler}>Buy Now</button>
        </Link>
      </div>
    </div>
  );
}
