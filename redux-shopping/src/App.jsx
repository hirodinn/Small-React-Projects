import { Route, Routes } from "react-router-dom";
import { Main } from "./components/Main";
import { Cart } from "./components/Cart";

function App() {
  return (
    <Routes>
      <Route index element={<Main />} />
      <Route path="/cart" element={<Cart />} />
    </Routes>
  );
}

export default App;
