import React from "react";
import ITEMS from "../../assets/items.json"
import "./ItemPopUp.css"

export default function ItemPopUp(){
    const SHOE_SIZES = [7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5]

    const {products} = ITEMS
    return (
        <div className="item-popup">
            <div className="item-popup__indivitem container-flex row">
                <div className="item-popup__image col-6">
                    <img src={products[0].img} alt="item-img" />
                </div>
                <div className="item-popup__desc col-4">
                    <h1> {products[0].name} </h1>
                    <h4> Php {products[0].price.toLocaleString(undefined, { minimumFractionDigits: 2 })} </h4> 
                    <div className="item-popup__sizes">
                        {SHOE_SIZES.map((currItem, index) => {
                            return (
                                <button key={index} className="shoesize-button"> {currItem} </button>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}