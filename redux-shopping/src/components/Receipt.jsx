import "./Receipt.css";

export function Receipt({ cart }) {
  let cost = 0;
  cart.forEach((element) => {
    cost += element.price;
  });
  let tax = cost * 0.15;
  return (
    <div className="receipt">
      <h2>Your Cost Summary</h2>
      <div>
        <p>Total items: </p>
        <p>{cart.length}</p>
      </div>
      <div>
        <p>Cost before tax: </p>
        <p>${cost.toFixed(2)}</p>
      </div>
      <div>
        <p>Total tax 15%: </p>
        <p>${tax.toFixed(2)}</p>
      </div>
      <div className="total-cost">
        <p>Total Cost: </p>
        <p style={{ margin: "0 10px" }}>${(cost + tax).toFixed(2)}</p>
      </div>
    </div>
  );
}
