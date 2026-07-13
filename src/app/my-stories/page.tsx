
import { getMyStories } from '@/services/storyServices';

import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { Story } from '@/types/story';
import MyStoryCard from './MyStoryCard';

const page = async() => {
    const session = await auth.api.getSession({
    headers: await headers()
    })
    const userId = session?.user?.id as string;
    const myStories : Story[] = await getMyStories(userId);
    return (
        <div>
            <h1>my Stories</h1>
            <div className='grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>{myStories.map((story) => (<MyStoryCard key={story._id} story={story}></MyStoryCard>))}</div>
        </div>
    );
};

export default page;