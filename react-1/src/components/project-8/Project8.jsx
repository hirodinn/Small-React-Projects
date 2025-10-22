import { useState } from "react";
import "./Project8.css";
export function Project8() {
  const [dark, setDark] = useState(false);
  function toggleDark() {
    setDark(!dark);
  }
  return (
    <div className={dark ? "project-8 dark" : "project-8"}>
      <h1>Hello World</h1>
      <button onClick={toggleDark}>Change Theme</button>
    </div>
  );
}
