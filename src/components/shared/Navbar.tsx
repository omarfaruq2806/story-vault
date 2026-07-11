"use client";

import { useState } from "react";
import Link from "next/link";
import { authClient } from "@/lib/auth-client";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const { 
        data: session, 
        isPending, //loading state
        error, //error object
        refetch //refetch the session
    } = authClient.useSession() 

    console.log(session, isPending, error, refetch);

  

  return (
    <nav className="sticky top-0 z-50 w-full bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold text-blue-600">
            BookVerse
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <Link href="/" className="text-gray-600 hover:text-blue-600 font-medium">Home</Link>
            <Link href="/books" className="text-gray-600 hover:text-blue-600 font-medium">Explore Books</Link>
            <Link href="/about" className="text-gray-600 hover:text-blue-600 font-medium">About</Link>
            <Link href="/contact" className="text-gray-600 hover:text-blue-600 font-medium">Contact</Link>
          </div>

          {/* Auth Buttons (Desktop) */}
          <div className="hidden md:flex items-center space-x-4">
            {session ? (
              <div className="text-gray-600 font-medium cursor-pointer">Profile ▼</div>
            ) : (
              <>
                <Link href="/authentication/signin" className="text-gray-600 hover:text-blue-600 font-medium">signin</Link>
                <Link href="/authentication/register" className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 font-medium">
                  Register
                </Link>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-600 hover:text-blue-600 focus:outline-none"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link href="/" className="block px-3 py-2 text-gray-600 hover:text-blue-600 font-medium">Home</Link>
            <Link href="/books" className="block px-3 py-2 text-gray-600 hover:text-blue-600 font-medium">Explore Books</Link>
            <Link href="/about" className="block px-3 py-2 text-gray-600 hover:text-blue-600 font-medium">About</Link>
            <Link href="/contact" className="block px-3 py-2 text-gray-600 hover:text-blue-600 font-medium">Contact</Link>
            
            {!session && (
              <div className="border-t border-gray-200 mt-2 pt-2 flex flex-col gap-2 px-3">
                <Link href="/authentication/login" className="text-gray-600 hover:text-blue-600 font-medium">Login</Link>
                <Link href="/authentication/register" className="bg-blue-600 text-white px-4 py-2 rounded-md text-center hover:bg-blue-700 font-medium">
                  Register
                </Link>
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}