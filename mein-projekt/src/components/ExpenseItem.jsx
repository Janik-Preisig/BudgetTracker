export default function ExpenseItem({ expense }) {
  return (
    <li>
      {expense.name}: ${expense.amount.toFixed(2)}
    </li>
  );
}
