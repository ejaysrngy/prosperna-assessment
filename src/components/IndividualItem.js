import { Link } from "react-router-dom";
import React from "react";
import { ItemContext } from "./ItemContext";

import "./IndividualItem.css";

export default function IndividualItem({
  itemName,
  itemColor,
  itemPrice,
  itemImg,
}) {
  const { setChosenItem, setCart } = React.useContext(ItemContext);

  function onClickHandler() {
    setCart([])
    setChosenItem((prevState) => {
      return {
        ...prevState,
        chosenColor: itemColor,
        chosenName: itemName,
        chosenPrice: itemPrice,
        chosenImg: itemImg,
      };
    });
  }

  function addToCartHandler() {
    setCart((prevCart) => {
      return [
        ...prevCart,
        {
          chosenColor: itemColor,
          chosenName: itemName,
          chosenPrice: itemPrice,
          chosenImg: itemImg,
        },
      ];
    });
  }

  return (
    <div className="item-container col-lg">
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
