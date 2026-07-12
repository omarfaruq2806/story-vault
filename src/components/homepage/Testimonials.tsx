// src/components/Testimonials.tsx
export const Testimonials = () => {
  const reviews = [
    { name: "Rafiq", text: "This platform changed how I share my stories. Love the interface!" },
    { name: "Anika", text: "Found so many hidden gems here. A must-visit for readers." },
    { name: "Tanvir", text: "The community is super supportive and welcoming to new writers." },
  ];

  return (
    <section className="py-16 bg-gray-50 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">What Our Community Says</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <p className="text-gray-600 italic mb-6">"{review.text}"</p>
              <div className="font-bold text-gray-900">- {review.name}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};