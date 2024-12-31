import { client } from "@/sanity/lib/client";
import Link from "next/link";
import Image from "next/image";

async function getData() {
  const fetchData = await client.fetch(`*[_type == "home"]{
    title, description,
    "imageUrl": image.asset->url
  }`);
  return fetchData;
}

export default async function Hero() {
  const data = await getData();
  console.log(data);

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-purple-800 via-indigo-800 to-gray-700 text-white flex items-center">
        {data.map((val: any, i: any) => {
          return (
            <section key={i} className="w-full">
              <div className="container mx-auto flex flex-col sm:mt-12 md:flex-row items-center my-8 px-6 sm:px-12 lg:px-28 py-12 md:py-24">
                {/* Left Content: Title and Description */}
                <div className="w-full md:w-1/2 flex flex-col items-center  md:items-start text-center md:text-left space-y-6">
                  <h1 className="title-font p-4 text-3xl  sm:text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-green-400 to-blue-500 mt-4 sm:mt-14 md:mt-12 ">
                    {val.title}
                  </h1>
                  <p className="text-gray-200 text-sm sm:text-base md:text-lg leading-7 sm:leading-8">
                    {val.description}
                  </p>

                  <div className="flex flex-wrap justify-center md:justify-start gap-4">
                    <Link href="/product">
                      <button className="inline-flex text-white bg-gradient-to-r from-green-500 to-blue-500 border-0 py-2 px-6 focus:outline-none hover:scale-105 transform transition-transform duration-300 rounded text-sm sm:text-base md:text-lg shadow-lg">
                        Explore More
                      </button>
                    </Link>
                    <Link href="/product">
                      <button className="inline-flex text-gray-900 bg-white border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 transform transition-transform duration-300 rounded text-sm sm:text-base md:text-lg shadow">
                        Learn More
                      </button>
                    </Link>
                  </div>
                </div>

                {/* Right Content: Image */}
                <div className="w-full md:w-1/2 mt-8 md:mt-0 flex justify-center">
                  <Link href="/target-page">
                    <Image
                      className="object-cover object-center rounded-lg shadow-2xl hover:scale-105 transform transition-transform duration-300"
                      alt="hero"
                      src={val.imageUrl}
                      width={500}
                      height={500}
                      style={{
                        maxWidth: "100%",
                        height: "auto",
                      }}
                    />
                  </Link>
                </div>
              </div>
            </section>
          );
        })}
      </div>
    </>
  );
}
