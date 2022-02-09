import React from "react";
import "./ItemPopUp.css";
import { ItemContext } from "../ItemContext";

export default function ItemPopUp({item}) {
  const SHOE_SIZES = [7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5];
  const [quantity, setQuantity] = React.useState(1);
  // const {cart} = React.useContext(ItemContext)
  const {chosenName: name, chosenColor: color, chosenDesc: description, chosenPrice: price, chosenImg: img} = item;

  return (
    <div className="item-popup">
      <div className="item-popup__indivitem row">
        <div className="item-popup__image col">
          <img src={img} alt="item-img" />
        </div>
        <div className="item-popup__desc col">
          <h2> {name} </h2>
          <h6> {color} </h6>
          <p> {description} </p>
          <div className="item-popup__sizes">
          <p> Select size </p>
            {SHOE_SIZES.map((currItem, index) => {
              return (
                <button
                  key={index}
                  className="shoesize-button"
                >

                  <p>US {currItem}</p>
                </button>
              );
            })}
          </div>
          <div className="item-popup__quantity">
            <h6>Quantity: </h6> 
            <button onClick={() => {quantity > 1 && setQuantity(quantity-1)}}> - </button>
            <div className="quantity">{quantity} </div>
            <button onClick={() => setQuantity(quantity+1)}> + </button>
            <h4>
            Php {(price * quantity).toLocaleString(undefined, {
              minimumFractionDigits: 2,
            })}
          </h4>
          </div>
          <div className="checkout-continue">
            <button id="checkout" className="checkout-continue__button"> CONTINUE TO CHECKOUT </button>
            <button id="cart" className="checkout-continue__button"> Add to cart </button>
          </div>
        </div>
      </div>
    </div>
  );
}
