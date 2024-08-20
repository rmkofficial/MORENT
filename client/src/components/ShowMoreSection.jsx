function ShowMoreSection() {
  return (
    <section className="bg-gray-100 py-8 px-4 sm:px-8 lg:px-16">
      <div className="flex justify-center items-center relative">
        <button className="bg-blue-500 text-white py-2 px-6 rounded-full font-semibold">
          Show more car
        </button>
        <span className="absolute right-0 text-gray-500">120 Car</span>
      </div>
    </section>
  );
}

export default ShowMoreSection;
