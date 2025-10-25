import "./Header.css";
export function Header() {
  return (
    <header>
      <div className="left">FoodRecipe</div>
      <div className="middle">
        <input type="text" placeholder="Enter items..." />
      </div>
      <div className="right">
        <p>Home</p>
        <p>favorites</p>
      </div>
    </header>
  );
}
