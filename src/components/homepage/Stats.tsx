export const Stats = () => {
  const stats = [
    { label: "Stories Published", value: "10K+" },
    { label: "Active Writers", value: "5K+" },
    { label: "Happy Readers", value: "50K+" },
    { label: "Community Rating", value: "4.8/5" },
  ];

  return (
    <section className="py-20 bg-[#083344] border-y border-[#06b6d4]/20">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-12">
        {stats.map((stat, index) => (
          <div key={index} className="flex flex-col items-center">
            <h3 className="text-4xl md:text-5xl font-extrabold text-white mb-2 tracking-tight">
              {stat.value}
            </h3>
            <p className="text-[#bae6fd]/80 font-medium tracking-wide">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};