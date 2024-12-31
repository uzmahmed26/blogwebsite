"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="text-white bg-gradient-to-r from-indigo-900 via-purple-900 to-gray-900 shadow-lg fixed top-0 left-0 w-full z-50">
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/ai.png"
            width={50}
            height={50}
            alt="Logo"
            className="rounded-full"
          />
          <span className="ml-3 text-lg sm:text-2xl font-bold tracking-wide">
            Information Technology
          </span>
        </Link>

        {/* Burger Menu */}
        <button
          className="lg:hidden text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none">
              <path
                d="M6 18L18 6M6 6l12 12"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          ) : (
            <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none">
              <path
                d="M4 6h16M4 12h16m-7 6h7"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          )}
        </button>

        {/* Links */}
        <nav
          className={`${
            isMenuOpen ? "block" : "hidden"
          } lg:flex flex-col lg:flex-row absolute lg:static bg-gray-900 lg:bg-transparent top-16 left-0 w-full lg:w-auto p-4 lg:p-0 z-40`}
        >
          <Link href="/" className="block text-white px-4 py-2 hover:text-yellow-400">
            MyBlog
          </Link>
          <Link href="/about" className="block text-white px-4 py-2 hover:text-yellow-400">
            About
          </Link>
          <Link href="/career" className="block text-white px-4 py-2 hover:text-yellow-400">
            Career
          </Link>
          <Link href="/contact" className="block text-white px-4 py-2 hover:text-yellow-400">
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}
