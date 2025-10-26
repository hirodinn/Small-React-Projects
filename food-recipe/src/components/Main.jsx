import axios from "axios";
import { NavLink, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { Header } from "./Header";
import "./Main.css";

export function Main() {
  const [recipes, setRecipes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();

  const search = new URLSearchParams(location.search).get("search");
  async function loadData() {
    setIsLoading(true);
    const response = await axios.get(
      `https://forkify-api.herokuapp.com/api/v2/recipes?search=${
        search ? search : "banana"
      }`
    );
    setRecipes(response.data.data.recipes);
    setIsLoading(false);
  }
  useEffect(() => {
    loadData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search]);
  return (
    <>
      <Header />

      <main>
        <div className="recipe-container">
          {isLoading ? (
            <div className="loading">
              <div className="spinner"></div>
            </div>
          ) : recipes.length > 0 ? (
            recipes.map((recipe, i) => {
              return (
                <div className="each-recipe" key={i}>
                  <img src={recipe.image_url} />
                  <p className="publisher">{recipe.publisher}</p>
                  <p className="title">{recipe.title}</p>
                  <NavLink to={`/recipe/${recipe.id}`}>
                    <button>Recipe Details</button>
                  </NavLink>
                </div>
              );
            })
          ) : (
            <div className="no-recipe">
              <h1>No Food Found</h1>
            </div>
          )}
        </div>
      </main>
    </>
  );
}
