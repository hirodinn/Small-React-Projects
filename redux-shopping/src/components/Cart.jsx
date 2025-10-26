import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from "../redux/cartAction";
import "./Cart.css";
import { Header } from "./Header";
import { Receipt } from "./Receipt";

export function Cart() {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  return (
    <>
      <Header />
      <main className="cart">
        <div className="cart-product-container">
          {cart &&
            cart.map((c, i) => {
              return (
                <div className="cart-product" key={i}>
                  <div className="info">
                    <img src={c.img} />
                    <p className="price">${c.price.toFixed(2)}</p>
                  </div>
                  <button
                    onClick={() => {
                      dispatch(removeFromCart(c.id));
                    }}
                  >
                    Remove From Cart
                  </button>
                </div>
              );
            })}
        </div>
        <Receipt cart={cart} />
      </main>
    </>
  );
}
