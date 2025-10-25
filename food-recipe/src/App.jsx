import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Main } from "./components/Main";
import { Favorites } from "./components/Favorites";
import { Recipe } from "./components/Recipe";

function App() {
  return (
    <Routes>
      <Route index element={<Main />} />
      <Route path="/favorites" element={<Favorites />} />
      <Route path="/recipe/:title" element={<Recipe />} />
    </Routes>
  );
}

export default App;
