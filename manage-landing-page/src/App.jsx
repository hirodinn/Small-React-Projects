function App() {
  return (
    <div className=" flex flex-col py-6 h-fit font-['Outfit'] bg-[url(public/images/bg-simplify-section-desktop.svg)] bg-no-repeat fill-amber-300 px-5 xl:px-40">
      <header className="w-full h-20 mx-auto flex justify-between items-center">
        <img src="images/logo.svg" className="cursor-pointer" />
        <ul className="md:flex items-center justify-center hidden">
          <li className="pr-8 cursor-pointer hover:text-gray-500">Pricing</li>
          <li className="pr-8 cursor-pointer hover:text-gray-500">Product</li>
          <li className="pr-8 cursor-pointer hover:text-gray-500">About Us</li>
          <li className="pr-8 cursor-pointer hover:text-gray-500">Careers</li>
          <li className="pr-8 cursor-pointer hover:text-gray-500">Community</li>
        </ul>
        <img
          src="images/icon-hamburger.svg"
          className="block md:hidden cursor-pointer"
        />
        <button className="rounded-[30px] cursor-pointer text-white bg-my-orange px-5 py-2.5 hover:bg-my-orange-hover hidden md:block ">
          Get Started
        </button>
      </header>
      <div className="flex gap-[10%] flex-col-reverse lg:flex-row mt-5">
        <div className="flex-1 py-8 flex flex-col items-center lg:items-start text-center lg:text-start justify-around">
          <h1 className="text-7xl text-my-blue font-bold">
            Bring everyone together to build better products
          </h1>
          <p className="my-7 max-w-[78%] text-2xl text-gray-500">
            Manage makes it simple for software teams to plan day-to-day tasks
            while keeping the larger teams goals in view
          </p>
          <button className="rounded-[30px] cursor-pointer text-white bg-my-orange px-5 py-2.5 hover:bg-my-orange-hover ">
            Get Started
          </button>
        </div>
        <div className="flex-1 flex justify-center lg:justify-end">
          <img src="public/images/illustration-intro.svg" className="h-fit" />
        </div>
      </div>
    </div>
  );
}

export default App;
