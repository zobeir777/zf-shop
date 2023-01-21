import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from "./components/Cart";
import Home from "./Home.js";
import DigitalPorduct from "./components/category/DigitalPorduct";
import Laptop from "./components/category/Laptop";
import Tablet from "./components/category/Tablet";
import Mobile from "./components/category/Mobile";
import Watch from "./components/category/Watch";
import Detalis from "./components/Detalis";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/Watch' element={<Watch />} />
        <Route path='/Mobile' element={<Mobile />} />
        <Route path='/Tablet' element={<Tablet />} />
        <Route path='/Laptop' element={<Laptop />} />
        <Route path='/dp' element={<DigitalPorduct />} />
        <Route path='/mobile/:id' element={<Detalis />} />
        <Route path='/laptop/:id' element={<Detalis />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
