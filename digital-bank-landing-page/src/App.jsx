function App() {
  return (
    <div className="w-full box-border bg-cyan-100 font-outfit">
      <header className="w-full box-border mx-auto h-23 px-10 flex justify-between 2xl:px-40 xl:px-35 lg:px-25  bg-white py-8 items-center z-10 relative">
        <img src="images/logo-dark.svg" className="cursor-pointer" />
        <ul className="text-[19px] hidden lg:flex">
          <li className="text-gray-500 cursor-pointer mr-6">Home</li>
          <li className="text-gray-500 cursor-pointer mr-6">About</li>
          <li className="text-gray-500 cursor-pointer mr-6">Contact</li>
          <li className="text-gray-500 cursor-pointer mr-6">Blog</li>
          <li className="text-gray-500 cursor-pointer mr-6">Careers</li>
        </ul>
        <button className="hidden lg:block request">Request invite</button>
        <img src="images/icon-hamburger.svg" className="lg:hidden" />
      </header>
      <div className="flex flex-col 2xl:pl-40 xl:pl-35 lg:pl-25 bg-my-light-gray justify-center relative h-screen w-full box-border">
        <div className="max-w-[50%] box-border">
          <p className="text-7xl  max-w-[70%]">
            Next generation digital banking
          </p>
          <p className="max-w-[70%] my-6">
            Take your financial life online. Your Digitalbank account will be a
            one-stop-shop for spending, saving, budgeting, investing, and much
            more.
          </p>
          <button className="request">Request invite</button>
        </div>
        <img
          src="images/image-mockups.png"
          className="absolute right-0 max-w-[50%]"
        />
      </div>
    </div>
  );
}

export default App;
