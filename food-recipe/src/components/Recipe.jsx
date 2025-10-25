import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Header } from "./Header";
import "./Recipe.css";
export function Recipe({ favorites, setFavorites }) {
  const { id } = useParams();
  const [recipeDetails, setRecipeDetails] = useState(null);
  const inFavorites = favorites.some((r) => r.id === id);
  useEffect(() => {
    const loadRecipe = async () => {
      const response = await axios.get(
        `https://forkify-api.herokuapp.com/api/v2/recipes/${id}`
      );
      setRecipeDetails(response.data.data.recipe);
    };
    loadRecipe();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  function manageFavorites() {
    if (inFavorites) {
      const temp = favorites.filter((favorite) => favorite.id !== id);
      setFavorites(temp);
    } else {
      setFavorites([...favorites, recipeDetails]);
    }
  }
  return (
    <>
      <Header />

      <div className="recipe-page">
        {recipeDetails && (
          <>
            <div className="image-container">
              <img src={recipeDetails.image_url} />
            </div>
            <div className="info-container">
              <p className="publisher">{recipeDetails.publisher}</p>
              <p className="title">{recipeDetails.title}</p>
              <button onClick={manageFavorites}>
                {inFavorites ? "Remove from favorites" : "Add to favorites"}
              </button>
              <h2>Ingredients</h2>
              {recipeDetails.ingredients.map((ingredient, i) => {
                return (
                  <p className="ingredient" key={i}>
                    {ingredient.quantity} {ingredient.unit}{" "}
                    {ingredient.description}
                  </p>
                );
              })}
            </div>
          </>
        )}
      </div>
    </>
  );
}
