import Link from 'next/link';


export default function Contact() {
    return (
      <div className="relative bg-gradient-to-r from-indigo-800 via-gray-900 to-black text-white min-h-screen flex flex-col items-center justify-center pt-24">
        {/* Background Overlay */}
        <div className="absolute inset-0 bg-black/40"></div>
  
        {/* Decorative Background Elements */}
        <div className="absolute inset-0">
          <div className="bg-gradient-to-r from-blue-500 via-indigo-600 to-purple-700 opacity-25 rounded-full w-96 h-96 absolute -top-20 left-10 animate-pulse"></div>
          <div className="bg-gradient-to-r from-green-500 via-yellow-500 to-red-500 opacity-30 rounded-full w-72 h-72 absolute -bottom-28 right-16 animate-spin-slow"></div>
        </div>
  
        {/* Content */}
        <div className="container mx-auto px-6 py-16 relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 drop-shadow-md">
            Connect With Me
          </h1>
          <p className="text-base md:text-lg max-w-3xl mx-auto mb-12 text-gray-300">
            Whether you have a question, an idea, or just want to say hello, I  love to hear from you! Fill out the form below or explore more ways to get in touch.
          </p>
  
          {/* Contact Form */}
          <form className="max-w-4xl mx-auto bg-gradient-to-r from-gray-800 via-gray-700 to-gray-600 text-white rounded-2xl shadow-2xl p-10 space-y-8 border border-gray-600">
            <div>
              <label htmlFor="name" className="block text-lg font-bold mb-2">Your Name</label>
              <input
                id="name"
                type="text"
                placeholder="Enter your name"
                className="w-full px-4 py-3 rounded-lg bg-gray-900 border border-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-lg font-bold mb-2">Your Email</label>
              <input
                id="email"
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-3 rounded-lg bg-gray-900 border border-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-lg font-bold mb-2">Your Message</label>
              <textarea
                id="message"
                rows={5}
                placeholder="Write your message here"
                className="w-full px-4 py-3 rounded-lg bg-gray-900 border border-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                required
              ></textarea>
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="px-8 py-3 text-lg font-semibold rounded-lg bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 shadow-md hover:scale-105 transform transition-transform duration-300"
              >
                Submit
              </button>
            </div>
          </form>
  
          {/* Additional Contact Methods */}
          <div className="mt-16 text-center">
            <h2 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500">
              Other Ways to Connect
            </h2>
            <div className="flex flex-col md:flex-row justify-center items-center gap-6 text-gray-300">
              <p>
                Email:{" "}
                <Link href="mailto:your-email@example.com" className="text-yellow-300 hover:underline">
                  abc@gmail.com
                </Link>
              </p>
              <p>
                Phone:{" "}
                <Link href="tel:+123456789" className="text-yellow-300 hover:underline">
                  +123 456 789
                </Link>
              </p>
              <p>Location: Blog City, Pakistan</p>
            </div>
            <p className="mt-4">
              Or connect with me on{" "}
              <Link href="https://linkedin.com" className="text-blue-400 hover:underline">
                LinkedIn
              </Link>
              ,{" "}
              <Link href="https://twitter.com" className="text-blue-400 hover:underline">
                Twitter
              </Link>
              , and{" "}
              <Link href="https://github.com" className="text-blue-400 hover:underline">
                GitHub
              </Link>
              .
            </p>
          </div>
        </div>
      </div>
    );
  }
  