import { Header } from "./Header";
import { NavLink } from "react-router-dom";
export function Favorites({ favorites }) {
  return (
    <>
      <Header />
      <div className="favorites-container">
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
    </>
  );
}
