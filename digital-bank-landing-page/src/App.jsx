function App() {
  return (
    <div className="w-full h-screen box-border bg-cyan-100 font-outfit">
      <header className="w-full box-border mx-auto h-23 px-10 flex justify-between xl:px-25 lg:px-40  bg-white py-8 items-center">
        <img src="images/logo-dark.svg" />
        <ul className="text-[19px] hidden lg:flex">
          <li className="text-gray-500 cursor-pointer mr-6">Home</li>
          <li className="text-gray-500 cursor-pointer mr-6">About</li>
          <li className="text-gray-500 cursor-pointer mr-6">Contact</li>
          <li className="text-gray-500 cursor-pointer mr-6">Blog</li>
          <li className="text-gray-500 cursor-pointer mr-6">Careers</li>
        </ul>
        <button className="hidden lg:block py-3 px-7 rounded-4xl text-white bg-linear-[45deg] from-gradient-first to-gradient-second cursor-pointer">
          Request invite
        </button>
        <img src="images/icon-hamburger.svg" className="lg:hidden" />
      </header>
    </div>
  );
}

export default App;
