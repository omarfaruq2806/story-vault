// src/components/WriteCTA.tsx
export const WriteCTA = () => {
  return (
    <section className="py-20 bg-gray-900 text-white text-center px-6">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl font-bold mb-6">Have a story to tell?</h2>
        <p className="text-lg text-gray-300 mb-10">
          Join thousands of writers and share your imagination with the world.
          Start your journey today and get discovered.
        </p>
        <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-10 py-4 rounded-full font-bold text-lg transition-all transform hover:scale-105">
          Start Writing Now
        </button>
      </div>
    </section>
  );
};
