function App() {
  return (
    <div className="bg-(--primary-background) py-[70px] w-screen flex items-center justify-center">
      <div className="bg-white w-[95vw] max-w-[700px] flex flex-col p-[30px] rounded-[10px]">
        <img src="images/image-omelette.jpeg" className="rounded-[10px]" />
        <h2 className="font-youngserif text-3xl py-5">Simple Omelete Recipe</h2>
        <p className="font-outfit text-(--gray-color) text-justify">
          an easy quick dish, perfect for any meal. This classic omelette
          combines beaten eggs cooked to perfection, optionally filled with your
          choice of cheese, vegetables, or meats.
        </p>
      </div>
    </div>
  );
}

export default App;
