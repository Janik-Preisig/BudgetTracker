import { useState } from "react";

export default function Budget() {
  const [income, setIncome] = useState("");
  const [expenses, setExpenses] = useState([]);
  const [expenseName, setExpenseName] = useState("");
  const [expenseAmount, setExpenseAmount] = useState("");

  const handleAddExpense = () => {
    if (!expenseName || !expenseAmount) return;
    setExpenses([...expenses, { name: expenseName, amount: parseFloat(expenseAmount) }]);
    setExpenseName("");
    setExpenseAmount("");
  };

  const totalExpenses = expenses.reduce((acc, curr) => acc + curr.amount, 0);
  const remaining = income ? income - totalExpenses : 0;

  return (
    <div>
      <h1>Budget Tracker</h1>

      <div style={{ marginBottom: "20px" }}>
        <label>
          Income: $
          <input
            type="number"
            value={income}
            onChange={(e) => setIncome(Number(e.target.value))}
          />
        </label>
      </div>

      <div style={{ marginBottom: "20px" }}>
        <h2>Add Expense</h2>
        <input
          placeholder="Name"
          value={expenseName}
          onChange={(e) => setExpenseName(e.target.value)}
        />
        <input
          placeholder="Amount"
          type="number"
          value={expenseAmount}
          onChange={(e) => setExpenseAmount(e.target.value)}
        />
        <button onClick={handleAddExpense}>Add</button>
      </div>

      <h2>Expenses</h2>
      <ul>
        {expenses.map((exp, idx) => (
          <li key={idx}>
            {exp.name}: ${exp.amount.toFixed(2)}
          </li>
        ))}
      </ul>

      <h3>Total Expenses: ${totalExpenses.toFixed(2)}</h3>
      <h3>Remaining: ${remaining.toFixed(2)}</h3>
    </div>
  );
}
