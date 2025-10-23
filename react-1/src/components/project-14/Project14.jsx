import { useState } from "react";
import "./Project14.css";
export function Project14() {
  const [board, setBoard] = useState([
    [" ", " ", " "],
    [" ", " ", " "],
    [" ", " ", " "],
  ]);
  const [currentSign, setCurrentSign] = useState("X");
  const [haveWinner, setHaveWinner] = useState(false);
  const [isDraw, setIsDraw] = useState(false);
  function changeSign() {
    if (currentSign === "X") setCurrentSign("O");
    else setCurrentSign("X");
  }
  function gamePlay() {
    changeSign();
    checkWinner();
    checkDraw();
  }
  function checkWinner() {
    if (
      board[0][0] === board[0][1] &&
      board[0][1] === board[0][2] &&
      board[0][0] !== " "
    )
      setHaveWinner(true);
    else if (
      board[1][0] === board[1][1] &&
      board[1][1] === board[1][2] &&
      board[1][0] !== " "
    )
      setHaveWinner(true);
    else if (
      board[2][0] === board[2][1] &&
      board[2][1] === board[2][2] &&
      board[2][0] !== " "
    )
      setHaveWinner(true);
    else if (
      board[0][0] === board[1][0] &&
      board[1][0] === board[2][0] &&
      board[0][0] !== " "
    )
      setHaveWinner(true);
    else if (
      board[0][1] === board[1][1] &&
      board[1][1] === board[2][1] &&
      board[0][1] !== " "
    )
      setHaveWinner(true);
    else if (
      board[0][2] === board[1][2] &&
      board[1][2] === board[2][2] &&
      board[0][2] !== " "
    )
      setHaveWinner(true);
    else if (
      board[0][0] === board[1][1] &&
      board[1][1] === board[2][2] &&
      board[0][0] !== " "
    )
      setHaveWinner(true);
    else if (
      board[0][2] === board[1][1] &&
      board[1][1] === board[2][0] &&
      board[0][2] !== " "
    )
      setHaveWinner(true);
  }
  function checkDraw() {
    let draw = true;
    for (let i = 0; i < 3 && draw; i++) {
      for (let j = 0; j < 3; j++) {
        draw = board[i][j] === " " ? false : draw;
      }
    }
    setIsDraw(draw);
  }
  function reset() {
    setBoard([
      [" ", " ", " "],
      [" ", " ", " "],
      [" ", " ", " "],
    ]);
    setHaveWinner(false);
    setIsDraw(false);
    setCurrentSign("X");
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
                  if (!isDraw && !haveWinner) {
                    const temp = board;
                    temp[i][j] = currentSign;
                    setBoard(temp);
                    gamePlay();
                  }
                }}
              >
                {box}
              </div>
            );
          });
        })}
      </div>
      <div className="info">
        <div>{isDraw && "Draw"}</div>
        <div>
          {haveWinner && `Winner : player ${currentSign === "X" ? "2" : "1"}`}
        </div>
        {(isDraw || haveWinner) && <button onClick={reset}>Play Again</button>}
      </div>
    </div>
  );
}
