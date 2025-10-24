import { useRef, useState } from "react";
import "./Project16.css";
export function Project16({ windowDimension }) {
  const [outsideClick, setOutsideClick] = useState(true);
  const contentRef = useRef(null);
  function decideClick(e) {
    if (contentRef.current && !contentRef.current.contains(e.target)) {
      setOutsideClick(true);
    } else {
      console.log("Clicked inside content");
    }
  }

  return (
    <div className="project-16" onClick={decideClick}>
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
          <div className="content" ref={contentRef} onClick={decideClick}>
            <h1>This is some random content</h1>
            <p>
              please click outside of this to close this.It won't close if you
              click inside this content{" "}
            </p>
          </div>
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
