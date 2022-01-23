import Header from "./Header";
import Footer from "./Footer";
import React, { useContext } from "react";
import { ItemContext } from "./ItemContext";
import "./Checkout.css";

export default function Checkout() {
  const { chosenItem, setChosenItem } = React.useContext(ItemContext);
  const { chosenName, chosenColor, chosenPrice, chosenImg } = chosenItem;
  return (
    <div>
      <Header />
      <div className="checkout-page row">
        <div className="shipping-container col-lg-8 col-md-12">
          <h1> Shipping Details </h1>
          <div className="shipping-container__details">
            <form>
              <div>
                <h6> First Name </h6>
                <input />
              </div>
              <div>
                <h6> Last Name </h6>
                <input />
              </div>
              <div>
                <h6> Address Line 1 </h6>
                <input />
              </div>
              <div>
                <h6> Address Line 2 </h6>
                <input />
              </div>
              <div>
                <h6> City </h6>
                <input />
              </div>
              <div>
                <h6> Region/State </h6>
                <input />
              </div>
              <div>
                <h6> Postal Code </h6>
                <input />
              </div>
              <div>
                <h6> First Name </h6>
                <input />
              </div>
            </form>
          </div>
        </div>
        <div className="checkout-container col-lg-4 col-md-6">
          <h1> Checkout</h1>
          <div className="checkout-container__item row">
            <div className="item-img col-4">
              {chosenImg != null ? <img src={chosenImg} alt="shoe" /> : null}
            </div>
            <div className="item-desc col-5">
              <h3> {chosenName} </h3>
              <h6> {chosenColor} </h6>
              {chosenPrice != null && (
                <p>
                  Php{" "}
                  {chosenPrice.toLocaleString(undefined, {
                    minimumFractionDigits: 2,
                  })}{" "}
                </p>
              )}
            </div>
            {/* ^^ item-desc */}
            <div className="quantity col-lg-3">
              <button className="decrease"> - </button>
              <button className="increase"> + </button>
            </div>
          </div>
          {/* ^^ checkout-container__item */}
        </div>
        {/* ^^ checkout-container */}
      </div>
      {/* ^^ row */}

      <Footer />
    </div>
  );
}
