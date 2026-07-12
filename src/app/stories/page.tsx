import { getStories } from '@/services/storyServices';
import React from 'react';

const page =async () => {
const stories = await getStories();
console.log(stories);
    return (
        <div>
            <h1>All Stories</h1>
        </div>
    );
};

export default page;