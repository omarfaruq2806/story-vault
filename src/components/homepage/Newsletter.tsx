export const Newsletter = () => {
  return (
    <section className="py-20 bg-[#f0f9fb] px-6 text-center border-y border-[#06b6d4]/20">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-4xl font-bold text-[#083344] mb-4">
          Get the best stories delivered
        </h2>
        <p className="text-[#083344]/70 mb-8 text-lg">
          Join 5,000+ readers and get our weekly digest in your inbox.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <input 
            type="email" 
            placeholder="Enter your email" 
            className="px-6 py-3 rounded-lg border border-[#06b6d4]/30 bg-white w-full sm:w-80 outline-none focus:border-[#06b6d4] transition-all"
          />
          <button className="bg-[#06b6d4] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#0891b2] transition-all shadow-lg shadow-cyan-900/20">
            Subscribe
          </button>
        </div>
      </div>
    </section>
  );
};