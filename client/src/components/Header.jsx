function Header() {
  return (
    <header className="bg-white shadow-md py-4 px-4 sm:px-8 lg:px-16 flex flex-col sm:flex-row justify-between items-center">
      {/* Sol Taraf: Logo */}
      <div className="text-blue-600 text-2xl font-bold mb-4 sm:mb-0">
        MORENT
      </div>

      {/* Orta Kısım: Arama Çubuğu */}
      <div className="flex items-center bg-gray-100 rounded-full px-4 py-2 w-full sm:w-1/3 lg:w-1/4 mb-4 sm:mb-0">
        <span className="material-icons text-gray-400 mr-2">search</span>
        <input
          type="text"
          placeholder="Search something here"
          className="bg-gray-100 outline-none flex-grow"
        />
        <span className="material-icons text-gray-400 ml-2 cursor-pointer">
          tune
        </span>
      </div>

      {/* Sağ Taraf: İkonlar */}
      <div className="flex items-center space-x-6">
        <span className="hidden sm:inline-block material-icons text-gray-500">
          favorite
        </span>
        <span className="hidden sm:inline-block material-icons text-gray-500 relative">
          notifications
          <span className="absolute top-0 right-0 h-2 w-2 bg-red-500 rounded-full"></span>
        </span>
        <span className="hidden sm:inline-block material-icons text-gray-500">
          settings
        </span>
        <img
          src="https://via.placeholder.com/40"
          alt="User"
          className="w-10 h-10 rounded-full"
        />
      </div>
    </header>
  );
}

export default Header;
