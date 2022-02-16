import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLanding from "./components/MainLanding";
import Checkout from "./components/Checkout/Checkout";
import NotFound from "./components/NotFound";
import React from "react";
import { ItemContext } from "../src/components/ItemContext";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

import "./components/App.css";

export default function App() {
  const [chosenItem, setChosenItem] = React.useState({
    chosenName: "",
    chosenColor: "",
    chosenPrice: 0,
    chosenImg: "",
    chosenDesc: ""
  });

  const [cart, setCart] = React.useState([]);

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
        <ItemContext.Provider value={{ chosenItem, setChosenItem, cart, setCart }}>
        <Header />
          <Routes>
            <Route path="/" element={<MainLanding />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/404" element={<NotFound />} />
          </Routes>
        <Footer />
        </ItemContext.Provider>
      </PayPalScriptProvider>
    </Router>
  );
}
