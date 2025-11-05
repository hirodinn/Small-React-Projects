function App() {
  return (
    <div className=" flex felx-col p-[50px] h-[200vw] font-['Outfit']">
      <header className="w-[90%] bg-amber-200 h-20 mx-auto sticky top-2.5 z-10 flex justify-between items-center max-w-[1200px] px-7">
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
          className="pr-10 block md:hidden"
        />
        <button className="rounded-[30px] cursor-pointer text-white bg-my-orange px-5 py-2.5 hover:bg-my-orange-hover hidden md:block ">
          Get Started
        </button>
      </header>
    </div>
  );
}

export default App;
