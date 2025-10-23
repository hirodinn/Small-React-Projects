import { useEffect, useState } from "react";
import "./Project9.css";
export function Project9() {
  const [width, setWidth] = useState(0);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setWidth(
        ((window.scrollY + window.innerHeight) /
          document.documentElement.scrollHeight) *
          100
      );
      console.log(window.scrollY);
    });
  }, []);
  return (
    <div className="project-9">
      <h1>Custom Scroll Indicator</h1>
      <div className="tracker">
        <div className="fill" style={{ width: `${width}%` }}></div>
      </div>
    </div>
  );
}
