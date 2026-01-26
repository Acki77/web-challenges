import { useState, useEffect } from "react";

export default function useMouse() {
  const [position, setPosition] = useState([200, 100]);
  useEffect(() => {
    function handleMouseMove(event) {
      let newPosition = [event.clientX, event.clientY];
      setPosition(newPosition);
      return newPosition;
    }

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);
  return position;
}
