import { Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import { Main } from "./components/Main";
import { Cart } from "./components/Cart";

function App() {
  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("cart")) || []
  );
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);
  return (
    <Routes>
      <Route index element={<Main cart={cart} setCart={setCart} />} />
      <Route path="/cart" element={<Cart cart={cart} setCart={setCart} />} />
    </Routes>
  );
}

export default App;
