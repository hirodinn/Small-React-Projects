import { useState } from "react";

function App() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <div
      className={` bg-(--primary-background) h-screen flex justify-center items-center relative ${
        darkMode && "dark"
      }`}
      onClick={() => setDarkMode(!darkMode)}
    >
      <div className="bg-(--box-1) w-[250px] text-box-2 h-[100px] absolute top-(--vertical-center-absolute) translate-y-(--vertical-translate)">
        Hi my name is hire bikila
      </div>
      <div className="bg-(--box-2) w-[250px] h-[100px] "></div>
    </div>
  );
}

export default App;
