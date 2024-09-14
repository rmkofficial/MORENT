function RentSection() {
  return (
    <section className="bg-gray-100 py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row justify-center items-center space-y-4 lg:space-y-0 lg:space-x-4">
            {/* Pick-Up Bilgileri */}
            <div className="bg-white p-6 rounded-lg shadow-md w-full lg:w-1/2">
              <div className="flex items-center mb-4">
                <input
                  type="radio"
                  name="pickup"
                  id="pickup"
                  className="mr-2"
                  defaultChecked
                />
                <label htmlFor="pickup" className="text-blue-500 font-semibold">
                  Pick – Up
                </label>
              </div>
              <div className="flex justify-between items-center space-x-4">
                {/* Locations */}
                <div className="flex flex-col w-1/3">
                  <label className="font-semibold text-black mb-1">Locations</label>
                  <div className="relative">
                    <select className="appearance-none bg-transparent border-none text-gray-500 focus:outline-none w-full">
                      <option>City</option>
                    </select>
                    <span className="absolute right-0 top-0 bottom-0 flex items-center pr-2">
                      <i className="material-icons">expand_more</i>
                    </span>
                  </div>
                </div>

                {/* Date */}
                <div className="flex flex-col w-1/3">
                  <label className="font-semibold text-black mb-1">Date</label>
                  <div className="relative">
                    <input
                      type="date"
                      className="appearance-none bg-transparent border-none text-gray-500 focus:outline-none w-full"
                    />
                  </div>
                </div>

                {/* Time */}
                <div className="flex flex-col w-1/3">
                  <label className="font-semibold text-black mb-1">Time</label>
                  <div className="relative">
                    <input
                      type="time"
                      className="appearance-none bg-transparent border-none text-gray-500 focus:outline-none w-full"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Arrows */}
            <div className="flex justify-center items-center my-4 lg:my-0">
              <button className="bg-blue-500 text-white p-4 rounded-lg shadow-lg transform lg:rotate-0 rotate-90 hover:bg-blue-600 transition-all duration-200 w-16 h-16 flex items-center justify-center">
                <span className="material-icons">swap_vert</span>
              </button>
            </div>

            {/* Drop-Off Bilgileri */}
            <div className="bg-white p-6 rounded-lg shadow-md w-full lg:w-1/2">
              <div className="flex items-center mb-4">
                <input type="radio" name="dropoff" id="dropoff" className="mr-2" />
                <label htmlFor="dropoff" className="text-blue-500 font-semibold">
                  Drop – Off
                </label>
              </div>
              <div className="flex justify-between items-center space-x-4">
                {/* Locations */}
                <div className="flex flex-col w-1/3">
                  <label className="font-semibold text-black mb-1">Locations</label>
                  <div className="relative">
                    <select className="appearance-none bg-transparent border-none text-gray-500 focus:outline-none w-full">
                      <option>City</option>
                    </select>
                    <span className="absolute right-0 top-0 bottom-0 flex items-center pr-2">
                      <i className="material-icons">expand_more</i>
                    </span>
                  </div>
                </div>

                {/* Date */}
                <div className="flex flex-col w-1/3">
                  <label className="font-semibold text-black mb-1">Date</label>
                  <div className="relative">
                    <input
                      type="date"
                      className="appearance-none bg-transparent border-none text-gray-500 focus:outline-none w-full"
                    />
                  </div>
                </div>

                {/* Time */}
                <div className="flex flex-col w-1/3">
                  <label className="font-semibold text-black mb-1">Time</label>
                  <div className="relative">
                    <input
                      type="time"
                      className="appearance-none bg-transparent border-none text-gray-500 focus:outline-none w-full"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default RentSection;
