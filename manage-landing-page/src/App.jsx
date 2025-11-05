function App() {
  return (
    <div className=" flex flex-col py-6 h-fit font-['Outfit'] bg-[url(public/images/bg-simplify-section-desktop.svg)] bg-no-repeat fill-amber-300 px-5 xl:px-40">
      <header className="w-full h-20 mx-auto flex justify-between items-center border-2">
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
      <div className="flex gap-[10%] flex-col-reverse lg:flex-row mt-30 border-2">
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
      <div className="flex flex-col gap-5 lg:flex-row mt-30 border-2">
        <div className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-start mb-10 lg:mb-0">
          <h1 className="text-5xl text-my-blue font-bold max-w-[80%] mb-5">
            What's different about Manage?
          </h1>
          <p className="text-2xl text-gray-500 max-w-[80%] leading-loose lg:leading-relaxed">
            Manage provides all the functionality your teams, without the
            complexity. Our software is tailor-made for modern digital products
          </p>
        </div>
        <div className="flex-1 px-6">
          <div className="flex items-start gap-4 mb-4">
            <div className="text-white bg-my-orange px-8 py-2.5 rounded-3xl">
              01
            </div>
            <div>
              <h2 className="font-bold text-3xl text-my-blue mb-3">
                Track company-wide progress
              </h2>
              <p className="text-2xl text-gray-500">
                See how your day-to-day tasks fit into the wider vision. Go from
                tracking progress at the milestone level all the way down to the
                smallest of details. Never lose sight of the bigger picture
                again.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4 mb-4">
            <div className="text-white bg-my-orange px-8 py-2.5 rounded-3xl">
              02
            </div>
            <div>
              <h2 className="font-bold text-3xl text-my-blue mb-3">
                Advanced built-in reports
              </h2>
              <p className="text-2xl text-gray-500">
                Set internal delivery estimates and track progress toward
                company goals. Our customisable dashboard helps you build out
                the reports you need to keep key stakeholders informed.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4 mb-4">
            <div className="text-white bg-my-orange px-8 py-2.5 rounded-3xl">
              03
            </div>
            <div>
              <h2 className="font-bold text-3xl text-my-blue mb-3">
                Everything you need in one place
              </h2>
              <p className="text-2xl text-gray-500">
                Stop jumping from one service to another to communicate, store
                files, track tasks and share documents. Manage offers an
                all-in-one team productivity solution.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
