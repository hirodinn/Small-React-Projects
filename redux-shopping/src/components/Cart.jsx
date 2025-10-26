import "./Cart.css";
import { Header } from "./Header";

export function Cart({ cart, setCart }) {
  function removeFromCart(id) {
    const temp = cart.filter((c) => c.id !== id);
    setCart(temp);
    console.log(temp);
  }
  return (
    <>
      <Header />
      <main className="cart">
        {cart.map((c) => {
          return (
            <div className="cart-product">
              <div className="info">
                <img src={c.img} />
                <p className="price">${c.price.toFixed(2)}</p>
              </div>
              <button
                onClick={() => {
                  removeFromCart(c.id);
                }}
              >
                Remove From Cart
              </button>
            </div>
          );
        })}
      </main>
    </>
  );
}
