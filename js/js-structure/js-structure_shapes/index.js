import { getRandomColor } from "./utils/randomColor.js";
import { Pentagon } from "./components/Pentagon/pentagon.js";
import { Square } from "./components/Square/square.js";
import { Circle } from "./components/Circle/circle.js";

console.clear();

const root = document.getElementById("root");

const circleElement = Circle(getRandomColor);

const squareElement = Square(getRandomColor);

const pentagonElement = Pentagon(getRandomColor);

root.append(circleElement, squareElement, pentagonElement);
