
export const Hero = () => {
  return (
    <section className="h-[70vh] flex flex-col justify-center items-center bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-4">
      <h1 className="text-5xl md:text-7xl font-bold mb-6 text-center">
        Unleash Your Inner Storyteller
      </h1>
      <p className="text-xl mb-8 opacity-90 max-w-2xl text-center">
        Join a vibrant community of writers and readers. Your next great story
        starts here.
      </p>
      <div className="flex gap-4">
        <button className="bg-white text-indigo-600 px-8 py-3 rounded-full font-semibold hover:scale-105 transition-all">
          Start Reading
        </button>
        <button className="border-2 border-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-indigo-600 transition-all">
          Write a Story
        </button>
      </div>

      {/* Visual indicator for next section */}
      <div className="absolute bottom-10 animate-bounce">
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </div>
    </section>
  );
};
