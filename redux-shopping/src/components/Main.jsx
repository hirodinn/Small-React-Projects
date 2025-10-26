import axios from "axios";
import { Header } from "./Header";
import "./Main.css";
import { useEffect, useState } from "react";

export function Main({ cart, setCart }) {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const loadProducts = async () => {
      const response = await axios.get("https://fakestoreapi.com/products");
      setProducts(response.data);
    };
    loadProducts();
  }, []);

  function inCart(i) {
    return cart.some((c) => c.id === i);
  }
  function removeFromCart(id) {
    const temp = cart.filter((c) => c.id !== id);
    setCart(temp);
    console.log(temp);
  }
  function addToCart(i) {
    const obj = {
      id: i,
    };
    setCart([...cart, obj]);
  }
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
                  <button
                    onClick={() => {
                      if (inCart(product.id)) removeFromCart(product.id);
                      else addToCart(product.id, product.image, product.price);
                    }}
                  >
                    {inCart(product.id) ? "Remove from Cart" : "Add To Cart"}
                  </button>
                </div>
              );
            })}
        </div>
      </main>
    </>
  );
}
