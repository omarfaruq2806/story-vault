import { getStory } from "@/services/storyServices";
import Image from "next/image";

const Page = async ({ params }: { params: Promise<{ storyId: string }> }) => {
  const { storyId } = await params;
  const story = await getStory(storyId);

  if (!story) {
    return <div className="min-h-screen text-center py-20 text-white">Story not found.</div>;
  }

  return (
    <div className="min-h-screen bg-[#061e29] text-[#bae6fd] py-12 px-6">
      <div className="max-w-4xl mx-auto space-y-10">
        
        {/* Header Section with Image */}
        <header className="space-y-6">
          <div className="relative w-full h-[400px] rounded-3xl overflow-hidden shadow-2xl border border-[#06b6d4]/20">
            <Image 
              src={story.imageUrl || "/window.svg"} 
              alt={story.title}
              fill
              className="object-cover"
            />
          </div>
          <h1 className="text-5xl font-bold text-white tracking-tight">{story.title}</h1>
        </header>

        {/* Reviews Section */}
        <section className="border-t border-[#06b6d4]/20 pt-10">
          <h2 className="text-2xl font-semibold text-white mb-6">Reviews</h2>
          <div className="bg-[#083344]/50 p-6 rounded-2xl border border-dashed border-[#06b6d4]/20 text-center text-[#bae6fd]/50 italic">
            No reviews yet. Be the first to share your thoughts!
          </div>
        </section>

        
        {/* Specifications Section */}
        <section className="bg-[#083344] p-8 rounded-3xl border border-[#06b6d4]/20">
          <h2 className="text-2xl font-semibold text-white mb-6">Story Details</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="p-4 bg-[#061e29] rounded-xl border border-[#06b6d4]/10">
              <span className="block text-[#bae6fd]/50 text-sm">Price</span>
              <span className="text-xl font-bold text-[#22d3ee]">${story.price}</span>
            </div>
            <div className="p-4 bg-[#061e29] rounded-xl border border-[#06b6d4]/10">
              <span className="block text-[#bae6fd]/50 text-sm">Priority</span>
              <span className="text-xl font-bold text-white capitalize">{story.priority}</span>
            </div>
            <div className="p-4 bg-[#061e29] rounded-xl border border-[#06b6d4]/10">
              <span className="block text-[#bae6fd]/50 text-sm">Category</span>
              <span className="text-xl font-bold text-white capitalize">{story.category}</span>
            </div>
          </div>
        </section>

        

        {/* Overview Section - Optimized for long text */}
        <section className="bg-[#083344] p-8 rounded-3xl border border-[#06b6d4]/20">
          <h2 className="text-2xl font-semibold text-white mb-6">Description</h2>
          <div className="prose prose-invert prose-lg max-w-none text-[#bae6fd]/80 leading-relaxed">
            {story.fullDescription}
          </div>
        </section>


      </div>
    </div>
  );
};

export default Page;