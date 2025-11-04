function App() {
  return (
    <div className="bg-(--primary-background) py-[70px] overflow-x-hidden max-w-full flex items-center justify-center">
      <div className="bg-white w-[95%] max-w-[700px] flex flex-col p-[30px] rounded-[10px] box-border">
        <img src="images/image-omelette.jpeg" className="rounded-[10px]" />
        <h2 className="font-youngserif text-3xl my-7 box-border">
          Simple Omelete Recipe
        </h2>
        <p className="font-outfit text-(--gray-color) text-justify">
          an easy quick dish, perfect for any meal. This classic omelette
          combines beaten eggs cooked to perfection, optionally filled with your
          choice of cheese, vegetables, or meats.
        </p>
        <div className="bg-(--secondary-background) p-[30px] my-5 font-outfit rounded-[10px] box-border">
          <h1 className="text-3xl text-(--primary-color) box-border mb-2.5">
            Preparation Time
          </h1>
          <ul className="list-disc ml-7 marker:text-(--primary-color) box-border">
            <li className="my-2">
              <span className="font-bold">Total: </span>Approximately 10 minutes
            </li>
            <li className="my-2">
              <span className="font-bold">Preparation: </span>5 minutes
            </li>
            <li className="my-2">
              <span className="font-bold">Cooking: </span>5 minutes
            </li>
          </ul>
        </div>
        <div className="border-b-2 border-gray-400 py-7 box-border">
          <h1 className="text-(--secondary-color) text-3xl font-youngserif">
            Ingredients
          </h1>
          <ul className="box-border pl-9 list-disc marker:text-(--secondary-color)">
            <li className="my-2 pl-2.5">2-3 large eggs</li>
            <li className="my-2 pl-2.5">Salt, to taste</li>
            <li className="my-2 pl-2.5">Pepper, to taste</li>
            <li className="my-2 pl-2.5">1 tablespoon of buttor or oil</li>
            <li className="my-2 pl-2.5">
              Optional fillings: cheese, diced vegetables, cooked meats, herbs
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
