import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#083344] text-[#bae6fd] py-10 mt-auto border-t border-[#06b6d4]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Logo & Description */}
          <div>
            <h2 className="text-2xl font-bold text-[#22d3ee] mb-4">StoryVault</h2>
            <p className="text-sm text-[#bae6fd]/70 leading-relaxed">
              Unleash your inner storyteller. A vibrant community for writers and readers to share their imagination.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:text-[#22d3ee] transition-colors">Home</Link>
              </li>
              <li>
                <Link href="/stories" className="hover:text-[#22d3ee] transition-colors">All Stories</Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-[#22d3ee] transition-colors">About Us</Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-[#22d3ee] transition-colors">Terms & Conditions</Link>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Contact</h3>
            <ul className="space-y-2 text-sm text-[#bae6fd]/70">
              <li>Email: support@storyvault.com</li>
              <li>Phone: +880 1234 567890</li>
              <li>Address: Dhaka, Bangladesh</li>
            </ul>
          </div>
          
        </div>

        {/* Copyright */}
        <div className="border-t border-[#06b6d4]/20 mt-8 pt-8 text-center text-sm text-[#bae6fd]/50">
          <p>&copy; {new Date().getFullYear()} StoryVault. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}