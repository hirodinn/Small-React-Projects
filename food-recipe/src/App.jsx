import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Main } from "./components/Main";
import { Favorites } from "./components/Favorites";
import { Recipe } from "./components/Recipe";
import { useEffect, useState } from "react";
function App() {
  const [favorites, setFavorites] = useState([]);
  useEffect(() => {
    console.log(favorites);
  });
  return (
    <Routes>
      <Route index element={<Main />} />
      <Route path="/favorites" element={<Favorites />} />
      <Route
        path="/recipe/:id"
        element={<Recipe favorites={favorites} setFavorites={setFavorites} />}
      />
    </Routes>
  );
}

export default App;
