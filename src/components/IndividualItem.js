import { Link } from "react-router-dom";
import React, {useContext} from "react";
import { ItemContext } from "./ItemContext";

import "./IndividualItem.css";

export default function IndividualItem({
  itemName,
  itemColor,
  itemPrice,
  itemImg,
}) {

  const {chosenItem, setChosenItem} = React.useContext(ItemContext)

  function onClickHandler() {
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
  

  return (
    <div className="item-container col-lg">
      <img src={itemImg} alt={itemName} />
      <div className="item-container__desc">
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
            pathname: "/checkout"
          }}
        >
          <button onClick={onClickHandler}>Buy Now</button>
        </Link>
      </div>
    </div>
  );
}
