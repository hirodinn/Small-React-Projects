import { useState } from "react";

function App() {
  const [spaceBetween, setSpaceBetween] = useState(true);

  return (
    <div
      className="text-8xl bg-gray-200 text-orange-600 h-screen flex justify-center items-center"
      onClick={() => setSpaceBetween(!spaceBetween)}
    >
      <div
        className={`bg-blue-400 w-[250px] h-[100px] transition-all duration-1000`}
        style={{ marginRight: spaceBetween ? "20rem" : "1rem" }}
      ></div>
      <div
        className={`bg-red-400 w-[250px] h-[100px] transition-all duration-1000`}
        style={{ marginLeft: spaceBetween ? "20rem" : "1rem" }}
      ></div>
    </div>
  );
}

export default App;
