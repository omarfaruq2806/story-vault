// src/components/Newsletter.tsx
export const Newsletter = () => {
  return (
    <section className="py-20 bg-indigo-50 px-6 text-center">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-3xl font-bold mb-4">Get the best stories delivered</h2>
        <p className="text-gray-600 mb-8">Join 5,000+ readers and get our weekly digest in your inbox.</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <input 
            type="email" 
            placeholder="Enter your email" 
            className="px-6 py-3 rounded-full border border-gray-300 w-full sm:w-80 outline-none"
          />
          <button className="bg-indigo-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-indigo-700 transition">
            Subscribe
          </button>
        </div>
      </div>
    </section>
  );
};