import React from "react";
import "./NotFound.scss";

export default function NotFound() {
  return (
    <div className={`error`}>
      <div>
        <h1> Oops! </h1>
        <p> The page you're looking for does not exist</p>
      </div>
      <div className={`error-buttons`}>
        <button className="go-back-button">Go Back</button>
        <button className="report-error-button">Report Error</button>
    </div>
    </div>
  );
}
