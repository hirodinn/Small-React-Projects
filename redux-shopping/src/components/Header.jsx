import { Link } from "react-router-dom";
import "./Header.css";

export function Header() {
  return (
    <header>
      <h1>react redux shopping cart</h1>
      <div className="right">
        <Link to="/">home</Link>
        <Link to="/cart">cart</Link>
      </div>
    </header>
  );
}
