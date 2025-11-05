function App() {
  return (
    <div className=" flex flex-col pt-6 h-fit font-['Outfit'] bg-[url(public/images/bg-simplify-section-desktop.svg)] bg-no-repeat fill-amber-300 box-border overflow-hidden">
      <header className=" h-20 flex justify-between items-center border-2 max overflow-hidden box-border w-[90%] max-w-[1370px] mx-auto">
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
      <div className="flex gap-[10%] flex-col-reverse lg:flex-row mt-30 border-2 w-[90%] max-w-[1370px] box-border mx-auto">
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
      <div className="flex flex-col gap-5 lg:flex-row mt-30 border-2 w-[90%] max-w-[1370px] mx-auto box-border">
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
          <div className="flex flex-col items-start mb-4">
            <div className="flex lg:bg-transparent bg-my-pink w-full rounded-3xl">
              <p className=" text-white bg-my-orange w-[86px] py-2.5 rounded-3xl inline-flex items-center justify-center">
                01
              </p>
              <p className="font-bold text-2xl text-my-blue ml-3.5 mt-1.5">
                Track company-wide progress
              </p>
            </div>
            <p className="text-2xl text-gray-500 lg:ml-[100px] leading-10 mt-5">
              See how your day-to-day tasks fit into the wider vision. Go from
              tracking progress at the milestone level all the way down to the
              smallest of details. Never lose sight of the bigger picture again.
            </p>
          </div>
          <div className="flex flex-col items-start mb-4">
            <div className="flex lg:bg-transparent bg-my-pink w-full rounded-3xl">
              <p className=" text-white bg-my-orange w-[86px] py-2.5 rounded-3xl inline-flex items-center justify-center">
                02
              </p>
              <p className="font-bold text-2xl text-my-blue ml-3.5 mt-1.5">
                Advanced built-in reports
              </p>
            </div>
            <p className="text-2xl text-gray-500 lg:ml-[100px] leading-10 mt-5">
              Set internal delivery estimates and track progress toward company
              goals. Our customisable dashboard helps you build out the reports
              you need to keep key stakeholders informed.
            </p>
          </div>
          <div className="flex flex-col items-start mb-4">
            <div className="flex lg:bg-transparent bg-my-pink w-full rounded-3xl">
              <p className=" text-white bg-my-orange w-[86px] py-2.5 rounded-3xl inline-flex items-center justify-center">
                03
              </p>
              <p className="font-bold text-2xl text-my-blue ml-3.5 mt-1.5">
                Everything you need in one place
              </p>
            </div>
            <p className="text-2xl text-gray-500 lg:ml-[100px] leading-10 mt-5">
              Stop jumping from one service to another to communicate, store
              files, track tasks and share documents. Manage offers an
              all-in-one team productivity solution.
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center mt-30  box-border">
        <h1 className="text-5xl text-my-blue font-bold mb-24">
          What they've said
        </h1>
        <div className="flex gap-7 lg:mb-8">
          <div className="flex flex-col w-[600px] bg-box-gray relative p-8 text-center sm:hidden lg:block">
            <img
              src="images/avatar-anisha.png"
              className="w-[50px] absolute top-[-25px] left-[50%] translate-x-[-25px]"
            />
            <p className="text-2xl font-bold my-4">Anisha Li</p>
            <p>
              “Manage has supercharged our team’s workflow. The ability to
              maintain visibility on larger milestones at all times keeps
              everyone motivated.”
            </p>
          </div>
          <div className="flex flex-col w-[600px] bg-box-gray relative p-8 text-center">
            <img
              src="images/avatar-ali.png"
              className="w-[50px] absolute top-[-25px] left-[50%] translate-x-[-25px]"
            />
            <p className="text-2xl font-bold my-4">Ali Bravo</p>
            <p>
              “We have been able to cancel so many other subscriptions since
              using Manage. There is no more cross-channel confusion and
              everyone is much more focused.”
            </p>
          </div>
          <div className="flex flex-col w-[600px] bg-box-gray relative p-8 text-center sm:hidden lg:block">
            <img
              src="images/avatar-richard.png"
              className="w-[50px] absolute top-[-25px] left-[50%] translate-x-[-25px]"
            />
            <p className="text-2xl font-bold my-4">Richard Watts</p>
            <p>
              “Manage allows us to provide structure and process. It keeps us
              organized and focused. I can’t stop recommending them to everyone
              I talk to!”
            </p>
          </div>
        </div>
        <div className=" lg:hidden mt-1 mb-6">
          <i className="fa-regular fa-circle text-my-orange mx-1.5"></i>
          <i className="fa-regular fa-circle text-my-orange mx-1.5"></i>
          <i className="fa-regular fa-circle text-my-orange bg-my-orange rounded-[50%] mx-1.5"></i>
          <i className="fa-regular fa-circle text-my-orange mx-1.5"></i>
        </div>
        <button className="rounded-[30px] cursor-pointer text-white bg-my-orange px-5 py-2.5 hover:bg-my-orange-hover">
          Get Started
        </button>
      </div>
      <div className="bg-my-orange flex flex-col lg:flex-row mt-30 justify-between  lg:px-40 p-10 box-border w-full items-center">
        <h1 className="text-white text-5xl flex-1 lg:max-w-[40%] max-w-[70%] mb-12 lg:mb-0 text-center lg:text-start">
          Simplify how your team works today.
        </h1>
        <button className="rounded-[30px] cursor-pointer text-my-orange bg-white px-5 py-2.5 hover:text-my-orange-hover ">
          Get Started
        </button>
      </div>
      <div className="bg-my-dark w-full lg:px-40 p-10 box-border flex justify-between">
        <div className="flex flex-col">
          <img src="images/logo.svg" className="cursor-pointer" />
          <ul className="flex w-full mt-20">
            <li className="cursor-pointer mx-3">
              <i class="fab fa-facebook-f text-my-dark hover:bg-my-orange text-2xl bg-white p-1 pb-0"></i>
            </li>
            <li className="cursor-pointer mx-3">
              <i class="fab fa-youtube text-white hover:text-my-orange text-3xl"></i>
            </li>
            <li className="cursor-pointer mx-3">
              <i class="fab fa-twitter text-white hover:text-my-orange text-3xl"></i>
            </li>
            <li className="cursor-pointer mx-3">
              <i class="fab fa-pinterest text-white hover:text-my-orange text-3xl "></i>
            </li>
            <li className="cursor-pointer mx-3">
              <i class="fab fa-instagram text-white hover:text-my-orange text-3xl "></i>
            </li>
          </ul>
        </div>
        <div className="flex flex-col text-white justify-between min-h-full text-center">
          <a href="#" className="hover:text-my-orange cursor-pointer">
            Home
          </a>
          <a href="#" className="hover:text-my-orange cursor-pointer">
            Pricing
          </a>
          <a href="#" className="hover:text-my-orange cursor-pointer">
            Products
          </a>
          <a href="#" className="hover:text-my-orange cursor-pointer">
            About Us
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
