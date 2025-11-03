import { useState } from "react";

function App() {
  const [spaceBetween, setSpaceBetween] = useState(true);

  return (
    <div
      className="text-8xl bg-gray-200 text-orange-600 h-screen flex justify-center items-center"
      onClick={() => setSpaceBetween(!spaceBetween)}
    >
      <div
        className={`bg-secondary w-[250px] h-[100px] animate-loadInfinite`}
        style={{ marginRight: spaceBetween ? "20rem" : "1rem" }}
      ></div>
      <div
        className={`bg-red-400 w-[250px] h-[100px] animate-loadInfinite`}
        style={{ marginLeft: spaceBetween ? "20rem" : "1rem" }}
      ></div>
    </div>
  );
}

export default App;
