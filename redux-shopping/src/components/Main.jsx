import axios from "axios";
import { Header } from "./Header";
import "./Main.css";
import { useEffect, useState } from "react";

export function Main() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const loadProducts = async () => {
      const response = await axios.get("https://fakestoreapi.com/products");
      setProducts(response.data);
    };
    loadProducts();
  }, []);
  return (
    <>
      <Header />
      <main className="main">
        <div className="product-container">
          {products &&
            products.map((product, i) => {
              return (
                <div className="product" key={i}>
                  <img src={product.image} />
                  <p className="title">
                    {product.title.trim().length <= 20
                      ? product.title.trim()
                      : product.title.trim().slice(0, 21) + "..."}
                  </p>
                  <button>Add To Cart</button>
                </div>
              );
            })}
        </div>
      </main>
    </>
  );
}
