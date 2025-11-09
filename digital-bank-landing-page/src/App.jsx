function App() {
  return (
    <div className="w-full box-border bg-cyan-100 font-outfit">
      <header className="w-full box-border mx-auto h-23 px-8 flex justify-between 2xl:px-40 xl:px-35 lg:px-25 bg-white py-8 items-center z-10 relative">
        <img src="images/logo-dark.svg" className="cursor-pointer" />
        <ul className="text-[19px] hidden md:flex">
          <li className="text-gray-500 cursor-pointer mr-6">Home</li>
          <li className="text-gray-500 cursor-pointer mr-6">About</li>
          <li className="text-gray-500 cursor-pointer mr-6">Contact</li>
          <li className="text-gray-500 cursor-pointer mr-6">Blog</li>
          <li className="text-gray-500 cursor-pointer mr-6">Careers</li>
        </ul>
        <button className="hidden md:block request">Request invite</button>
        <img
          src="images/icon-hamburger.svg"
          className="md:hidden cursor-pointer"
        />
      </header>
      <div className="flex flex-col-reverse 2xl:pl-40 xl:pl-35 lg:px-25 bg-my-light-gray md:justify-center relative w-full justify-start px-8 md:flex-row md:items-center pb-5 md:pb-0">
        <div className="px-7 md:px-0 text-center md:text-start md:w-[50%] box-border">
          <p className="text-7xl  md:max-w-[80%] text-my-blue">
            Next generation digital banking
          </p>
          <p className="md:max-w-[70%] my-6 text-gray-500">
            Take your financial life online. Your Digitalbank account will be a
            one-stop-shop for spending, saving, budgeting, investing, and much
            more.
          </p>
          <button className="request">Request invite</button>
        </div>
        <img
          src="images/image-mockups.png"
          className="md:max-w-[50%] max-w-full md:relative md:top-30 md:mt-[-200px]"
        />
      </div>
      <div className="bg-my-gray 2xl:px-40 xl:px-35 lg:px-25  text-gray-600 py-30 text-center lg:text-start px-10">
        <h1 className="text-6xl text-my-blue">Why choose Digitalbank?</h1>
        <p className="my-10 max-w-[70%] lg:max-w-[45%] mx-auto lg:ml-0 text-[19px]">
          We leverage Open Banking to turn your bank account into your financial
          hub, Control your finances like never before
        </p>
        <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start space-y-10">
          <div className="max-w-[70%] flex-1 mr-6">
            <img
              src="images/icon-online.svg"
              className="rounded-full mx-auto lg:ml-0"
            />
            <p className="text-my-blue text-3xl my-3">Online Banking</p>
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
            <p className="text-my-blue text-3xl my-3">Simple Budgeting</p>
            <p>
              See exactly where your money goes each month. Receive
              notifications when you’re close to hitting your limits.
            </p>
          </div>
          <div className="flex-1 max-w-[70%] mr-6">
            <img
              src="images/icon-online.svg"
              className="rounded-full mx-auto lg:ml-0"
            />
            <p className="text-my-blue text-3xl my-3">Fast Onboarding</p>
            <p>
              We don’t do branches. Open your account in minutes online and
              start taking control of your finances right away.
            </p>
          </div>
          <div className="flex-1 max-w-[70%]">
            <img
              src="images/icon-online.svg"
              className="rounded-full mx-auto lg:ml-0"
            />
            <p className="text-my-blue text-3xl my-3">Open API</p>
            <p>
              Manage your savings, investments, pension, and much more from one
              account. Tracking your money has never been easier.
            </p>
          </div>
        </div>
      </div>
      <div className="bg-my-light-gray 2xl:px-40 xl:px-35 lg:px-25 lg:py-25 py-15 px-10">
        <h1 className="lg:mb-25 mb-15 text-6xl text-my-blue text-center lg:text-start">
          Latest Articles
        </h1>
        <div className="flex gap-4 text-gray-500 flex-wrap justify-evenly">
          <div className="w-[300px] grow bg-white rounded-[10px] overflow-hidden max-w-[450px]">
            <img
              src="images/image-currency.jpg"
              className="h-[50%]  w-full object-center object-cover"
            />
            <div className="px-6 py-8">
              <p>By Claire Robinson</p>
              <p className="font-bold text-gray-600 my-2 text-[19px]">
                Receive money in any currency with no fees
              </p>
              <p>
                The world is getting smaller and we’re becoming more mobile. So
                why should you be forced to only receive money in a single ...
              </p>
            </div>
          </div>
          <div className="w-[300px] grow bg-white rounded-[10px] overflow-hidden max-w-[450px]">
            <img
              src="images/image-restaurant.jpg"
              className="h-[50%]  w-full object-center object-cover"
            />
            <div className="px-6 py-8">
              <p>By Wilson Hutton</p>
              <p className="font-bold text-gray-600 my-2 text-[19px]">
                Treat yourself without worrying about money
              </p>
              <p>
                Our simple budgeting feature allows you to separate out your
                spending and set realistic limits each month. That means you ...
              </p>
            </div>
          </div>
          <div className="w-[300px] grow bg-white rounded-[10px] overflow-hidden max-w-[450px]">
            <img
              src="images/image-plane.jpg"
              className="h-[50%]  w-full object-center object-cover"
            />
            <div className="px-6 py-8">
              <p>By Wilson Hutton</p>
              <p className="font-bold text-gray-600 my-2 text-[19px]">
                Take your Digitalbank card wherever you go
              </p>
              <p>
                We want you to enjoy your travels. This is why we don’t charge
                any fees on purchases while you’re abroad. We’ll even ...
              </p>
            </div>
          </div>
          <div className="w-[300px] grow bg-white rounded-[10px] overflow-hidden max-w-[450px]">
            <img
              src="images/image-confetti.jpg"
              className="h-[50%] w-full object-center object-cover"
            />
            <div className="px-6 py-8">
              <p>By Claire Robinson</p>
              <p className="font-bold text-gray-600 my-2 text-[19px]">
                Our invite-only Beta accounts are now live!
              </p>
              <p>
                After a lot of hard work by the whole team, we’re excited to
                launch our closed beta. It’s easy to request an invite through
                ...
              </p>
            </div>
          </div>
        </div>
      </div>
      <footer className="bg-my-blue-background 2xl:px-40 xl:px-35 lg:px-25 py-7 px-10 flex flex-col lg:flex-row lg:h-[170px] text-white">
        <div className="lg:h-100% flex flex-col justify-around mx-auto lg:ml-0">
          <img src="images/logo-light.svg" className="cursor-pointer" />
          <div className="flex justify-between my-8">
            <img src="images/icon-facebook.svg" className="cursor-pointer" />
            <img src="images/icon-youtube.svg" className="cursor-pointer" />
            <img src="images/icon-twitter.svg" className="cursor-pointer" />
            <img src="images/icon-pinterest.svg" className="cursor-pointer" />
            <img src="images/icon-instagram.svg" className="cursor-pointer" />
          </div>
        </div>
        <div className="flex flex-col flex-wrap text-[18px] h-full flex-1 mb-8 lg:mb-0">
          <p className="mx-auto mb-2 cursor-pointer">About</p>
          <p className="mx-auto mb-2 cursor-pointer">Contact</p>
          <p className="mx-auto mb-2 cursor-pointer">Blog</p>
          <p className="mx-auto mb-2 cursor-pointer">Careers</p>
          <p className="mx-auto mb-2 cursor-pointer">Support</p>
          <p className="mx-auto mb-2 cursor-pointer">Privacy</p>
        </div>
        <div className="flex flex-col items-center">
          <button className="request mb-4">Request invite</button>
          <p className="text-gray-500">@Digitalbank. All Rights Reserved</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
