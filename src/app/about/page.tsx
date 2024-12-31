import Image from "next/image";

export default function About() {
  return (
    <div className="relative bg-gradient-to-br from-blue-700 via-purple-900 to-gray-900 text-white min-h-screen flex items-center justify-center">
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Main Content */}
      <div className="container mx-auto px-6 sm:px-12 lg:px-20 py-16 mt-20 text-center lg:text-left relative z-10">
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12">
          {/* Image Section */}
          <div className="lg:w-1/3 flex justify-center relative">
            <div className="relative">
              <Image
                src="/aipic.png"
                alt="Your Name"
                width={200}
                height={200}
                className="rounded-full w-48 h-48 sm:w-60 sm:h-60 lg:w-72 lg:h-72 border-4 border-yellow-400 shadow-xl transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
              />
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gradient-to-br from-pink-500 via-purple-500 to-blue-500 rounded-full w-80 h-80 opacity-30 blur-2xl animate-spin-slow"></div>
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-yellow-400 via-red-500 to-orange-500 rounded-full w-64 h-64 opacity-50 blur-xl animate-pulse"></div>
            </div>
          </div>

          {/* Content Section */}
          <div className="lg:w-2/3">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6 mt-12 lg:mt-0 bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 drop-shadow-md">
              About Me
            </h1>
            <p className="text-sm sm:text-base lg:text-lg mb-6 leading-relaxed text-gray-200">
              Hi there! I am{" "}
              <span className="text-yellow-300 font-bold">Uzma Ahmed</span>. As
              a Fullstack Developer and tech enthusiast, I love crafting
              solutions that bring ideas to life. This blog is my space to share
              tips, tutorials, and stories about web development using tools
              like{" "}
              <span className="font-semibold text-pink-400">Next.js</span> and{" "}
              <span className="font-semibold text-blue-400">React</span>.
            </p>
            <p className="text-sm sm:text-base lg:text-lg mb-6 leading-relaxed text-gray-300">
              Whether you're just starting your coding journey or looking to
              level up your skills, you’ll find something valuable here. My
              goal is to make web development approachable, creative, and fun
              for everyone.
            </p>
            <p className="text-sm sm:text-base lg:text-lg mb-6 leading-relaxed text-gray-300">
              Outside of coding, I enjoy exploring innovative designs, keeping
              up with tech trends, and supporting the developer community. I
              believe that learning together makes us all stronger!
            </p>
            <p className="text-sm sm:text-base lg:text-lg mb-6 leading-relaxed text-gray-200">
              Got a question or idea?{" "}
              <a
                href="/contact"
                className="inline-block px-6 py-3 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 text-black font-semibold rounded shadow-md hover:scale-105 transform transition-transform duration-300"
              >
                Reach Out
              </a>{" "}
              and lets connect. I am always excited to meet fellow tech
              enthusiasts.
            </p>
            <p className="text-lg font-semibold mt-8 text-purple-300">
              Lets build, learn, and grow together. The possibilities are
              endless!
            </p>
          </div>
        </div>
      </div>

      {/* Redesigned Background Circles */}
      <div className="absolute inset-0">
        <div className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 opacity-20 rounded-full w-96 h-96 absolute -top-16 -left-20 animate-pulse"></div>
        <div className="bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 opacity-30 rounded-full w-72 h-72 absolute -bottom-24 -right-24 animate-spin-slow"></div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
        <div className="text-gray-300 animate-bounce">
          <span className="block text-sm sm:text-base">Scroll Down</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-6 h-6 mx-auto"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
