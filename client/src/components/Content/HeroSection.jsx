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

  // Skeleton yükleme yapısı
  const renderSkeletons = () => {
    return (
      <div className="flex flex-col items-center sm:flex-row sm:justify-center space-y-4 sm:space-y-0 sm:space-x-2">
        {Array(2)
          .fill(0)
          .map((_, index) => (
            <div
              key={index}
              className="bg-gray-200 animate-pulse p-6 rounded-lg w-full sm:w-3/5 h-96"
            >
              <div className="w-full h-8 bg-gray-300 rounded mb-4"></div>
              <div className="w-full h-4 bg-gray-300 rounded mb-2"></div>
              <div className="w-full h-4 bg-gray-300 rounded mb-4"></div>
              <div className="w-24 h-8 bg-gray-300 rounded-full"></div>
              <div className="w-48 sm:w-96 h-32 bg-gray-300 rounded-lg mt-6"></div>
            </div>
          ))}
      </div>
    );
  };

  // Veri yüklenirken skeleton göster
  if (heroStatus === "loading") {
    return (
      <section className="bg-gray-100 py-8 px-4 sm:px-8 lg:px-16">
        {renderSkeletons()}
      </section>
    );
  }

  // Verinin mevcut olup olmadığını kontrol et
  if (!heroCards || heroCards.length === 0) {
    return (
      <section className="bg-gray-100 py-8 px-4 sm:px-8 lg:px-16">
        {renderSkeletons()}
      </section>
    );
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
              </h2>
              <p className="mb-4">
                {card.attributes?.Description || "No Description"}{" "}
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
