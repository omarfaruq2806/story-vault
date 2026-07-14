import Link from "next/link";

export const Categories = () => {
  const categories = [
    { name: "Fiction", icon: "🔍" , href:'fiction' },
    { name: "Sci-Fi", icon: "🚀" , href:'sci-fi' },
    { name: "Non-Fiction", icon: "❤️" , href:'non-fiction' },
    { name: "Mystery", icon: "🕵️" , href:'mystery' },
    { name: "Biography", icon: "👤" , href:'biography' },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-10 text-center">Explore by Genres</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {categories.map((cat) => (
            <Link href={`/stories?category=${cat.href}`} key={cat.name} className="flex flex-col items-center p-6 border rounded-2xl hover:border-indigo-500 hover:bg-indigo-50 cursor-pointer transition-all">
              <span className="text-4xl mb-4">{cat.icon}</span>
              <span className="font-semibold text-gray-700">{cat.name}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};