import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "./Header.css";
export function Header() {
  const [inputValue, setInputValue] = useState("");
  const navigate = useNavigate();
  return (
    <header>
      <div className="left">FoodRecipe</div>
      <div className="middle">
        <input
          type="text"
          placeholder="Enter items..."
          onChange={(e) => {
            setInputValue(e.target.value);
          }}
          value={inputValue}
          onKeyDown={(e) => {
            if (e.key === "Enter") navigate(`/${inputValue}`);
          }}
        />
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
