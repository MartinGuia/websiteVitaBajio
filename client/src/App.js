import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import HomePage from "./pages/HomePage";
import NewCatalog from "./pages/NewCatalog";
import RenewedCatalog from "./pages/RenewedCatalog";
import Quotation from "./pages/Quotation";
import Blog from "./pages/Blog";
import Blog1 from "./pages/blogs/Blog1";
import Blog2 from "./pages/blogs/Blog2";
import Blog3 from "./pages/blogs/Blog3";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/llanta-nueva" element={<NewCatalog/>} />
        <Route path="/llanta-renovada" element={<RenewedCatalog/>} />
        <Route path="/cotizacion" element={<Quotation/>} />
        <Route path="/blog" element={<Blog/>} />
        <Route path="/blog1" element={<Blog1/>} />
        <Route path="/blog2" element={<Blog2/>} />
        <Route path="/blog3" element={<Blog3/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
