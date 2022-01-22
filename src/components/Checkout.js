import Header from "./Header";
import Footer from "./Footer";
import React from "react";
import { useLocation } from "react-router-dom";
import "./Checkout.css"

export default function Checkout(){
    
    return (
        <div>
            <Header />
            <div className="checkout-container">
                <h1> Checkout</h1>
                <div className="checkout-container__item">
                   <h1> Lorem </h1> 
                   
                </div>
            </div>
            <Footer />
        </div>
    )
}