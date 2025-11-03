import { useState } from "react";

function App() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <div
      className={` bg-primary-background h-screen flex justify-center items-center ${
        darkMode && "dark"
      }`}
      onClick={() => setDarkMode(!darkMode)}
    >
      <div
        className={`bg-box-1 w-[250px] text-box-2 h-[100px] animate-loadInfinite`}
      >
        Hi my name is hire bikila
      </div>
      <div
        className={`bg-box-2 w-[250px] h-[100px] animate-loadInfinite`}
      ></div>
    </div>
  );
}

export default App;
