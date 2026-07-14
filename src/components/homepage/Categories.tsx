"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export const Categories = () => {
  const categories = [
    { name: "Fiction", icon: "📚", href: "fiction" },
    { name: "Sci-Fi", icon: "🚀", href: "sci-fi" },
    { name: "Non-Fiction", icon: "🧠", href: "non-fiction" },
    { name: "Mystery", icon: "🕵️", href: "mystery" },
    { name: "Biography", icon: "👤", href: "biography" },
    { name: "Fantasy", icon: "✨", href: "fantasy" },
  ];

  return (
    // ব্যাকগ্রাউন্ড গাঢ় সায়ান টোনে আপডেট করা হয়েছে
    <section className="py-20 bg-[#061e29] border-y border-[#06b6d4]/10">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-white text-center mb-16">
          Explore by Genres
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {categories.map((cat, index) => (
            <motion.div
              key={cat.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Link 
                href={`/stories?category=${cat.href}`} 
                // কার্ডের ব্যাকগ্রাউন্ড এবং হোভার ইফেক্ট ডার্ক মোডের সাথে ম্যাচ করা হয়েছে
                className="flex flex-col items-center p-8 rounded-3xl border border-[#06b6d4]/10 bg-[#083344] hover:bg-[#06b6d4]/20 hover:border-[#06b6d4]/40 transition-all group"
              >
                <span className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {cat.icon}
                </span>
                <span className="font-semibold text-[#bae6fd] group-hover:text-white">
                  {cat.name}
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};