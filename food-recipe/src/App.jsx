import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Main } from "./components/Main";
import { Favorites } from "./components/Favorites";

function App() {
  return (
    <Routes>
      <Route index element={<Main />} />
      <Route path="/favorites" element={<Favorites />} />
    </Routes>
  );
}

export default App;
