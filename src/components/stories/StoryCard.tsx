
import { Story } from "@/types/story";
import Link from "next/link";


const StoryCard = ({story}: {story: Story}) => {
    return (
        <div className="border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow bg-white ">
      <h1 className="text-xl font-bold text-gray-900 mb-2">{story.title}</h1>
      <p className="text-gray-600 mb-4">{story.shortDescription}</p>
      
      <div className="flex justify-between items-center text-sm text-gray-500">
        <span>Price: ${story.price}</span>
        <span className="capitalize font-medium text-indigo-600">{story.priority} Priority</span>
        <Link href={`/stories/${story._id}`}><button className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-full font-semibold hover:scale-105 transition-all">View Story</button></Link>
      </div>
    </div>
    )
};

export default StoryCard;