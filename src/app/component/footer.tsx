import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="text-gray-600 body-font bg-gradient-to-r from-blue-900 to-blue-600">
      <div className="container px-5 py-16 mx-auto flex flex-wrap sm:flex-nowrap">
        {/* Logo Section */}
        <div className="w-full sm:w-1/3 flex-shrink-0 text-center sm:text-left">
          <Link href="/" className="flex title-font font-medium items-center justify-center sm:justify-start text-white">
            <Image src="/ai.png" width={80} height={80} alt="AI Logo" />
            <span className="ml-3 text-xl font-bold text-white">Information Technology</span>
          </Link>
          <p className="mt-4 text-gray-400 text-sm">
            Empowering the future with AI and Information Technology.
          </p>
        </div>

        {/* Links Section */}
        <div className="w-full sm:ml-28 sm:w-2/3 flex flex-wrap justify-between mt-8 sm:mt-0">
          {/* Categories */}
          <div className="w-1/2 sm:w-1/3 px-2">
            <h2 className="text-lg font-medium text-white mb-3">CATEGORIES</h2>
            <nav className="list-none space-y-2">
              <li>
                <Link href="/web-development" className="text-gray-300 hover:text-yellow-400 transition">
                  Web Development
                </Link>
              </li>
              <li>
                <Link href="/ai-ml" className="text-gray-300 hover:text-yellow-400 transition">
                  AI & Machine Learning
                </Link>
              </li>
              <li>
                <Link href="/data-science" className="text-gray-300 hover:text-yellow-400 transition">
                  Data Science
                </Link>
              </li>
              <li>
                <Link href="/cybersecurity" className="text-gray-300 hover:text-yellow-400 transition">
                  Cybersecurity
                </Link>
              </li>
            </nav>
          </div>

          {/* Quick Links */}
          <div className="w-1/2 sm:w-1/3 px-2">
            <h2 className="text-lg font-medium text-white mb-3">QUICK LINKS</h2>
            <nav className="list-none space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-yellow-400 transition">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-yellow-400 transition">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/product" className="text-gray-300 hover:text-yellow-400 transition">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/career" className="text-gray-300 hover:text-yellow-400 transition">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-yellow-400 transition">
                  Contact
                </Link>
              </li>
            </nav>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="bg-blue-800">
        <div className="container mx-auto py-4 px-5 flex flex-col sm:flex-row items-center justify-between">
          <p className="text-gray-400 text-sm text-center sm:text-left">
            © 2024 Uzma Ahmed (GIAIC) - All rights reserved
          </p>
          <div className="flex items-center space-x-4 mt-4 sm:mt-0">
            {/* Social Media Icons */}
            <Link
              href="https://www.linkedin.com/in/uzma-ahmed-3557402ba/"
              className="text-gray-400 hover:text-gray-200 transition"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M4.98 3.5C4.98 2.67 4.33 2 3.5 2S2 2.67 2 3.5 2.67 5 3.5 5s1.48-.67 1.48-1.5zM5 8H2v14h3V8zm7.5 0H9v14h3v-7.5c0-2.75 4-2.97 4 0V22h3v-7.5c0-4.5-5-4.27-7.5-2.09V8z" />
              </svg>
            </Link>

            <Link
              href="https://wa.me/1234567890"
              className="text-gray-400 hover:text-gray-200 transition"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.52 3.48A11.74 11.74 0 0012 0a12 12 0 00-8.48 3.52 11.74 11.74 0 00-3.52 8.48 11.8 11.8 0 001.61 6L0 24l6-1.6a12.2 12.2 0 006 .61 11.9 11.9 0 008.51-3.53 12.09 12.09 0 003.47-8.43 11.88 11.88 0 00-3.47-8.57zM12 21.5a9.8 9.8 0 01-4.84-1.24l-.35-.21-3.56.95 1-3.45-.23-.36A9.6 9.6 0 013 12a9.49 9.49 0 012.79-6.83A9.53 9.53 0 0112 2.5a9.48 9.48 0 006.83 2.79 9.5 9.5 0 012.67 6.83 9.6 9.6 0 01-2.84 6.72A9.63 9.63 0 0112 21.5zm5.27-7.19l-1.51-.75a1 1 0 00-1.01.11l-.59.44a6.51 6.51 0 01-3.64-3.64l.43-.59a1 1 0 00.12-1l-.75-1.52a1 1 0 00-.86-.55h-.71a2 2 0 00-1.41.58 5 5 0 00-1.52 3.65 8.12 8.12 0 004.62 6.4 5.5 5.5 0 002.37.52 5 5 0 003.65-1.52 2 2 0 00.58-1.41v-.69a1 1 0 00-.53-.88z" />
              </svg>
            </Link>

            <Link
              href="https://www.facebook.com"
              className="text-gray-400 hover:text-gray-200 transition"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
              </svg>
            </Link>

            <Link
              href="https://www.twitter.com"
              className="text-gray-400 hover:text-gray-200 transition"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53A4.48 4.48 0 0012.66 4v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
