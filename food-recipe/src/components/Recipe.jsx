import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Header } from "./Header";
import "./Recipe.css";
export function Recipe() {
  const { id } = useParams();
  const [recipeDetails, setRecipeDetails] = useState(null);
  useEffect(() => {
    const loadRecipe = async () => {
      const response = await axios.get(
        `https://forkify-api.herokuapp.com/api/v2/recipes/${id}`
      );
      setRecipeDetails(response.data.data);
      console.log(response.data);
    };
    loadRecipe();
  }, []);
  return (
    <>
      <Header />

      <div className="recipe-container">
        {recipeDetails && (
          <>
            <div className="image-container">
              <img src={recipeDetails.recipe.image_url} />
            </div>
            <div className="info-container">
              <p>{recipeDetails.recipe.publisher}</p>
              <p>{recipeDetails.recipe.title}</p>
              <button></button>
              <h2>Ingredients</h2>
              {recipeDetails.recipe.ingredients.map((ingredient, i) => {
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
