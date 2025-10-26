import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { addToFavorites, removeFromFavorites } from "../redux/favoritesAction";
import { Header } from "./Header";
import "./Recipe.css";
export function Recipe() {
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorites);
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
      dispatch(removeFromFavorites(id));
    } else {
      const obj = {
        image_url: recipeDetails.image_url,
        publisher: recipeDetails.publisher,
        id: id,
        title: recipeDetails.title,
      };
      dispatch(addToFavorites(obj));
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
