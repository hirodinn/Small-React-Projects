import { useEffect, useState } from "react";
import "./Project2.css";
export function Project2() {
  const [format, setFormat] = useState("hex");
  const [color, setColor] = useState("");
  const hexData = [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
  ];
  function generateRandom() {
    if (format === "hex") {
      let c = "#";
      for (let i = 0; i < 6; i++) {
        c += `${hexData[Math.floor(Math.random() * 16)]}`;
      }
      setColor(c);
    } else {
      let c = `rgb(${Math.floor(Math.random() * 256)},${Math.floor(
        Math.random() * 256
      )},${Math.floor(Math.random() * 256)})`;
      setColor(c);
    }
  }
  useEffect(generateRandom, []);
  return (
    <div className="project-2">
      <h1>Random Color Generator</h1>
      <div className="color-container" style={{ backgroundColor: color }}>
        <div className="header">
          <button
            onClick={() => {
              setFormat("hex");
            }}
          >
            Create HEX Color
          </button>
          <button
            onClick={() => {
              setFormat("rgb");
            }}
          >
            Create RGB Color
          </button>
          <button onClick={generateRandom}>Generate Random Color</button>
        </div>
        <h1>{format}</h1>
        <h1>{color}</h1>
      </div>
    </div>
  );
}
