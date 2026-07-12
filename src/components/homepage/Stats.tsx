export const Stats = () => {
  return (
    <section className="py-16 bg-indigo-900 text-white">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        <div>
          <h3 className="text-4xl font-bold">10K+</h3>
          <p className="text-indigo-200">Stories Published</p>
        </div>
        <div>
          <h3 className="text-4xl font-bold">5K+</h3>
          <p className="text-indigo-200">Active Writers</p>
        </div>
        <div>
          <h3 className="text-4xl font-bold">50K+</h3>
          <p className="text-indigo-200">Happy Readers</p>
        </div>
        <div>
          <h3 className="text-4xl font-bold">4.8/5</h3>
          <p className="text-indigo-200">Community Rating</p>
        </div>
      </div>
    </section>
  );
};
