import { auth } from '@/lib/auth';
import { getMyStories } from '@/services/storyServices';
import { headers } from 'next/headers';
import Link from 'next/link';

const ProfilePage = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    return (
      <div className="min-h-screen bg-[#061e29] flex items-center justify-center text-[#bae6fd]">
        <p className="text-xl">Please log in to view your profile.</p>
      </div>
    );
  }

  const myStories = await getMyStories(session.user.id);

  return (
    <div className="min-h-screen bg-[#061e29] py-12 px-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-white mb-8">My Profile</h1>

        {/* Profile Card */}
        <div className="bg-[#083344] p-8 rounded-3xl border border-[#06b6d4]/20 shadow-2xl mb-8">
          <div className="flex flex-col md:flex-row items-center gap-8">
            {/* Avatar */}
            <div className="w-24 h-24 bg-[#061e29] rounded-full flex items-center justify-center text-[#22d3ee] text-4xl font-bold border-2 border-[#06b6d4]/30">
              {session.user.name?.charAt(0).toUpperCase() || 'U'}
            </div>
            
            {/* Info */}
            <div className="text-center md:text-left flex-grow">
              <h2 className="text-3xl font-bold text-white mb-1">{session.user.name}</h2>
              <p className="text-[#bae6fd]/60">{session.user.email}</p>
              <div className="mt-4 flex gap-3 justify-center md:justify-start">
                <span className="px-3 py-1 bg-[#061e29] text-[#22d3ee] text-xs font-bold rounded-lg border border-[#06b6d4]/20">
                  Member since {new Date().getFullYear()}
                </span>
              </div>
            </div>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 gap-4 mt-8 pt-8 border-t border-[#06b6d4]/20">
            <div className="text-center p-4 bg-[#061e29] rounded-2xl">
              <div className="text-[#22d3ee] text-3xl font-bold">{myStories.length}</div>
              <div className="text-[#bae6fd]/60 text-sm">Stories Published</div>
            </div>
            <div className="text-center p-4 bg-[#061e29] rounded-2xl">
              <div className="text-[#22d3ee] text-3xl font-bold">0</div>
              <div className="text-[#bae6fd]/60 text-sm">Community Rank</div>
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div className="flex gap-4">
          <Link 
            href="/my-stories" 
            className="flex-1 text-center bg-[#06b6d4] hover:bg-[#22d3ee] text-[#083344] font-bold py-4 rounded-2xl transition-all"
          >
            Manage My Stories
          </Link>
          <Link 
            href="/write" 
            className="flex-1 text-center bg-[#083344] border border-[#06b6d4]/30 text-white font-bold py-4 rounded-2xl hover:bg-[#06b6d4]/10 transition-all"
          >
            Create New Story
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;