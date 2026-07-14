export const Testimonials = () => {
  const reviews = [
    { name: "Rafiq", text: "This platform changed how I share my stories. Love the interface!" },
    { name: "Anika", text: "Found so many hidden gems here. A must-visit for readers." },
    { name: "Tanvir", text: "The community is super supportive and welcoming to new writers." },
  ];

  return (
    <section className="py-20 bg-[#f0f9fb] px-6 ">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-[#083344] text-center mb-16">
          What Our Community Says
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-2xl border border-[#06b6d4]/20 shadow-xl shadow-cyan-900/5 hover:border-[#06b6d4]/40 transition-all"
            >
              <p className="text-[#083344]/70 italic mb-8 leading-relaxed">
                "{review.text}"
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-[#06b6d4] flex items-center justify-center text-white font-bold mr-4">
                  {review.name[0]}
                </div>
                <div className="font-bold text-[#083344]">- {review.name}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};