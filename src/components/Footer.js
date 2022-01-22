import React from "react";
import "./Footer.css";

export default function Footer(){
    return (
        <div className="footer-container">
            <div className="footer-logo">
                <img className="logo" src="/images/sneakerfreak.png" alt="logo" />
            </div>
            <div className="footer-locations row">
            <h3 className="col-lg-12"> Locations </h3>
                <div className="footer-locations__1 col-lg-4">
                    <h5>Ayala Malls Feliz</h5>
                    <p> G/F Amang Rodriguez Brgy cor, J. P. Rizal St, Pasig, Metro Manila</p>
                </div>
                <div className="footer-locations__2 col-lg-4">
                    <h5>Gateway Mall</h5>
                    <p> 2/F General Aguinaldo Ave, Cubao, Quezon City, Metro Manila</p>
                </div>
                <div className="footer-locations__3 col-lg-4">
                    <h5>SM Mall of Asia</h5>
                    <p> Conrad Hotel MOA Complex, Manila, Metro Manila</p>
                </div>
            </div>
        </div>
    )
}