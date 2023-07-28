import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import HomePage from "./pages/home-page/home-page";
import ComptePage from "./pages/compte-page/compte-page";
import PanierPage from "./pages/panier-page/panier-page";
import Navbar from "./components/navbar/navbar";

function App() {
  return (
    <BrowserRouter>
  <Routes>
    <Route path="/" element={<HomePage/>}/>
    <Route path="compte" element={<ComptePage/>}/>
    <Route path="panier" element={<PanierPage/>}/>
    <Navbar/>
  </Routes>
  </BrowserRouter>
    
  );
}

export default App;
