import profileImage from "../assets/profile.png";

function Header() {
  return (
    <header className="bg-white shadow-md py-6 px-4 sm:px-8 lg:px-16 flex flex-col sm:flex-row justify-between items-center">
      {/* Sol Taraf: Logo */}
      <div className="text-blue-600 text-2xl font-bold mb-4 sm:mb-0 cursor-pointer">
        MORENT
      </div>

      {/* Orta Kısım: Arama Çubuğu */}
      <div className="flex items-center bg-gray-100 rounded-full px-4 py-2 w-full sm:w-1/3 lg:w-1/4 mb-4 sm:mb-0">
        <span className="material-icons text-gray-400 mr-2">search</span>
        <input
          type="text"
          placeholder="Search something here"
          className="bg-gray-100 outline-none flex-grow focus:bg-white transition-colors duration-200"
        />
        <span className="material-icons text-gray-400 ml-2 cursor-pointer">
          tune
        </span>
      </div>

      {/* Sağ Taraf: İkonlar */}
      <div className="flex items-center space-x-4">
        <div className="relative flex items-center justify-center w-10 h-10 rounded-full hover:bg-gray-200 transition duration-200 cursor-pointer hidden sm:flex">
          <span className="material-icons text-gray-500">favorite</span>
        </div>
        <div className="relative flex items-center justify-center w-10 h-10 rounded-full hover:bg-gray-200 transition duration-200 cursor-pointer hidden sm:flex">
          <span className="material-icons text-gray-500">notifications</span>
          <span className="absolute top-1 right-1 h-2 w-2 bg-red-500 rounded-full"></span>
        </div>
        <div className="relative flex items-center justify-center w-10 h-10 rounded-full hover:bg-gray-200 transition duration-200 cursor-pointer hidden sm:flex">
          <span className="material-icons text-gray-500">settings</span>
        </div>
        <img
          src={profileImage}
          alt="User"
          className="w-10 h-10 rounded-full cursor-pointer"
        />
      </div>
    </header>
  );
}

export default Header;
