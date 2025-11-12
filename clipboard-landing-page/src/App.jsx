import "./App.css";
function App() {
  return (
    <div className="font-outfit box-border h-fit w-full">
      <div className=" bg-[url(/images/bg-header-mobile.png)] md:bg-[url(/images/bg-header-desktop.png)] bg-no-repeat bg-cover h-150 md:h-100 flex items-center justify-center box-border">
        <img src="images/logo.svg" className="min-w-[300px] md:min-w-0" />
      </div>
      <div className="w-[80%] max-w-[750px] mx-auto mt-[-70px] md:mt-0 mb-10 box-border">
        <h1 className="text-my-dark-gray text-center text-5xl font-bold">
          A history of everything you copy
        </h1>
        <p className="text-my-light-gray text-[20px] text-center leading-8 mt-5">
          Clipboard allows you to track and organize everything you copy.
          Instantly access your clipboard on all your devices.
        </p>
        <div className="flex flex-col md:flex-row justify-center text-[20px] mt-8 gap-3 mb-14">
          <button className="text-white bg-my-green rounded-4xl py-3 px-6 cursor-pointer shadow-[0_4px_5px_rgba(0,0,0,0.5)] font-outfit w-full md:w-fit">
            Download for iOS
          </button>
          <button className="text-white bg-my-violet rounded-4xl py-3 px-6 cursor-pointer shadow-[0_4px_5px_rgba(0,0,0,0.5)] font-outfit w-full md:w-fit">
            Download for mac
          </button>
        </div>
        <h1 className="text-my-dark-gray text-center text-5xl font-bold">
          Keep track of your snippets
        </h1>
        <p className="text-my-light-gray text-[20px] text-center leading-8 mt-5">
          Clipboard instantly stores any item you copy in the cloud, meaning you
          can access your snippets immediately on all your devices. Our Mac and
          iOS apps will help you organize everything.
        </p>
      </div>
      <div className="flex flex-col md:flex-row box-border h-fit mb-20 max-w-full text-center md:text-start">
        <img
          src="images/image-computer.png"
          className="relative md:right-20 md:w-1/2 h-fit self-center w-[80%]"
        />
        <div className="flex flex-col box-border self-center md:max-w-[500px] justify-around max-w-[80%] gap-3 md:self-stretch mt-9 md:mt-0 ">
          <div className="w-full">
            <h1 className="text-my-dark-gray text-4xl font-bold">
              Quick Search
            </h1>
            <p className="mt-2 text-my-light-gray text-[20px]">
              Easily search your snippets by content, category, web address,
              application, and more
            </p>
          </div>
          <div className="w-full">
            <h1 className="text-my-dark-gray text-4xl font-bold">
              iCloud Sync
            </h1>
            <p className="mt-2 text-my-light-gray text-[20px]">
              instantly saves and syncs snippets across all your devices
            </p>
          </div>
          <div className="w-full">
            <h1 className="text-my-dark-gray text-4xl font-bold">
              Compelete History
            </h1>
            <p className="mt-2 text-my-light-gray text-[20px]">
              Retrive any snippets from the first moment you started using the
              app.
            </p>
          </div>
        </div>
      </div>
      <div className="w-[80%] max-w-[750px] mx-auto mb-15">
        <h1 className="text-5xl text-my-dark-gray text-center font-bold">
          Access Clipboard anywhere
        </h1>
        <p className="text-my-light-gray text-[20px] text-center mt-5">
          Whether you are on the go, or at your computer, you can access your
          Clipboard snippets in the few simple clicks
        </p>
      </div>
      <img src="images/image-devices.png" className="mx-auto mb-10" />
      <div className="w-[80%] max-w-[750px] mx-auto mb-15">
        <h1 className="text-5xl text-my-dark-gray text-center font-bold">
          Supercharge your workflow
        </h1>
        <p className="text-my-light-gray text-[20px] text-center mt-5">
          We've got the tools to boost your productivity.
        </p>
      </div>
      <div className="flex flex-col md:flex-row gap-5 w-[90%] max-w-[1200px] border-2 mx-auto mb-100">
        <div className="flex-1 flex flex-col items-center gap-3">
          <img src="images/icon-blacklist.svg" />
          <h1 className="text-my-dark-gray text-center text-3xl font-bold mt-5">
            Create Blacklists
          </h1>
          <p className="text-my-light-gray text-[20px] text-center">
            Ensure Sensitive information never makes its way to your clipboard
            by excluding certain sources
          </p>
        </div>
        <div className="flex-1 flex flex-col items-center gap-3">
          <img src="images/icon-blacklist.svg" />
          <h1 className="text-my-dark-gray text-center text-3xl font-bold mt-5">
            Create Blacklists
          </h1>
          <p className="text-my-light-gray text-[20px] text-center">
            Ensure Sensitive information never makes its way to your clipboard
            by excluding certain sources
          </p>
        </div>
        <div className="flex-1 flex flex-col items-center gap-3">
          <img src="images/icon-blacklist.svg" />
          <h1 className="text-my-dark-gray text-center text-3xl font-bold mt-5">
            Create Blacklists
          </h1>
          <p className="text-my-light-gray text-[20px] text-center">
            Ensure Sensitive information never makes its way to your clipboard
            by excluding certain sources
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
