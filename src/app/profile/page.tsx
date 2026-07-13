import { auth } from '@/lib/auth';
import { getMyStories } from '@/services/storyServices';
import { headers } from 'next/headers';

const ProfilePage = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    return <div className="text-center mt-20 text-xl">Please log in.</div>;
  }

const myStory = await getMyStories(session.user.id);

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-8">My Profile</h1>
      
      <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
        <div className="flex items-center gap-6 mb-8">
          <div className="w-20 h-20 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600 text-2xl font-bold">
            {session.user.name?.charAt(0) || 'U'}
          </div>
          <div>
            <h2 className="text-xl font-bold text-gray-900">{session.user.name}</h2>
            <p className="text-gray-500">{session.user.email}</p>
          </div>
        </div>

        {/* Story Count Section */}
        <div className="border-t border-gray-100 pt-6">
          <div className="flex items-center justify-between">
            <span className="text-gray-600 font-medium">Total Stories Created</span>
            <span className="bg-indigo-50 text-indigo-700 px-4 py-1 rounded-full font-bold text-lg">
              {myStory.length}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;