// src/app/career/page.tsx

import Image from "next/image";

export default function Career() {
  const jobs = [
    {
      title: "Frontend Developer",
      description:
        "We are looking for a skilled Frontend Developer with experience in React and Next.js to build dynamic and responsive user interfaces.",
      location: "Remote",
      type: "Full-time",
      imageUrl: "/fd.jpg", // Replace with actual image URL
    },
    {
      title: "Backend Developer",
      description:
        "Join our team as a Backend Developer to design, develop, and maintain server-side applications using Node.js and MongoDB.",
      location: "Islamabad, Pakistan",
      type: "Part-time",
      imageUrl: "/bc.jpg", // Replace with actual image URL
    },
    {
      title: "UI/UX Designer",
      description:
        "Creative UI/UX Designer needed to create intuitive user experiences and collaborate with development teams.",
      location: "Karachi, Pakistan",
      type: "Contract",
      imageUrl: "/uiux.jpg", // Replace with actual image URL
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-black p-6 sm:p-8 md:p-12 text-white">
      {/* Header Section */}
      <div className="text-center mb-12 mt-20 ">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-yellow-300">
          Career Opportunities
        </h1>
        <p className="text-lg sm:text-xl text-gray-300 mt-4">
          Explore our current job openings and join our team to make an impact.
        </p>
      </div>

      {/* Job Listings */}
      <div className="grid gap-8 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 mb-16">
        {jobs.map((job, index) => (
          <div
            key={index}
            className="w-full bg-gray-800 border border-gray-700 rounded-lg shadow-xl overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
          >
            {/* Image Section */}
            <div className="relative h-[200px] w-full">
              <Image
                className="object-cover"
                src={job.imageUrl}
                alt={job.title}
                fill
              />
            </div>

            {/* Content Section */}
            <div className="p-6 flex flex-col justify-between h-[220px]">
              <h5 className="text-xl font-bold mb-2 text-yellow-300">
                {job.title}
              </h5>
              <p className="text-sm text-gray-300 mb-4 line-clamp-3">
                {job.description}
              </p>
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm bg-gray-700 px-3 py-1 rounded-lg">
                  {job.location}
                </span>
                <span className="text-sm bg-gray-700 px-3 py-1 rounded-lg">
                  {job.type}
                </span>
              </div>
              <a
                href="#apply"
                className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium bg-gradient-to-r from-purple-500 to-indigo-500 text-white rounded-lg hover:from-purple-600 hover:to-indigo-600 focus:ring-2 focus:ring-purple-400"
              >
                Apply Now
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Application Form */}
      <div
        id="apply"
        className="max-w-4xl mx-auto bg-gray-800 p-8 rounded-lg shadow-xl"
      >
        <h2 className="text-2xl font-bold text-yellow-300 mb-4">
          Apply for a Position
        </h2>
        <form>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Full Name
            </label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white focus:ring-2 focus:ring-purple-400"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Email Address
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white focus:ring-2 focus:ring-purple-400"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Position
            </label>
            <select className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white focus:ring-2 focus:ring-purple-400">
              <option value="frontend">Frontend Developer</option>
              <option value="backend">Backend Developer</option>
              <option value="uiux">UI/UX Designer</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Cover Letter
            </label>
            <textarea
              placeholder="Write a brief cover letter"
              className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white focus:ring-2 focus:ring-purple-400"
            ></textarea>
          </div>
          <button
            type="submit"
            className="px-6 py-2 bg-gradient-to-r from-purple-500 to-indigo-500 text-white rounded-lg hover:from-purple-600 hover:to-indigo-600 focus:ring-2 focus:ring-purple-400"
          >
            Submit Application
          </button>
        </form>
      </div>
    </div>
  );
}
