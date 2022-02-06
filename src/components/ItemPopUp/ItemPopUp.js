import React from "react";
import ITEMS from "../../assets/items.json";
import "./ItemPopUp.css";

export default function ItemPopUp() {
  const SHOE_SIZES = [7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5];
  const [quantity, setQuantity] = React.useState(1);


  const { products } = ITEMS;
  return (
    <div className="item-popup">
      <div className="item-popup__indivitem row">
        <div className="item-popup__image col">
          <img src={products[0].img} alt="item-img" />
        </div>
        <div className="item-popup__desc col">
          <h2> {products[0].name} </h2>
          <h6> {products[0].color} </h6>
          <p> {products[0].description} </p>
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
            Php {(products[0].price * quantity).toLocaleString(undefined, {
              minimumFractionDigits: 2,
            })}
          </h4>
          </div>
        </div>
      </div>
    </div>
  );
}
