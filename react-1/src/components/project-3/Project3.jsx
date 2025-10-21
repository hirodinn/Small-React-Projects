import { useState } from "react";
import "./Project3.css";
import { Star } from "./Star";
export function Project3() {
  let items = [0, 1, 2, 3, 4, 5, 6, 7, 8];
  const [fillTo, setFillTo] = useState(0);
  return (
    <div className="project-3">
      <h1>Star Rating</h1>
      <div className="star-container">
        {items.map((item) => {
          return (
            <Star
              key={item}
              fillTo={fillTo}
              setFillTo={setFillTo}
              index={item}
            />
          );
        })}
      </div>
    </div>
  );
}
