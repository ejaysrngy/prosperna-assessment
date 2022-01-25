import React from "react";
import "./Header.css"
import { Link } from "react-router-dom";
import { ItemContext } from "../ItemContext";

export default function Header() {
    const {cart} = React.useContext(ItemContext)

    return (
        <header>
            <Link to="/"><img className="logo" src="/images/sneakerfreak.png" alt="logo" /> </Link>
            <nav>
                <ul className="nav-list">
                    <li className="nav-list__item"> <Link to="/"> Home </Link> </li>
                    <li className="nav-list__item"> <a href="#shop"> Shop </a> </li>
                </ul>
            </nav>
            <div className="shopping-cart"> 
            <Link to="/checkout"> <img src="/images/shopping-cart.png" alt="cart"/> </Link>
            <p> 
            {cart.length}
            </p>
            </div>
        </header>
    )
}