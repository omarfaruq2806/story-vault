import { getStories } from "@/services/storyServices";
import { Story } from "@/types/story";
import Link from "next/link";
import Image from "next/image";

export const LatestStory = async () => {
  let stories: Story[] = [];

  try {
    const data = await getStories('', '', true);
    stories = Array.isArray(data) ? data : [];
  } catch (error) {
    console.error("LatestStory fetch error:", error);
    stories = []; 
  }

  if (stories.length === 0) return null;

  const latest: Story[] = stories.slice(0, 3);

  return (
    <section className="py-20 px-6 bg-[#061e29]">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-12">
          <h2 className="text-4xl font-bold text-white">Latest Now</h2>
          <Link
            href="/stories"
            className="text-[#22d3ee] font-semibold hover:underline"
          >
            View All Stories →
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {latest.map((story) => (
            <div
              key={story._id}
              className="flex flex-col h-full bg-[#083344] border border-[#06b6d4]/20 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:border-[#06b6d4]/40 transition-all duration-300"
            >
              <div className="relative h-48 w-full overflow-hidden bg-[#061e29]/50">
                <Image
                  src={story.imageUrl || "/window.svg"}
                  alt={story.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3">
                  <span className="px-3 py-1 bg-[#061e29]/80 backdrop-blur-md text-[#22d3ee] text-xs font-bold rounded-full capitalize border border-[#06b6d4]/30">
                    {story.priority} Priority
                  </span>
                </div>
              </div>
              
              <div className="p-5 flex flex-col flex-grow">
                <h3 className="text-xl font-bold mb-2 text-white line-clamp-1">
                  {story.title}
                </h3>
                <p className="text-[#bae6fd]/70 text-sm mb-4 line-clamp-2 flex-grow">
                  {story.shortDescription}
                </p>
                
                <div className="text-sm font-medium text-[#22d3ee] mb-4">
                  Price: ${story.price}
                </div>

                <Link
                  href={`/stories/${story._id}`}
                  className="w-full text-center bg-[#061e29] border border-[#06b6d4]/30 text-[#bae6fd] py-2.5 rounded-lg text-sm font-semibold hover:bg-[#06b6d4] hover:text-[#083344] transition-all"
                >
                  Read More →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};