import { Route, Routes } from "react-router-dom";
import { useState } from "react";
import { Main } from "./components/Main";
import { Cart } from "./components/Cart";

function App() {
  const [cart, setCart] = useState([]);
  return (
    <Routes>
      <Route index element={<Main cart={cart} setCart={setCart} />} />
      <Route path="/cart" element={<Cart cart={cart} setCart={setCart} />} />
    </Routes>
  );
}

export default App;
