"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { authClient } from "@/lib/auth-client";
import { NavLink } from "@/types/navbar";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { data: session, isPending } = authClient.useSession();
  const pathname = usePathname();

  const handleLogout = async () => await authClient.signOut();

   const publicLinks: NavLink[] = [
    { name: "Home", href: "/" },
    { name: "All Stories", href: "/stories" },
    {name: 'About Us', href: '/about'},
  ];



  const privateLinks: NavLink[] = [
    {name: "My Stories", href: "/my-stories"},
    { name: "Write", href: "/write" },
    { name: "Profile", href: "/profile" },
  ];



  const navlinks = session ? [
    { name: "Home", href: "/" },
    { name: "All Stories", href: "/stories" },
    {name: 'About Us', href: '/about'},
    {name:'Terms & Conditions', href: '/terms'},
    ...privateLinks
  ] : publicLinks;

  return (
    <nav className="sticky top-0 z-50 w-full bg-[#083344] border-b border-[#06b6d4]/20 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Link href="/" className="text-2xl font-bold text-[#22d3ee]">StoryVault</Link>

          {/* Desktop Links */}
          <div className="hidden md:flex space-x-6 items-center">
            {navlinks.map((link) => (
              <Link key={link.name} href={link.href} 
                className={`font-medium transition-colors ${pathname === link.href ? "text-[#22d3ee]" : "text-[#bae6fd] hover:text-[#22d3ee]"}`}>
                {link.name}
              </Link>
            ))}
            
            {/* Auth Section */}
            {!isPending && (session ? (
              <button onClick={handleLogout} className="bg-red-900/30 text-red-400 px-4 py-2 rounded-lg hover:bg-red-900/50 transition-all font-medium">
                Logout
              </button>
            ) : (
              <div className="flex gap-3 justify-center items-center">
                <Link href="/authentication/signin" className="text-[#bae6fd] hover:text-[#22d3ee]  font-medium">Sign In</Link>
                <Link href="/authentication/register" className="bg-[#06b6d4] text-white px-4 py-2 rounded-lg hover:bg-[#0891b2] transition-all font-medium">Register</Link>
              </div>
            ))}
          </div>

          {/* Mobile Toggle */}
          <button className="md:hidden text-[#22d3ee]" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile Animated Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden bg-[#083344] overflow-hidden border-b border-[#06b6d4]/20 px-4"
          >
            <div className="py-4 space-y-4">
              {navlinks.map((link) => (
                <Link key={link.name} href={link.href} onClick={() => setIsMobileMenuOpen(false)}
                  className={`block font-medium ${pathname === link.href ? "text-[#22d3ee]" : "text-[#bae6fd]"}`}>
                  {link.name}
                </Link>
              ))}
              <div className="pt-4 border-t border-[#06b6d4]/20">
                {!isPending && (session ? (
                  <button onClick={handleLogout} className="text-red-400 font-medium">Logout</button>
                ) : (
                  <Link href="/authentication/register" className="block text-center bg-[#06b6d4] text-white py-2 rounded-lg">Register</Link>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}