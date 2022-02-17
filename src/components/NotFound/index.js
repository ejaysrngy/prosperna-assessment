import React from "react";
import "./NotFound.scss";
import { Grid, Col, Row } from "antd";
import { useNavigate } from "react-router-dom";

export default function NotFound() {
  const navigate = useNavigate();

  // const zendeskWidget = new Promise((resolve, reject) => {
  //   const script = document.createElement('script');
  //   script.src = "https://static.zdassets.com/ekr/snippet.js?key=8295a46d-6887-4172-91e3-9baa2a319d79"
  //   script.setAttribute('id', 'ze-snippet');
  //   script.async = true;
  //   script.addEventListener('load', function () {
  //     resolve();
  //   });
  //   script.addEventListener('error', function (e) {
  //     reject(e);
  //   });
  //   document.body.appendChild(script);
  // });
  
  React.useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://static.zdassets.com/ekr/snippet.js?key=8295a46d-6887-4172-91e3-9baa2a319d79"
    script.setAttribute('id', 'ze-snippet');
    script.async = true;
    document.body.appendChild(script);
  })

  return (
      <div className={"error"}>
        <div className={"error-image"}>
          <img src={"/images/404.png"} alt={"404"} />
        </div>
        <div className={"error-text"}>
          <h1> Oops! </h1>
          <p> The page you're looking for does not exist</p>
          <div className={`error-buttons`}>
            <button onClick={() => navigate(-1)} className="go-back-button">Go Back</button>
            <button onClick={() => window.zE("webWidget", "open")}className="report-error-button">Report Error</button>
          </div>
        </div>
      </div>
  );
}
