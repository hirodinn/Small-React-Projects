import { useState } from "react";

function App() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <div
      className={`bg-(--primary-background) h-screen flex justify-center items-center relative transition-all duration-1000 ${
        darkMode && "dark"
      }`}
      onClick={() => setDarkMode(!darkMode)}
    >
      <div className="bg-(--box-1) w-[250px] text-box-2 h-[100px] absolute top-(--vertical-center-absolute) translate-y-(--vertical-translate) hover:scale-150 transition-all duration-300">
        Hi my name is hire bikila
      </div>
      <div className="bg-(--box-2) w-[250px] h-[100px] "></div>
    </div>
  );
}

export default App;
