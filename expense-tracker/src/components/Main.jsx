import { useState, useEffect } from "react";
import "./Main.css";

export function Main() {
  const [incomeTranscation, setIncomeTransaction] = useState([]);
  const [expenseTransaction, setExpenseTransaction] = useState([]);
  const [showAddTransaction, setShowAddTransaction] = useState(false);
  const [selectedRadio, setSelectedRadio] = useState("expense");
  return (
    <main>
      <header>
        <h1>Expense Tracker</h1>
        <button onClick={() => setShowAddTransaction(true)}>
          Add New Transaction
        </button>
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
      {showAddTransaction && (
        <div className="add-transaction">
          <div className="add-transaction-container">
            <button className="close">X</button>

            <h1>Add New Transaction</h1>
            <form>
              <label htmlFor="desctiption" className="block">
                Enter Description
              </label>
              <input
                type="text"
                placeholder="Enter Transaction description"
                id="description"
              />
              <label htmlFor="desctiption" className="block">
                Enter Amount
              </label>
              <input type="text" placeholder="Enter Transaction amount" />
              <br />
            </form>
            <div className="radio-buttons">
              <input
                type="radio"
                name="type"
                id="expense"
                value="expense"
                checked={selectedRadio === "expense"}
                onChange={(e) => setSelectedRadio(e.target.value)}
              />
              <label htmlFor="expense">Expense</label>
              <input
                type="radio"
                name="type"
                id="income"
                value="income"
                onChange={(e) => setSelectedRadio(e.target.value)}
              />
              <label htmlFor="income">Income</label>
            </div>
            <div className="buttons">
              <button>Cancel</button>
              <button>Add</button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
