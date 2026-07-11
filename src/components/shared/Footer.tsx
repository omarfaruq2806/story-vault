import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Logo & Short Description */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-4">BookVerse</h2>
            <p className="text-sm text-gray-400 leading-relaxed">
              Discover, explore, and share your favorite books with our community. Your ultimate library platform.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:text-blue-400 transition-colors">Home</Link>
              </li>
              <li>
                <Link href="/books" className="hover:text-blue-400 transition-colors">Explore Books</Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-blue-400 transition-colors">About</Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-blue-400 transition-colors">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Contact Us</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>Email: support@bookverse.com</li>
              <li>Phone: +880 1234 567890</li>
              <li>Address: 123 Book Street, Reading City</li>
            </ul>
          </div>
          
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} BookVerse. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}