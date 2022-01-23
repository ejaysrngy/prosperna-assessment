import Header from "./Header";
import Footer from "./Footer";
import React from "react";
import { ItemContext } from "./ItemContext";
import { PayPalButtons } from "@paypal/react-paypal-js";
import "./Checkout.css";

export default function Checkout() {
  const { cart, chosenItem } = React.useContext(ItemContext);
  const { chosenName, chosenColor, chosenPrice, chosenImg } = chosenItem;
  const [paypalPayment, setPaypalPayment] = React.useState(false);

  let checkoutPrice;
  if (cart.length === 0) {
    checkoutPrice = chosenPrice;
  } else {
    checkoutPrice = cart.reduce((total, curr) => {
      return total + curr.chosenPrice;
    }, 0);
  }

  return (
    <div>
      <Header />
      <div className="checkout-page row">
        <h1 id="checkout-text"> Checkout </h1>
        <div className="shipping-container col-lg-8 col-md-12 row">
          <h1> Shipping Details </h1>
          <div className="shipping-container__details">
            <form>
              <label> First Name </label>
              <input type="text" />
              <label> Last Name </label>
              <input type="text" />
              <label> Email </label>
              <input type="email" />
              <label> Address Line 1 </label>
              <input type="text" />
              <label> Address Line 2 </label>
              <input type="text" />
              <label> City </label>
              <input type="text" />
              <label> Region/State </label>
              <input type="text" />
              <label> Postal Code </label>
              <input type="number" />
            </form>
            <div className="shipping-container__button">
              {paypalPayment ? (
                <PayPalButtons
                  createOrder={(data, actions) => {
                    return actions.order.create({
                      purchase_units: [
                        {
                          description: chosenName,
                          amount: {
                            value: checkoutPrice,
                          },
                        },
                      ],
                    });
                  }}
                  onApprove={(data, actions) => {
                    return actions.order.capture().then((details) => {
                      const name = details.payer.name.given_name;
                      alert(`Transaction completed by ${name}`);
                    });
                  }}
                />
              ) : (
                <button
                  onClick={() => {
                    setPaypalPayment(true);
                  }}
                >
                  {" "}
                  Submit & Pay with Paypal{" "}
                </button>
              )}

              <button> Submit & Pay COD </button>
            </div>
          </div>
        </div>
        <div className="summary-container col-lg-4 col-md-6">
          <h1> Summary </h1>
          <div className="total-container row">
            <h5 className="col-6"> Total: </h5>
            <h6 className="col-6">
              {" "}
              Php {checkoutPrice.toLocaleString(undefined, {
                minimumFractionDigits: 2,
              })}{" "}
            </h6>
          </div>
          {cart.length === 0 ? (
            // If cart length is less than 0
            <div className="summary-container__item row">
              <div className="item-img col-4">
                {chosenImg != null ? <img src={chosenImg} alt="shoe" /> : null}
              </div>
              <div className="item-desc col">
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
            </div>
          ) : (
            // if cart length is greater than 0
            cart.map((item, index) => (
              <div key={index} className="summary-container__item row">
                <div className="item-img col-4">
                  {item.chosenImg != null ? (
                    <img src={item.chosenImg} alt="shoe" />
                  ) : null}
                </div>
                <div className="item-desc col">
                  <h3> {item.chosenName} </h3>
                  <h6> {item.chosenColor} </h6>
                  {item.chosenPrice != null && (
                    <p>
                      Php{" "}
                      {item.chosenPrice.toLocaleString(undefined, {
                        minimumFractionDigits: 2,
                      })}{" "}
                    </p>
                  )}
                </div>
              </div>
            ))
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
}
