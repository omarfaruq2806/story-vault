
export const TrendingStory = () => {
  const trending = [
    {
      id: 1,
      title: "The Silent Forest",
      author: "Rahim Ahmed",
      excerpt: "A journey into the unknown...",
    },
    {
      id: 2,
      title: "Neon Nights",
      author: "Sara Khan",
      excerpt: "Cyberpunk city secrets...",
    },
    {
      id: 3,
      title: "Lost in Time",
      author: "Jafar Iqbal",
      excerpt: "A story about yesterday...",
    },
  ];

  return (
    <section className="py-20 px-6 max-w-7xl mx-auto">
      <div className="flex justify-between items-end mb-12">
        <h2 className="text-4xl font-bold text-gray-900">Trending Now</h2>
        <a
          href="/stories"
          className="text-indigo-600 font-semibold hover:underline"
        >
          View All Stories →
        </a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {trending.map((story) => (
          <div
            key={story.id}
            className="group bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300"
          >
            <div className="h-48 bg-gray-100 rounded-xl mb-6 group-hover:scale-[1.02] transition-transform duration-300"></div>
            <h3 className="text-xl font-bold mb-2 text-gray-800">
              {story.title}
            </h3>
            <p className="text-sm text-indigo-500 font-medium mb-3">
              By {story.author}
            </p>
            <p className="text-gray-600 mb-6 text-sm">{story.excerpt}</p>
            <button className="w-full py-2 border border-indigo-600 text-indigo-600 rounded-lg hover:bg-indigo-600 hover:text-white transition-colors">
              Read Story
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};
