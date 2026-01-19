import React from "react";
import "./styles.css";

export default function App() {
  return (
    <main>
      <Button color="green" tooltipText="Daten sichern">
        button 1
      </Button>
      <Button>button 2</Button>
      <Button>button 3</Button>
      <Button>button 4</Button>
    </main>
  );
}

function Button({ children, color, tooltipText }) {
  return (
    <button
      className="button"
      style={{ backgroundColor: color }}
      title={tooltipText}
    >
      {children}
    </button>
  );
}
