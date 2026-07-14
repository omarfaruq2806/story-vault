import Link from "next/link";

export const WriteCTA = () => {
  return (
    <section className="py-24 px-6 relative overflow-hidden bg-[#083344]">
      {/* ব্যাকগ্রাউন্ডে একটি মৃদু গ্লো ইফেক্ট */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_var(--tw-gradient-stops))] from-[#06b6d4]/10 via-[#083344] to-[#083344]"></div>
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h2 className="text-5xl md:text-6xl font-bold text-white mb-8 tracking-tight">
          Have a story to tell?
        </h2>
        
        <p className="text-xl md:text-2xl text-[#bae6fd] mb-12 max-w-2xl mx-auto font-light leading-relaxed">
          Your imagination deserves an audience. Join thousands of creators on 
          <span className="text-[#22d3ee] font-semibold"> StoryVault</span> and turn your inspiration into a masterpiece today.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link 
            href="/write" 
            className="bg-[#22d3ee] hover:bg-[#06b6d4] text-[#083344] px-10 py-4 rounded-lg font-bold text-lg transition-all transform hover:scale-105 shadow-[0_0_20px_rgba(34,211,238,0.3)]"
          >
            Start Writing Now
          </Link>
          <Link 
            href="/stories" 
            className="border-2 border-[#22d3ee] text-[#22d3ee] px-10 py-4 rounded-lg font-bold text-lg hover:bg-[#22d3ee]/10 transition-all"
          >
            Read Stories
          </Link>
        </div>
      </div>
    </section>
  );
};