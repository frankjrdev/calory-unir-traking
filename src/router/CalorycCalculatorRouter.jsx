import { BrowserRouter, Route, Routes } from "react-router-dom";
import Contact from "../components/Contact";
import Home from "../pages/Home";
import Recipes from "../pages/Recipes";
import Traking from "../pages/Traking";

export default function CalorycCalculatorRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/traking" element={<Traking />} />
        <Route path="/recipes" element={<Recipes />} />
      </Routes>
    </BrowserRouter>
  );
}
