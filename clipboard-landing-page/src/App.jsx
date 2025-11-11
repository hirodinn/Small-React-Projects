import "./App.css";
function App() {
  return (
    <div>
      <div className=" bg-[url(/images/bg-header-mobile.png)] md:bg-[url(/images/bg-header-desktop.png)] bg-no-repeat bg-cover h-150 md:h-100 flex items-center justify-center">
        <img src="images/logo.svg" className="min-w-[300px] md:min-w-0" />
      </div>
    </div>
  );
}

export default App;
