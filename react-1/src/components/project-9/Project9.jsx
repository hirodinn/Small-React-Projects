import { useEffect } from "react";
import "./Project9.css";
export function Project9({ height }) {
  useEffect(() => {}, []);
  return (
    <div className="project-9">
      <h1>Custom Scroll Indicator</h1>
      <div className="tracker">
        <div
          className="fill"
          style={{
            width: `${
              ((height + window.innerHeight) /
                document.documentElement.scrollHeight) *
              100
            }%`,
          }}
        ></div>
      </div>
    </div>
  );
}
