import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLanding from "./components/MainLanding";
import Checkout from "./components/Checkout";
import React, {useContext} from "react";
import { ItemContext } from "./components/ItemContext";

import "./components/App.css"

export default function App() {
  const [chosenItem, setChosenItem] = React.useState({
    chosenName: null,
    chosenColor: null,
    chosenPrice: null,
    chosenImg: null,
  })

  

  return (
    <Router>
    <ItemContext.Provider value={{chosenItem, setChosenItem}}>
    <Routes>
      <Route path="/" element={<MainLanding />} />
      <Route path="/checkout" element={<Checkout />} />
    </Routes>
    </ItemContext.Provider>
    </Router>
      
    
  );
}
