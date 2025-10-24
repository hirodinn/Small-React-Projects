import { useState } from "react";
import "./Project16.css";
export function Project16({ windowDimension }) {
  const [outsideClick, setOutsideClick] = useState(true);
  return (
    <div
      className="project-16"
      onClick={() => {
        if (!outsideClick) setOutsideClick(true);
      }}
    >
      <h1>Use Outside Click Hook</h1>
      <div className="outside-click-hook">
        {outsideClick ? (
          <button
            onClick={() => {
              setOutsideClick(false);
            }}
          >
            Show Content
          </button>
        ) : (
          <div className="content">this is clicked</div>
        )}
      </div>
      <h1>Use Resize Hook</h1>
      <div className="resize-hook">
        <div>width : {windowDimension[0]}</div>
        <div>height : {windowDimension[1]}</div>
      </div>
    </div>
  );
}
