import axios from "axios";
import { NavLink, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { Header } from "./Header";
import "./Main.css";

export function Main() {
  const [recipes, setRecipes] = useState([]);
  const location = useLocation();

  const search = new URLSearchParams(location.search).get("search");
  async function loadData() {
    const response = await axios.get(
      `https://forkify-api.herokuapp.com/api/v2/recipes?search=${
        search ? search : "banana"
      }`
    );
    console.log(response.data.data.recipes);
    setRecipes(response.data.data.recipes);
  }
  useEffect(() => {
    loadData();
    console.log(search);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search]);
  return (
    <>
      <Header />

      <main>
        <div className="recipe-container">
          {recipes.length > 0 ? (
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
