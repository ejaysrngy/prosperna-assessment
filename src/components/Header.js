import React from "react";
import "./Header.css"

export default function Header() {

    return (
        <header>
            <img className="logo" src="/images/sneakerfreak.png" alt="logo" />
            <nav>
                <ul className="nav-list">
                    <li className="nav-list__item"> <a href="index.html"> Home </a></li>
                    <li className="nav-list__item"> <a href="#products"> Shop </a> </li>
                </ul>
            </nav>
            <a className="contact" href="#contact"> <button> Contact </button></a>
        </header>
    )
}