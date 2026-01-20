import "./styles.css";
import { useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);
  const colorClass =
    count < 0 ? "text-red" : count > 0 ? "text-green" : "text-black";

  function CounterPlus() {
    setCount(count + 1);
  }
  function CounterMinus() {
    setCount(count - 1);
  }

  return (
    <div className="container">
      <h1 className={colorClass}>{count}</h1>
      <div className="button-container">
        <button type="button" onClick={CounterMinus}>
          -
        </button>
        <button
          type="button"
          onClick={() => {
            CounterPlus();
            console.log("🤔");
          }}
        >
          +
        </button>
      </div>
    </div>
  );
}
