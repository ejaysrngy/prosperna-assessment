import React from "react";
import "./Header.css"
import { Link } from "react-router-dom";

export default function Header() {

    return (
        <header>
            <Link to="/"><img className="logo" src="/images/sneakerfreak.png" alt="logo" /> </Link>
            <nav>
                <ul className="nav-list">
                    <li className="nav-list__item"> <Link to="/"> Home </Link> </li>
                    <li className="nav-list__item"> <a href="#shop"> Shop </a> </li>
                </ul>
            </nav>
            <a className="contact" href="#contact"> <button> Contact </button></a>
        </header>
    )
}