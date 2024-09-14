import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchHeroCards } from "../../store/heroSlice";

function HeroSection() {
  const dispatch = useDispatch();

  // Redux store'daki hero kartlarını al
  const heroCards = useSelector((state) => state.hero.heroCards);
  const heroStatus = useSelector((state) => state.hero.status);

  useEffect(() => {
    if (heroStatus === "idle") {
      dispatch(fetchHeroCards());
    }
  }, [heroStatus, dispatch]);

  useEffect(() => {
    console.log(heroCards); // Veriyi kontrol etmek için ekledik
  }, [heroCards]);

  // Sabit button ve renk ayarları
  const staticHeroCardStyles = [
    {
      bgColor: "bg-blue-400",
      buttonBgColor: "bg-blue-500",
      buttonBorderColor: "border-blue-600",
      buttonText: "Rental Car",
    },
    {
      bgColor: "bg-blue-600",
      buttonBgColor: "bg-blue-700",
      buttonBorderColor: "border-blue-800",
      buttonText: "Rental Car",
    },
  ];

  // Veri yüklenirken bir yükleme ekranı göster
  if (heroStatus === "loading") {
    return <div>Loading...</div>;
  }

  // Verinin mevcut olup olmadığını kontrol et
  if (!heroCards || heroCards.length === 0) {
    return <div>No hero cards available</div>;
  }

  return (
    <section className="bg-gray-100 py-8 px-4 sm:px-8 lg:px-16">
      <div className="flex flex-col items-center sm:flex-row sm:justify-center space-y-4 sm:space-y-0 sm:space-x-2">
        {heroCards.map((card, index) => (
          <div
            key={index}
            className={`${
              staticHeroCardStyles[index]?.bgColor || "bg-gray-200"
            } text-white p-6 rounded-lg flex flex-col justify-between relative w-full sm:w-3/5 h-96 ${
              index === 1 ? "hidden sm:block" : ""
            }`}
          >
            <div className="text-left w-full sm:max-w-[50%]">
              <h2 className="text-2xl font-bold mb-2">
                {card.attributes?.Title || "No Title"}{" "}
                {/* Büyük harfli "Title" */}
              </h2>
              <p className="mb-4">
                {card.attributes?.Description || "No Description"}{" "}
                {/* Büyük harfli "Description" */}
              </p>
              <button
                className={`${
                  staticHeroCardStyles[index]?.buttonBgColor || "bg-gray-400"
                } text-white py-2 px-4 rounded-full font-semibold ${
                  staticHeroCardStyles[index]?.buttonBorderColor ||
                  "border-gray-500"
                } hover:bg-blue-800 transition duration-200`}
              >
                {staticHeroCardStyles[index]?.buttonText || "No Button Text"}
              </button>
            </div>
            <img
              src={`http://localhost:1337${
                card.attributes?.Image?.data?.[0]?.attributes?.url ||
                "/default.png"
              }`}
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
