import "./styles.css";
import { useState } from "react";

export default function App() {
  const [isActive, setIsActived] = useState(false);

  function handleClick() {
    setIsActived(!isActive);
    // Check that the value changes correctly.
    console.log(!isActive);
  }

  return (
    <main>
      <div className={`box ${isActive ? "box--active" : ""}`} />
      <button
        onClick={handleClick}
      >{`${isActive ? "Disactivate" : "Activate"}`}</button>
    </main>
  );
}
