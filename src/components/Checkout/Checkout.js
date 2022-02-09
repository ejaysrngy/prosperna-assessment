
import React from "react";
import { ItemContext } from "../ItemContext";
import { PayPalButtons } from "@paypal/react-paypal-js";
import "./Checkout.css";

export default function Checkout() {
  const { cart, chosenItem, setCart } = React.useContext(ItemContext);
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

  const onSubmitHandler = (event) => {
    setPaypalPayment(true);
  }

  const deleteItem = (shoeNum) => {
    setCart(cart.filter((currItem, index) => {
      return shoeNum !== index
    }))
  }

  return (
    <div>
      {/* <Header /> */}
      <div className="checkout-page row">
        <h1 id="checkout-text"> Checkout </h1>
        <div className="shipping-container col-lg-8 col-md-12 row">
          <h1> Shipping Details </h1>
          <div className="shipping-container__details">
            <form id="shipping-form" onSubmit={(event) => event.preventDefault()}>
              <label> First Name </label>
              <input type="text" required />
              <label> Last Name </label>
              <input type="text" required/>
              <label> Email </label>
              <input type="email" required />
              <label> Address Line 1 </label>
              <input type="text" required/>
              <label> Address Line 2 </label>
              <input type="text" />
              <label> City </label>
              <input type="text" required/>
              <label> Region/State </label>
              <input type="text" required/>
              <label> Postal Code </label>
              <input type="number" required/>
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
                <button type="submit"
                  onClick={onSubmitHandler}
                >
                  {" "}
                  Submit & Pay with Paypal{" "}
                </button>
              )}

              <button type="submit" onClick={(event) => event.preventDefault()}> Submit & Pay COD </button>
            </div>
            </form>
          </div>
        </div>
        <div className="summary-container col-lg-4 col-md-6">
          <h1> Summary </h1>
          <div className="total-container row">
            <h5 className="col-6"> Total: </h5>
            {checkoutPrice != null && <h6 className="col-6">

              Php {checkoutPrice.toLocaleString(undefined, {
                minimumFractionDigits: 2,
              })}
            </h6>}
          </div>
          {cart.length === 0 ? (
            // If cart length is less than 0
            <div className="summary-container__item row">
              <div className="item-img col-4">
                {chosenImg !== "" ? <img src={chosenImg} alt="shoe" /> : null}
              </div>
              <div className="item-desc col">
                <h3> {chosenName} </h3>
                <h6> {chosenColor} </h6>
                {chosenPrice !== 0 && (
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
                  {item.chosenImg !== "" ? (
                    <img src={item.chosenImg} alt="shoe" />
                  ) : null}
                </div>
                <div className="item-desc col">
                  <h3> {item.chosenName} </h3>
                  <h6> {item.chosenColor} </h6>
                  {item.chosenPrice !== 0 && (
                    <p>
                      Php{" "}
                      {item.chosenPrice.toLocaleString(undefined, {
                        minimumFractionDigits: 2,
                      })}{" "}
                    </p>
                  )}
                </div>
                <div className="remove-item col-1">
                      <p onClick={() => deleteItem(index)}> X </p>
                </div>
              </div>
            ))
          )}
        </div>
      </div>

      {/* <Footer /> */}
    </div>
  );
}
