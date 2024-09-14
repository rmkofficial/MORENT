import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchPopularCars } from "../../store/popularCarsSlice";

function PopularCarsSection() {
  const dispatch = useDispatch();
  const cars = useSelector((state) => state.popularCars.popularCars);
  const status = useSelector((state) => state.popularCars.status);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchPopularCars());
    }
  }, [status, dispatch]);

  // Skeleton Loader fonksiyonu
  const renderSkeletons = () => {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {Array(4)
          .fill(0)
          .map((_, index) => (
            <div
              key={index}
              className="bg-gray-200 animate-pulse p-4 rounded-lg shadow-md"
            >
              <div className="flex justify-between items-center mb-4">
                <div className="w-24 h-6 bg-gray-300 rounded"></div>
                <div className="w-6 h-6 bg-gray-300 rounded-full"></div>
              </div>
              <div className="flex justify-center mb-4">
                <div className="w-64 h-32 bg-gray-300 rounded"></div>
              </div>
              <div className="w-32 h-4 bg-gray-300 rounded mb-4"></div>
              <div className="flex justify-between items-center mb-2 text-gray-500 text-sm">
                <div className="w-12 h-4 bg-gray-300 rounded"></div>
                <div className="w-12 h-4 bg-gray-300 rounded"></div>
                <div className="w-12 h-4 bg-gray-300 rounded"></div>
              </div>
              <div className="flex justify-between items-center">
                <div className="w-24 h-6 bg-gray-300 rounded"></div>
                <div className="w-16 h-8 bg-gray-300 rounded-full"></div>
              </div>
            </div>
          ))}
      </div>
    );
  };

  if (status === "loading") {
    return (
      <section className="bg-gray-100 py-8 px-4 sm:px-8 lg:px-16">
        {renderSkeletons()}
      </section>
    );
  }

  if (status === "failed") {
    return (
      <section className="bg-gray-100 py-8 px-4 sm:px-8 lg:px-16">
        {renderSkeletons()}
      </section>
    );
  }

  return (
    <section className="bg-gray-100 py-8 px-4 sm:px-8 lg:px-16">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold text-gray-800">Popular Cars</h2>
        <a href="#" className="text-blue-500 font-semibold">
          View All
        </a>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {cars.map((car, index) => (
          <div key={index} className="bg-white p-4 rounded-lg shadow-md">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold text-gray-800">
                {car.attributes.Name}
              </h3>
              <span className="material-icons text-red-500">
                {car.attributes.IsFavorite ? "favorite" : "favorite_border"}
              </span>
            </div>
            <div className="flex justify-center">
              <img
                src={`http://localhost:1337${car.attributes.Image?.data?.[0]?.attributes?.url}`}
                alt={car.attributes.Name}
                className="w-64 h-32 object-contain mb-4"
              />
            </div>
            <div className="text-gray-500 mb-4">{car.attributes.Type} </div>
            <div className="flex justify-between items-center mb-2 text-gray-500 text-sm">
              <div className="flex items-center">
                <i className="material-icons mr-1">local_gas_station</i>
                <span>{car.attributes.Fuel} </span>
              </div>
              <div className="flex items-center">
                <i className="material-icons mr-1">drive_eta</i>
                <span>{car.attributes.Transmission} </span>
              </div>
              <div className="flex items-center">
                <i className="material-icons mr-1">people</i>
                <span>{car.attributes.Capacity} People</span>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <div>
                <span className="text-lg font-bold text-gray-800">
                  ${car.attributes.Price}.00/day
                </span>
                {car.attributes.Discount && (
                  <span className="text-sm text-gray-500 line-through ml-2">
                    ${car.attributes.Discount}.00
                  </span>
                )}
              </div>
              <button className="bg-blue-500 text-white py-2 px-4 rounded-full font-semibold">
                Rent Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default PopularCarsSection;
