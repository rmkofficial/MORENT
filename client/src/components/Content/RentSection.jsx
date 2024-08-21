function RentSection() {
  return (
    <section className="bg-gray-100 py-8 px-4 sm:px-8 lg:px-16">
      <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-4">
        {/* Pick-Up Bilgileri */}
        <div className="bg-white p-6 rounded-lg shadow-md w-full md:w-1/2">
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
        <div className="flex justify-center items-center my-4 md:my-0">
          <button className="bg-blue-500 text-white p-4 rounded-full shadow-lg transform md:rotate-0 rotate-90">
            <span className="material-icons">swap_vert</span>
          </button>
        </div>

        {/* Drop-Off Bilgileri */}
        <div className="bg-white p-6 rounded-lg shadow-md w-full md:w-1/2">
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
    </section>
  );
}

export default RentSection;
