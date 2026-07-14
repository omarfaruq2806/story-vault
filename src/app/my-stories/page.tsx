import { getMyStories } from '@/services/storyServices';
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { Story } from '@/types/story';
import MyStoryCard from './MyStoryCard';
import Link from 'next/link';

const Page = async ({ searchParams }: { searchParams: Promise<{ page?: string }> }) => {
  const session = await auth.api.getSession({
    headers: await headers()
  });
  
  const userId = session?.user?.id as string;
  
  const params = await searchParams;
  const page = Number(params.page) || 1;
  const limit = 8; 

  if (!userId) {
    return (
      <div className="min-h-screen bg-[#061e29] flex items-center justify-center text-[#bae6fd]">
        <p>Please log in to view your stories.</p>
      </div>
    );
  }

  const myStories: Story[] = await getMyStories(userId, page, limit);

  return (
    <div className="min-h-screen bg-[#061e29] px-6 py-12">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-white mb-10">My Stories</h1>
        
        {myStories.length > 0 ? (
          <>
            <div className='grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
              {myStories.map((story) => (
                <MyStoryCard key={story._id} story={story} />
              ))}
            </div>

            {/* Pagination Controls */}
            <div className="flex justify-center items-center gap-6 mt-12">
              <Link 
                href={`/my-stories?page=${page - 1}`}
                className={`px-6 py-2 bg-[#083344] text-white rounded-lg transition-all ${page <= 1 ? 'opacity-50 pointer-events-none' : 'hover:bg-[#06b6d4]'}`}
              >
                Previous
              </Link>
              
              <span className="font-bold text-[#bae6fd] text-lg">Page {page}</span>
              
              {/* যদি ডাটা লিমিটের চেয়ে কম আসে, তার মানে পরের পেজে আর ডাটা নেই */}
              <Link 
                href={`/my-stories?page=${page + 1}`}
                className={`px-6 py-2 bg-[#083344] text-white rounded-lg transition-all ${myStories.length < limit ? 'opacity-50 pointer-events-none' : 'hover:bg-[#06b6d4]'}`}
              >
                Next
              </Link>
            </div>
          </>
        ) : (
          <div className="text-center py-20 border-2 border-dashed border-[#06b6d4]/20 rounded-2xl">
            <p className="text-[#bae6fd] text-lg">You haven't added any stories yet.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Page;