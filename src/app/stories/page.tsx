import StoryCard from '@/components/stories/StoryCard';
import { getStories } from '@/services/storyServices';
import { Story } from '@/types/story';

const page =async () => {
const stories : Story[] = await getStories();
console.log(stories);

    return (
        <div>
            <h1>All Stories</h1>
            <div className='grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
                {stories.map((story) => (
                <StoryCard key={story._id} story={story}></StoryCard>
            ))}
            </div>
        </div>
    );
};

export default page;