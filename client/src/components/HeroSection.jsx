import car1 from "../assets/car1.png";
import car2 from "../assets/car2.png";

function HeroSection() {
  return (
    <section className="bg-gray-100 py-8 px-4 sm:px-8 lg:px-16">
      <div className="flex flex-col items-center sm:flex-row sm:justify-center space-y-4 sm:space-y-0 sm:space-x-2">
        {/* Kart 1 */}
        <div className="bg-blue-600 text-white p-6 rounded-lg flex flex-col justify-between relative w-full sm:w-3/5 h-96">
          <div className="text-left max-w-[50%]">
            <h2 className="text-2xl font-bold mb-2">
              The Best Platform for Car Rental
            </h2>
            <p className="mb-4">
              Ease of doing car rental safely and reliably. Of course at a low
              price.
            </p>
            <button className="bg-blue-500 text-white py-2 px-4 rounded-full font-semibold border border-blue-600">
              Rental Car
            </button>
          </div>
          <img
            src={car1}
            alt="Car 1"
            className="absolute bottom-6 left-1/2 transform -translate-x-1/2 w-96 h-auto"
          />
        </div>
        {/* Kart 2 */}
        <div className="bg-blue-500 text-white p-6 rounded-lg flex flex-col justify-between relative w-full sm:w-3/5 h-96">
          <div className="text-left max-w-[50%]">
            <h2 className="text-2xl font-bold mb-2">
              Easy way to rent a car at a low price
            </h2>
            <p className="mb-4">
              Providing cheap car rental services and safe and comfortable
              facilities.
            </p>
            <button className="bg-blue-600 text-white py-2 px-4 rounded-full font-semibold border border-blue-500">
              Rental Car
            </button>
          </div>
          <img
            src={car2}
            alt="Car 2"
            className="absolute bottom-6 left-1/2 transform -translate-x-1/2 w-96 h-auto"
          />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
