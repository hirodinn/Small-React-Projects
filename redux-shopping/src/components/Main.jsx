import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../redux/cartAction";
import axios from "axios";
import { Header } from "./Header";
import "./Main.css";
import { useEffect, useState } from "react";

export function Main() {
  const cart = useSelector((state) => state.cart); // Correct slice
  const dispatch = useDispatch();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const loadProducts = async () => {
      const response = await axios.get("https://fakestoreapi.com/products");
      setProducts(response.data);
    };
    loadProducts();
  }, []);

  function inCart(id) {
    return cart.some((c) => c.id === id);
  }

  return (
    <>
      <Header />
      <main className="main">
        <div className="product-container">
          {products.map((product) => (
            <div className="product" key={product.id}>
              <img src={product.image} alt={product.title} />
              <p className="title">
                {product.title.length <= 20
                  ? product.title
                  : product.title.slice(0, 21) + "..."}
              </p>
              <button
                onClick={() =>
                  inCart(product.id)
                    ? dispatch(removeFromCart(product.id))
                    : dispatch(
                        addToCart({
                          id: product.id,
                          img: product.image,
                          price: product.price,
                        })
                      )
                }
              >
                {inCart(product.id) ? "Remove from Cart" : "Add To Cart"}
              </button>
            </div>
          ))}
        </div>
      </main>
    </>
  );
}
