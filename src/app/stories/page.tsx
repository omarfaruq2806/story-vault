"use client";

import { useState, useEffect } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import StoryCard from '@/components/stories/StoryCard';
import { getStories } from '@/services/storyServices';
import { Story } from '@/types/story';

const Page = () => {
  const [stories, setStories] = useState<Story[]>([]);
  const searchParams = useSearchParams();
  const router = useRouter();

  const search = searchParams.get('search') || '';
  const category = searchParams.get('category') || '';
  const latest = searchParams.get('latest') === 'true';
  const priceSort = searchParams.get('priceSort') || '';
  const page = Number(searchParams.get('page')) || 1;

  useEffect(() => {
    const fetchStories = async () => {
      const data = await getStories(search, category, latest, page, 10, priceSort);
      setStories(data);
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
    <div className="p-6">
      <h1>All Stories</h1>
      
      <div className="flex flex-col gap-4 mb-6 bg-gray-50 p-4 rounded-lg">
        <input 
          type="text"
          placeholder="Search stories..."
          defaultValue={search}
          onChange={(e) => handleFilterChange('search', e.target.value)}
          className="border p-2 rounded w-full"
        />

        <div className="flex gap-4 flex-wrap">
          <select onChange={(e) => handleFilterChange('category', e.target.value)} className="border p-2 rounded">
            <option value="">All Categories</option>
            <option value="">Select Category</option>
    <option value="fiction">Fiction</option>
    <option value="non-fiction">Non-Fiction</option>
    <option value="mystery">Mystery</option>
    <option value="sci-fi">Sci-Fi</option>
    <option value="biography">Biography</option>

          </select>

          <select onChange={(e) => handleFilterChange('priceSort', e.target.value)} className="border p-2 rounded">
            <option value="">Sort by Price</option>
            <option value="asc">Price: Low to High</option>
            <option value="desc">Price: High to Low</option>
          </select>

          <button 
            onClick={() => handleFilterChange('latest', latest ? '' : 'true')}
            className={`px-4 py-2 border rounded ${latest ? 'bg-indigo-600 text-white' : 'bg-white'}`}
          >
            {latest ? 'Newest First' : 'Sort by Newest'}
          </button>
        </div>
      </div>

      {/* Stories Grid */}
      <div className='grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
        {stories.map((story) => (
          <StoryCard key={story._id} story={story} />
        ))}
      </div>

      {/* Pagination Buttons */}
      <div className="flex justify-center items-center gap-4 mt-10">
        <button 
          disabled={page <= 1}
          onClick={() => handleFilterChange('page', (page - 1).toString())}
          className="px-4 py-2 bg-indigo-600 text-white rounded disabled:bg-gray-300"
        >
          Previous
        </button>
        
        <span className="font-bold text-lg">Page {page}</span>
        
        <button 
          onClick={() => handleFilterChange('page', (page + 1).toString())}
          className="px-4 py-2 bg-indigo-600 text-white rounded"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Page;