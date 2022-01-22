import React from "react";
import "./Content.css";

export default function Content() {
  return (
    <div className="content" id="content">
      <div className="landing-container">
        <img
          className="landing-container__phrase"
          src="/images/center-phrase1.png"
          alt="phrase"
        />
        <img
          className="landing-container__image"
          src="/images/karlek-studio-ocxJjL1W4NQ-unsplash.jpg"
          alt="shoes"
        />
      </div>
      <div className="tagline-container row">
        <div className="tagline col-lg-8 col-md-12">
          <div className="best-kicks">
            Only the best kicks, for the best version of you.
          </div>
          <div className="content-desc">
            <p> Over 30+ brands, from the cleanest, to the rarest. </p>
          </div>
          <div className="tagline-brands">
            <img
              className="content-brands-img"
              src="/images/shoes.png"
              alt="shoe-brands"
            />
          </div>
        </div>

        {/* <div className="tagline-img col-4">
          <img
            className="tagline-img__image"
            src="/images/solesavy-2tfHt0sfv3w-unsplash.jpg"
            alt="piles-of-shoes"
          />
        </div> */}
      </div>
    </div>
  );
}
