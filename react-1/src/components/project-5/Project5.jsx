import axios from "axios";
import { useState, useEffect, useRef } from "react";
import "./Project5.css";
import { Products } from "./Products";
export function Project5() {
  const [products, setProducts] = useState([]);
  const [toSkip, setToSkip] = useState(0);
  const buttonRef = useRef(null);
  async function loadProducts() {
    const response = await axios.get(
      `https://dummyjson.com/products?limit=20&skip=${toSkip}`
    );
    setProducts(products.concat(response.data.products));
    setToSkip(toSkip + 20);
    if (products.length >= 100) {
      const buttonElem = buttonRef.current;
      buttonElem.removeEventListener(loadProducts);
    }
  }
  useEffect(() => {
    loadProducts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className="project-5">
      <Products products={products} />
      <button
        className={toSkip >= 100 ? "disable load-more" : "load-more"}
        onClick={loadProducts}
        ref={buttonRef}
        disabled={toSkip >= 100}
      >
        add more
      </button>
      <p>{toSkip >= 100 && "you riched the maximum 100 products"}</p>
    </div>
  );
}
