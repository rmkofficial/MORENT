function HeroSection() {
  const heroCards = [
    {
      title: "The Best Platform for Car Rental",
      description:
        "Ease of doing car rental safely and reliably. Of course at a low price.",
      buttonText: "Rental Car",
      bgColor: "bg-blue-400",
      buttonBgColor: "bg-blue-500",
      buttonBorderColor: "border-blue-600",
      image: "/assets/car1.png",
    },
    {
      title: "Easy way to rent a car at a low price",
      description:
        "Providing cheap car rental services and safe and comfortable facilities.",
      buttonText: "Rental Car",
      bgColor: "bg-blue-600",
      buttonBgColor: "bg-blue-700",
      buttonBorderColor: "border-blue-800",
      image: "/assets/car2.png",
    },
  ];

  return (
    <section className="bg-gray-100 py-8 px-4 sm:px-8 lg:px-16">
      <div className="flex flex-col items-center sm:flex-row sm:justify-center space-y-4 sm:space-y-0 sm:space-x-2">
        {heroCards.map((card, index) => (
          <div
            key={index}
            className={`${
              card.bgColor
            } text-white p-6 rounded-lg flex flex-col justify-between relative w-full sm:w-3/5 h-96 ${
              index === 1 ? "hidden sm:block" : ""
            }`}
          >
            <div className="text-left w-full sm:max-w-[50%]">
              <h2 className="text-2xl font-bold mb-2">{card.title}</h2>
              <p className="mb-4">{card.description}</p>
              <button
                className={`${card.buttonBgColor} text-white py-2 px-4 rounded-full font-semibold ${card.buttonBorderColor} hover:bg-blue-800 hover:bg-blue-800 transition duration-200`}
              >
                {card.buttonText}
              </button>
            </div>
            <img
              src={card.image}
              alt={`Car ${index + 1}`}
              className="absolute bottom-6 left-1/2 transform -translate-x-1/2 w-48 sm:w-96 h-auto"
            />
          </div>
        ))}
      </div>
    </section>
  );
}

export default HeroSection;
