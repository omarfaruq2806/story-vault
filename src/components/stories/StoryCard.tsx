import { Story } from "@/types/story";
import Link from "next/link";
import Image from "next/image";

const StoryCard = ({ story }: { story: Story }) => {
  return (
    <div className="flex flex-col h-full bg-[#083344] border border-[#06b6d4]/20 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:border-[#06b6d4]/40 transition-all duration-300">
      {/* ডাইনামিক ইমেজ সেকশন */}
      <div className="relative h-48 w-full overflow-hidden bg-[#061e29]/50">
        <Image 
          src={story.imageUrl || "/window.svg"} 
          alt={story.title}
          fill
          className="object-cover transition-transform duration-500 hover:scale-110"
        />
        {/* প্রায়োরিটি ট্যাগ - ডার্ক থিম ফ্রেন্ডলি */}
        <div className="absolute top-3 left-3">
          <span className="px-3 py-1 bg-[#061e29]/80 backdrop-blur-md text-[#22d3ee] text-xs font-bold rounded-full capitalize border border-[#06b6d4]/30">
            {story.priority} Priority
          </span>
        </div>
      </div>

      {/* কন্টেন্ট সেকশন */}
      <div className="p-5 flex flex-col flex-grow">
        <h3 className="text-lg font-bold text-white mb-2 line-clamp-1">{story.title}</h3>
        <p className="text-sm text-[#bae6fd]/70 mb-4 line-clamp-2 flex-grow">
          {story.shortDescription}
        </p>

        <div className="space-y-2 mb-5">
          <div className="flex justify-between text-xs font-medium text-[#bae6fd]">
            <span>Price:</span>
            <span className="text-[#22d3ee] font-bold">${story.price}</span>
          </div>
        </div>

        {/* ভিউ বাটন */}
        <Link href={`/stories/${story._id}`} className="mt-auto">
          <button className="w-full bg-[#061e29] border border-[#06b6d4]/30 hover:bg-[#06b6d4] text-white hover:text-[#083344] py-2.5 rounded-lg font-semibold transition-all">
            View Details
          </button>
        </Link>
      </div>
    </div>
  );
};

export default StoryCard;