import { useState } from "react";
import Budget from "./pages/Budget";

export default function App() {
  const [page, setPage] = useState("budget"); // simple "routing"

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <nav style={{ marginBottom: "20px" }}>
        <button onClick={() => setPage("budget")}>Budget</button>
      </nav>

      {page === "budget" && <Budget />}
    </div>
  );
}
