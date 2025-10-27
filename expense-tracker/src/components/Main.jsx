import "./Main.css";

export function Main() {
  return (
    <main>
      <header>
        <h1>Expense Tracker</h1>
        <button>Add New Transaction</button>
      </header>
      <div className="main">
        <div className="info">
          <p>Balance is $ 0</p>
          <div className="total-income">
            <h1>$ 500</h1>
            <p>Total Income</p>
          </div>
          <div className="total-expense">
            <h1>$ 500</h1>
            <p>Total Income</p>
          </div>
        </div>
        <div className="chart">
          <div className="circle"></div>
        </div>
      </div>
      <footer>
        <div className="expense">
          <h1>Expense</h1>
          <div className="transaction-expense-item">
            <p>descriprtion</p>
            <p>amount</p>
          </div>
        </div>
        <div className="income">
          <h1>Income</h1>
          <div className="transaction-income-item">
            <p>descriprtion</p>
            <p>amount</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
