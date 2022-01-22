import { Link } from "react-router-dom";
import React from "react";
import "./IndividualItem.css";

export default function IndividualItem({
  itemName,
  itemColor,
  itemPrice,
  itemImg,
}) {
  // const [chosenItem, setChosenItem] = React.useState({
  //   chosenName: null,
  //   chosenColor: null,
  //   chosenPrice: null,
  //   chosenImg: null,
  // });

  // function onClickHandler() {
  //   setChosenItem((prevState) => {
  //     return {
  //       ...prevState,
  //       chosenColor: itemColor,
  //       chosenName: itemName,
  //       chosenPrice: itemPrice,
  //       chosenImg: itemImg,
  //     };
  //   });
  // }

  return (
    <div className="item-container">
      <img src={itemImg} alt={itemName} />
      <div className="item-container__desc col-lg">
        <h6> {itemName} </h6>
        <h5>
          Php{" "}
          {itemPrice.toLocaleString(undefined, { minimumFractionDigits: 2 })}
        </h5>
        <h6>{itemColor}</h6>
      </div>
      <div className="item-container__buyNow">
        <Link
          to={{
            pathname: "/checkout",
            state: {
              chosenColor: itemColor,
              chosenName: itemName,
              chosenPrice: itemPrice,
              chosenImg: itemImg,
            },
          }}
        >
          <button>Buy Now</button>
        </Link>
      </div>
    </div>
  );
}
