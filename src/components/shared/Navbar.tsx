"use client";

import { useState } from "react";
import Link from "next/link";
import { authClient } from "@/lib/auth-client";
import { NavLink } from "@/types/navbar";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { data: session, isPending } = authClient.useSession();

  const publicLinks: NavLink[] = [
    { name: "Home", href: "/" },
    { name: "All Stories", href: "/stories" },
    { name: "Sign In", href: "/authentication/signin" },
  ];

  const privateLinks: NavLink[] = [
    { name: "Write", href: "/write" },
    { name: "Profile", href: "/profile" },
  ];

  const navlinks = session ? [
    { name: "Home", href: "/" },
    { name: "All Stories", href: "/stories" },
    ...privateLinks
  ] : publicLinks;

  return (
    <nav className="sticky top-0 z-50 w-full bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Link href="/" className="text-2xl font-bold text-indigo-600">StoryVault</Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center">
            {navlinks.map((link) => (
              <Link key={link.name} href={link.href} className="text-gray-600 hover:text-indigo-600 font-medium">{link.name}</Link>
            ))}
            {!isPending && session && (
              <button onClick={() => authClient.signOut()} className="text-gray-600 hover:text-red-600 font-medium">Logout</button>
            )}
            {!isPending && !session && (
              <Link href="/authentication/register" className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 font-medium">Register</Link>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-gray-600 focus:outline-none">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMobileMenuOpen ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /> : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-gray-100 p-4 space-y-4">
          {navlinks.map((link) => (
            <Link key={link.name} href={link.href} onClick={() => setIsMobileMenuOpen(false)} className="block text-gray-600 font-medium">
              {link.name}
            </Link>
          ))}
          {!isPending && session ? (
            <button onClick={() => authClient.signOut()} className="block text-red-600 font-medium">Logout</button>
          ) : (
            <Link href="/authentication/register" onClick={() => setIsMobileMenuOpen(false)} className="block bg-indigo-600 text-white text-center py-2 rounded-md font-medium">Register</Link>
          )}
        </div>
      )}
    </nav>
  );
}