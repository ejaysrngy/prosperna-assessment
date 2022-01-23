import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLanding from "./components/MainLanding";
import Checkout from "./components/Checkout";
import React from "react";
import { ItemContext } from "./components/ItemContext";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";

import "./components/App.css";

export default function App() {
  const [chosenItem, setChosenItem] = React.useState({
    chosenName: null,
    chosenColor: null,
    chosenPrice: null,
    chosenImg: null,
  });

  return (
    <Router>
      <PayPalScriptProvider
        options={{
          "client-id":
            "AQ3PPZeBFKfaZZIWTOoIcxqrktGCP4MOm8offosYPZwrU2wbe3Pc-2izj0b3Ggkjw8Y9idZ5KEHeoR9j",
            "currency": "PHP",
            "intent": "capture",
        }}
      >
        <ItemContext.Provider value={{ chosenItem, setChosenItem }}>
          <Routes>
            <Route path="/" element={<MainLanding />} />
            <Route path="/checkout" element={<Checkout />} />
          </Routes>
        </ItemContext.Provider>
      </PayPalScriptProvider>
    </Router>
  );
}
