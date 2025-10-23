import { useState } from "react";
import "./Project14.css";
export function Project14() {
  const [board, setBoard] = useState([
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ]);
  return (
    <div className="project-14">
      <div className="board">
        {board.map((row) => {
          return row.map((box) => {
            return <div className="box">{box}</div>;
          });
        })}
      </div>
    </div>
  );
}
