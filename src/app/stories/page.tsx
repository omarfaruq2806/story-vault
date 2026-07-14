"use client";

import { useState, useEffect } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import StoryCard from '@/components/stories/StoryCard';
import { getStories } from '@/services/storyServices';
import { Story } from '@/types/story';
import SkeletonCard from '@/components/loading/SkeletonCard';

const Page = () => {
  const [stories, setStories] = useState<Story[]>([]);
  const [isLoading, setIsLoading] = useState(true); // লোডিং স্টেট
  const searchParams = useSearchParams();
  const router = useRouter();

  const search = searchParams.get('search') || '';
  const category = searchParams.get('category') || '';
  const latest = searchParams.get('latest') === 'true';
  const priceSort = searchParams.get('priceSort') || '';
  const page = Number(searchParams.get('page')) || 1;

  useEffect(() => {
    const fetchStories = async () => {
      setIsLoading(true); // ফেচিং শুরুর আগে লোডিং ট্রু করা
      const data = await getStories(search, category, latest, page, 10, priceSort);
      setStories(data);
      setIsLoading(false); // ডাটা আসলে লোডিং ফলস
    };
    fetchStories();
  }, [search, category, latest, page, priceSort]);

  const handleFilterChange = (key: string, value: string | boolean) => {
    const params = new URLSearchParams(searchParams.toString());
    if (value) params.set(key, value.toString());
    else params.delete(key);
    
    if (key !== 'page') params.set('page', '1'); 
    router.push(`/stories?${params.toString()}`);
  };

  return (
    <div className="min-h-screen bg-[#061e29] px-6 py-12">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-white mb-8">All Stories</h1>
        
        {/* Filter Section */}
        <div className="flex flex-col gap-4 mb-10 bg-[#083344] p-6 rounded-2xl border border-[#06b6d4]/20 shadow-xl">
          <input 
            type="text"
            placeholder="Search your favorite stories..."
            defaultValue={search}
            onChange={(e) => handleFilterChange('search', e.target.value)}
            className="border border-[#06b6d4]/20 p-3 rounded-lg w-full bg-[#061e29] text-white outline-none focus:border-[#06b6d4] transition-all placeholder:text-[#bae6fd]/50"
          />
          {/* ... আপনার ফিল্টার সিলেক্টগুলো অপরিবর্তিত থাকবে ... */}
          <div className="flex gap-4 flex-wrap">
            <select defaultValue={category} onChange={(e) => handleFilterChange('category', e.target.value)} className="border border-[#06b6d4]/20 p-3 rounded-lg bg-[#061e29] text-white outline-none focus:border-[#06b6d4]">
              <option value="">All Categories</option>
              <option value="fiction">Fiction</option>
              <option value="non-fiction">Non-Fiction</option>
              <option value="mystery">Mystery</option>
              <option value="sci-fi">Sci-Fi</option>
              <option value="biography">Biography</option>
            </select>
            <select defaultValue={priceSort} onChange={(e) => handleFilterChange('priceSort', e.target.value)} className="border border-[#06b6d4]/20 p-3 rounded-lg bg-[#061e29] text-white outline-none focus:border-[#06b6d4]">
              <option value="">Sort by Price</option>
              <option value="asc">Price: Low to High</option>
              <option value="desc">Price: High to Low</option>
            </select>
            <button 
              onClick={() => handleFilterChange('latest', latest ? '' : 'true')}
              className={`px-6 py-3 rounded-lg font-semibold transition-all ${latest ? 'bg-[#06b6d4] text-[#083344]' : 'bg-[#061e29] border border-[#06b6d4] text-[#bae6fd] hover:bg-[#06b6d4]/10'}`}
            >
              {latest ? 'Newest First' : 'Sort by Newest'}
            </button>
          </div>
        </div>

        <div className='grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
          {isLoading ? (
            Array.from({ length: 8 }).map((_, i) => <SkeletonCard key={i} />)
          ) : (
            stories.map((story) => (
              <StoryCard key={story._id} story={story} />
            ))
          )}
        </div>
        {!isLoading && stories.length === 0 && (
          <div className="text-center py-20 text-[#bae6fd]">No stories found matching your criteria.</div>
        )}

        {/* Pagination */}
        <div className="flex justify-center items-center gap-6 mt-12">
           {/* ... আগের পেজিনেশন কোডটি এখানে থাকবে ... */}
           <button disabled={page <= 1} onClick={() => handleFilterChange('page', (page - 1).toString())} className="px-6 py-2 bg-[#083344] text-white rounded-lg disabled:bg-[#061e29] disabled:text-gray-500 transition-all hover:bg-[#06b6d4]">Previous</button>
           <span className="font-bold text-[#bae6fd] text-lg">Page {page}</span>
           <button onClick={() => handleFilterChange('page', (page + 1).toString())} className="px-6 py-2 bg-[#083344] text-white rounded-lg transition-all hover:bg-[#06b6d4]">Next</button>
        </div>
      </div>
    </div>
  );
};

export default Page;