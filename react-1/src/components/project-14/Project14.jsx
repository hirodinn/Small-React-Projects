import { useState } from "react";
import "./Project14.css";
export function Project14() {
  const [board, setBoard] = useState([
    [" ", " ", " "],
    [" ", " ", " "],
    [" ", " ", " "],
  ]);
  const [currentSign, setCurrentSign] = useState("X");
  function changeSign() {
    if (currentSign === "X") setCurrentSign("O");
    else setCurrentSign("X");
  }
  return (
    <div className="project-14">
      <div className="board">
        {board.map((row, i) => {
          return row.map((box, j) => {
            return (
              <div
                className="box"
                onClick={() => {
                  const temp = board;
                  temp[i][j] = currentSign;
                  setBoard(temp);
                  changeSign();
                }}
              >
                {box}
              </div>
            );
          });
        })}
      </div>
    </div>
  );
}
