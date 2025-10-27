import { useState } from "react";
import "./Main.css";

export function Main() {
  const [incomeTranscation, setIncomeTransaction] = useState([]);
  const [expenseTransaction, setExpenseTransaction] = useState([]);
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const [showAddTransaction, setShowAddTransaction] = useState(false);
  const [selectedRadio, setSelectedRadio] = useState("expense");
  let totalIncome = 0;
  incomeTranscation.forEach((income) => {
    totalIncome += income.amount;
  });
  let totalExpense = 0;
  expenseTransaction.forEach((expense) => {
    totalExpense += expense.amount;
  });
  const balance = totalIncome - totalExpense;
  function addTransaction() {
    console.log("added");
    setShowAddTransaction(false);
    if (selectedRadio !== "expense") {
      const temp = incomeTranscation;
      temp.push({
        description: description.trim(),
        amount: Number(amount),
      });
      setIncomeTransaction(temp);
    } else {
      const temp = expenseTransaction;
      temp.push({
        description: description.trim(),
        amount: Number(amount),
      });
      setExpenseTransaction(temp);
    }
    setAmount("");
    setDescription("");
    setSelectedRadio("expense");
  }
  function closePop() {
    setShowAddTransaction(false);
  }
  function handleSubmit(e) {
    e.preventDefault();

    // ✅ HTML5 validation handles required fields
    if (e.target.checkValidity()) {
      addTransaction();
    }
  }
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
          <p>Balance is $ {balance}</p>
          <div className="total-income">
            <h1>$ {totalExpense}</h1>
            <p>Total Income</p>
          </div>
          <div className="total-expense">
            <h1>$ {totalIncome}</h1>
            <p>Total Income</p>
          </div>
        </div>
        <div className="chart">
          <div
            className="circle"
            style={{
              background: `conic-gradient(#4caf50 0% ${
                totalIncome > 0 || totalExpense > 0
                  ? totalIncome / (totalIncome + totalExpense)
                  : "100"
              }%, #f44336 ${
                totalIncome > 0 || totalExpense > 0
                  ? totalIncome / (totalIncome + totalExpense)
                  : "0"
              }% 100%)`,
            }}
          ></div>
        </div>
      </div>
      <footer>
        <div className="expense">
          <h1>Expense</h1>
          {expenseTransaction.map((expense, i) => {
            return (
              <div className="transaction-expense-item" key={i}>
                <p>{expense.description}</p>
                <p>{expense.amount}</p>
              </div>
            );
          })}
        </div>
        <div className="income">
          <h1>Income</h1>
          {incomeTranscation.map((income, i) => {
            return (
              <div className="transaction-income-item" key={i}>
                <p>{income.description}</p>
                <p>{income.amount}</p>
              </div>
            );
          })}
        </div>
      </footer>
      {showAddTransaction && (
        <div className="add-transaction">
          <div className="add-transaction-container">
            <button className="close" onClick={closePop}>
              X
            </button>

            <h1>Add New Transaction</h1>
            <form onSubmit={handleSubmit}>
              <label htmlFor="desctiption" className="block">
                Enter Description
              </label>
              <input
                type="text"
                placeholder="Enter Transaction description"
                id="description"
                required
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
              <label htmlFor="amount" className="block">
                Enter Amount
              </label>
              <input
                type="number"
                min={0}
                placeholder="Enter Transaction amount"
                required
                id="amount"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
              />
              <br />
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
                <button onClick={closePop}>Cancel</button>
                <button type="submit">Add</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </main>
  );
}
