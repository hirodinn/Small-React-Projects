import { useState } from "react";
import "./Project10.css";
export function Project10() {
  const infos = [
    <p className="normal-text">This is content for tab 1</p>,
    <p className="notmal-text">this is content for tab 2</p>,
    <p className="bold-large">Some large content</p>,
  ];
  const [text, setText] = useState(infos[0]);
  const [status, setStatus] = useState([true, false, false]);
  function inactiveAll(i) {
    const temp = [false, false, false];
    temp[i] = true;
    setStatus(temp);
  }
  return (
    <div className="project-10">
      {infos.map((info, i) => {
        return (
          <button
            key={i}
            onClick={() => {
              setText(info);
              inactiveAll(i);
            }}
            className={status[i] ? "active" : ""}
          >
            Tab {i + 1}
          </button>
        );
      })}
      {text}
    </div>
  );
}
