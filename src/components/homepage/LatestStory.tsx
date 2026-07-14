import { getStories } from "@/services/storyServices";
import { Story } from "@/types/story";
import Link from "next/link";

export const LatestStory = async() => {
  const stories = await getStories('', '', true);
  const latest: Story[] = stories.slice(0, 3);
  return (
    <section className="py-20 px-6 max-w-7xl mx-auto">
      <div className="flex justify-between items-end mb-12">
        <h2 className="text-4xl font-bold text-gray-900">Latest Now</h2>
        <Link
          href="/stories"
          className="text-indigo-600 font-semibold hover:underline"
        >
          View All Stories →
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {latest.map((story) => (
          <div
            key={story._id}
            className="group bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300"
          >
            <div className="h-48 bg-gray-100 rounded-xl mb-6 group-hover:scale-[1.02] transition-transform duration-300"></div>
            <h3 className="text-xl font-bold mb-2 text-gray-800">
              {story.title}
            </h3>
            <p className="text-sm text-indigo-500 font-medium mb-3">
              By {story.title}
            </p>
            <p className="text-gray-600 mb-6 text-sm">{story.excerpt}\\\\</p>
            <Link
              href={`/stories/${story._id}`}
              className="text-indigo-600 font-semibold hover:underline"
            >
              Read More →
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};
