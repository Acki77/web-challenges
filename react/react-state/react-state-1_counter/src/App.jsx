import "./styles.css";
import { useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);

  function CounterPlus() {
    setCount(count + 1);
  }
  function CounterMinus() {
    setCount(count - 1);
  }

  return (
    <div className="container">
      <h1>{count}</h1>
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
