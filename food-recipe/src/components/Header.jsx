import { useNavigate } from "react-router-dom";
import "./Header.css";
export function Header() {
  const navigate = useNavigate();
  return (
    <header>
      <div className="left">FoodRecipe</div>
      <div className="middle">
        <input type="text" placeholder="Enter items..." />
      </div>
      <div className="right">
        <p
          onClick={() => {
            navigate("/");
          }}
        >
          Home
        </p>
        <p
          onClick={() => {
            navigate("/favorites");
          }}
        >
          favorites
        </p>
      </div>
    </header>
  );
}
