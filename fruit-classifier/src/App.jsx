import { useState } from "react";
import { fruits } from "./data";
import FruitCard from "./components/FruitCard";
import "./App.css";

export default function App() {
  const [selectedFruit, setSelectedFruit] = useState(null);

  const handleChange = (e) => {
    const fruit = fruits.find((f) => f.name === e.target.value);
    setSelectedFruit(fruit);
  };

  return (
    <div className="App">
      <h1>Fruit Classifier</h1>
      <select onChange={handleChange} defaultValue="">
        <option value="" disabled>
          Select a fruit
        </option>
        {fruits.map((f) => (
          <option key={f.name} value={f.name}>
            {f.name}
          </option>
        ))}
      </select>
      <FruitCard fruit={selectedFruit} />
    </div>
  );
}
