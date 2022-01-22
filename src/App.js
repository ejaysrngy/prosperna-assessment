import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLanding from "./components/MainLanding";
import Checkout from "./components/Checkout";
import "./components/App.css"



export default function App() {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<MainLanding />} />
      <Route path="/checkout" element={<Checkout />} />
    </Routes>
    </Router>
      
    
  );
}
