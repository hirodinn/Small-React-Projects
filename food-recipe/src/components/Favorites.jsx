import { Header } from "./Header";
import { NavLink } from "react-router-dom";
import "./Favorites.css";
import { useSelector } from "react-redux";
export function Favorites() {
  const favorites = useSelector((state) => state.favorites);
  return (
    <>
      <Header />
      <div className="favorites-container">
        <div className="recipe-container">
          {favorites.length > 0 &&
            favorites.map((recipe, i) => {
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
      </div>
    </>
  );
}
