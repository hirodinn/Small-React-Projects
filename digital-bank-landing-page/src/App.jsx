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
      <div className="flex flex-col-reverse 2xl:pl-40 xl:pl-35 lg:pl-25 bg-my-light-gray lg:justify-center relative w-full h-[115vh] lg:h-[90vh] justify-start">
        <div className="px-7 lg:px-0 text-center lg:text-start lg:w-[50%] box-border">
          <p className="text-7xl  lg:max-w-[80%]">
            Next generation digital banking
          </p>
          <p className="lg:max-w-[70%] my-6 text-gray-500">
            Take your financial life online. Your Digitalbank account will be a
            one-stop-shop for spending, saving, budgeting, investing, and much
            more.
          </p>
          <button className="request">Request invite</button>
        </div>
        <img
          src="images/image-mockups.png"
          className="absolute max-w-[600px] right-[50%] translate-x-[50%] lg:translate-x-0 lg:right-0  top-[-100px] lg:max-w-[50%] lg:bg-[url(images/bg-intro-desktop.svg)] bg-[url(images/bg-intro-mobile.svg)] bg-no-repeat bg-size-[100%]"
        />
      </div>
      <div className="bg-my-gray 2xl:px-40 xl:px-35 lg:px-25  text-gray-600 py-30 text-center lg:text-start">
        <h1 className="text-6xl">Why choose Digitalbank?</h1>
        <p className="my-10 max-w-[70%] lg:max-w-[45%] mx-auto lg:ml-0">
          we leverage Open Banking to turn your bank account into your financial
          hub, Control your finances like never before
        </p>
        <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start space-y-10">
          <div className="max-w-[70%] flex-1 mr-6">
            <img
              src="images/icon-online.svg"
              className="rounded-full mx-auto lg:ml-0"
            />
            <p className="font-bold text-3xl my-3">Online Banking</p>
            <p>
              Our modern web and mobile applications allow you to keep track of
              your finances wherever you are in the world.
            </p>
          </div>
          <div className="flex-1 max-w-[70%] mr-6">
            <img
              src="images/icon-online.svg"
              className="rounded-full mx-auto lg:ml-0"
            />
            <p className="font-bold text-3xl my-3">Online Banking</p>
            <p>
              Our modern web and mobile applications allow you to keep track of
              your finances wherever you are in the world.
            </p>
          </div>
          <div className="flex-1 max-w-[70%] mr-6">
            <img
              src="images/icon-online.svg"
              className="rounded-full mx-auto lg:ml-0"
            />
            <p className="font-bold text-3xl my-3">Online Banking</p>
            <p>
              Our modern web and mobile applications allow you to keep track of
              your finances wherever you are in the world.
            </p>
          </div>
          <div className="flex-1 max-w-[70%]">
            <img
              src="images/icon-online.svg"
              className="rounded-full mx-auto lg:ml-0"
            />
            <p className="font-bold text-3xl my-3">Online Banking</p>
            <p>
              Our modern web and mobile applications allow you to keep track of
              your finances wherever you are in the world.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
