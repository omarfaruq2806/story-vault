import { getStory } from "@/services/storyServices";


const page = async ({ params }) => {
  const { storyId } = await params;
  const story = await getStory(storyId);
  console.log(story);
  return (
    <div className="max-w-5xl mx-auto p-6 space-y-10">
      
      {/* Header Section */}
      <header>
        <h1 className="text-4xl font-bold text-gray-900">{story.title}</h1>
      </header>

      {/* Description / Overview Section */}
      <section>
        <h2 className="text-2xl font-semibold mb-3">Overview</h2>
        <p className="text-gray-700 leading-relaxed">{story.fullDescription}</p>
      </section>

      {/* Key Information / Specifications */}
      <section className="bg-gray-50 p-6 rounded-lg border">
        <h2 className="text-2xl font-semibold mb-4">Specifications</h2>
        <ul className="grid grid-cols-2 gap-4">
          <li><strong>Price:</strong> ${story.price}</li>
          <li><strong>Priority:</strong> <span className="capitalize">{story.priority}</span></li>
        </ul>
      </section>

      {/* Reviews / Ratings (Placeholder) */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Reviews</h2>
        <div className="text-gray-500 italic">No reviews yet.</div>
      </section>

      {/* Related Items (Placeholder) */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Related Stories</h2>
        <div className="text-gray-500 italic">Check back later for related stories.</div>
      </section>
      
    </div>
  );
};

export default page;
