import ExpenseItem from "./ExpenseItem";

export default function ExpenseList({ expenses }) {
  return (
    <div>
      <h2>Expenses</h2>
      <ul>
        {expenses.map((exp, idx) => (
          <ExpenseItem key={idx} expense={exp} />
        ))}
      </ul>
    </div>
  );
}
