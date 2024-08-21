import carsData from "../../data/carsData.json";

function RecommendationCarsSection() {
  const cars = carsData.recommendedCars || [];

  return (
    <section className="bg-gray-100 py-8 px-4 sm:px-8 lg:px-16">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold text-gray-800">Recommendation Car</h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {cars.map((car, index) => (
          <div key={index} className="bg-white p-4 rounded-lg shadow-md">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold text-gray-800">
                {car.name}
              </h3>
              <span className="material-icons text-red-500">
                {car.isFavorite ? "favorite" : "favorite_border"}
              </span>
            </div>
            <div className="flex justify-center">
              <img
                src={car.image}
                alt={car.name}
                className="w-64 h-32 object-contain mb-4"
              />
            </div>
            <div className="text-gray-500 mb-4">{car.type}</div>
            <div className="flex justify-between items-center mb-2 text-gray-500 text-sm">
              <div className="flex items-center">
                <i className="material-icons mr-1">local_gas_station</i>
                <span>{car.fuel}</span>
              </div>
              <div className="flex items-center">
                <i className="material-icons mr-1">drive_eta</i>
                <span>{car.transmission}</span>
              </div>
              <div className="flex items-center">
                <i className="material-icons mr-1">person</i>
                <span>{car.capacity}</span>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <div>
                <span className="text-lg font-bold text-gray-800">
                  {car.price}
                </span>
                {car.oldPrice && (
                  <span className="text-sm text-gray-500 line-through ml-2">
                    {car.oldPrice}
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

export default RecommendationCarsSection;
