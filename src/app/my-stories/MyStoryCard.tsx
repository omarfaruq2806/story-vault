"use client";

import { deleteStory } from '@/services/storyServices';
import { Story } from '@/types/story';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { AnimatedToast } from '@/components/customToast/AnimatedToast';

const MyStoryCard = ({ story }: { story: Story }) => {
    const router =  useRouter();
    
    const handleDelete = async () => {
        const res = await deleteStory(story._id);
        if(res.deletedCount > 0) {
            AnimatedToast("Story deleted successfully!", "success")
            router.refresh();
        }
    };

    return (
        <div className="flex flex-col h-full bg-[#083344] border border-[#06b6d4]/20 rounded-2xl overflow-hidden shadow-lg hover:border-[#06b6d4]/40 transition-all duration-300">
            {/* ডাইনামিক ইমেজ সেকশন */}
            <div className="relative h-40 w-full overflow-hidden bg-[#061e29]/50">
                <Image 
                    src={story.imageUrl || "/window.svg"} 
                    alt={story.title}
                    fill
                    className="object-cover"
                />
            </div>

            {/* কন্টেন্ট সেকশন */}
            <div className="p-5 flex flex-col flex-grow">
                <div>
                    <h2 className="text-xl font-bold text-white mb-2 line-clamp-1">{story.title}</h2>
                    <p className="text-[#bae6fd]/70 text-sm mb-4 line-clamp-2">{story.shortDescription}</p>
                    
                    <div className="text-sm font-medium text-[#22d3ee] mb-4">
                        Price: ${story.price} | Priority: <span className="capitalize text-white">{story.priority}</span>
                    </div>
                </div>

                <div className="flex gap-3 mt-auto pt-4 border-t border-[#06b6d4]/20">
                    {/* View Button */}
                    <Link 
                        href={`/stories/${story._id}`} 
                        className="flex-1 text-center bg-[#061e29] border border-[#06b6d4]/30 text-[#bae6fd] py-2 rounded-lg text-sm font-semibold hover:bg-[#06b6d4] hover:text-[#083344] transition-all"
                    >
                        View
                    </Link>

                    {/* Delete Button */}
                    <button 
                        onClick={handleDelete}
                        className="flex-1 bg-red-900/20 border border-red-500/20 text-red-400 py-2 rounded-lg text-sm font-semibold hover:bg-red-600 hover:text-white transition-all"
                    >
                        Delete
                    </button>
                </div>
            </div>
        </div>
    );
};

export default MyStoryCard;