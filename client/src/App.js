import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import HomePage from "./pages/HomePage";
import NewCatalog from "./pages/NewCatalog";
import RenewedCatalog from "./pages/RenewedCatalog";
import Quotation from "./pages/Quotation";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/llanta-nueva" element={<NewCatalog/>} />
        <Route path="/llanta-renovada" element={<RenewedCatalog/>} />
        <Route path="/cotizacion" element={<Quotation/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
