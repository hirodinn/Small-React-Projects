import axios from "axios";
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import { Header } from "./Header";
import "./Main.css";

export function Main() {
  const [recipes, setRecipes] = useState([]);
  async function loadData() {
    const response = await axios.get(
      "https://forkify-api.herokuapp.com/api/v2/recipes?search=banana"
    );
    console.log(response.data.data.recipes);
    setRecipes(response.data.data.recipes);
  }
  useEffect(() => {
    loadData();
  }, []);
  return (
    <>
      <Header />

      <main>
        <div className="recipe-container">
          {recipes.map((recipe, i) => {
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
          })}
        </div>
      </main>
    </>
  );
}
