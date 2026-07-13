"use client";

import { deleteStory } from '@/services/storyServices';
import { Story } from '@/types/story';
import Link from 'next/link';

const MyStoryCard = ({ story }: { story: Story }) => {
    
    const handleDelete = async () => {
        const res = await deleteStory(story._id);
        console.log(res);
    };


    return (
        <div className="border border-gray-200 rounded-xl p-5 shadow-sm hover:shadow-lg transition-all bg-white flex flex-col justify-between">
            <div>
                <h2 className="text-xl font-bold text-gray-900 mb-2">{story.title}</h2>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">{story.shortDescription}</p>
                <div className="text-sm font-medium text-indigo-600 mb-4">
                    Price: ${story.price} | Priority: <span className="capitalize">{story.priority}</span>
                </div>
            </div>

            <div className="flex gap-2 mt-4 pt-4 border-t border-gray-100">
                {/* View Button */}
                <Link href={`/stories/${story._id}`} className="flex-1 text-center bg-blue-50 text-blue-600 py-2 rounded-lg text-sm font-semibold hover:bg-blue-100">
                    View
                </Link>

                {/* Delete Button */}
                <button 
                    onClick={handleDelete}
                    className="flex-1 bg-red-50 text-red-600 py-2 rounded-lg text-sm font-semibold hover:bg-red-100"
                >
                    Delete
                </button>
            </div>
        </div>
    );
};

export default MyStoryCard;