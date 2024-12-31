"use client"; // Mark as a client component

import Image from "next/image";
import Link from "next/link";
import { client } from "@/sanity/lib/client";
import { useState, useEffect } from "react";

export default function Product() {
  const [data, setData] = useState<any[]>([]); // Defaulting to an empty array
  const [selectedProduct, setSelectedProduct] = useState<any | null>(null);
  const [comments, setComments] = useState<string[]>([]);

  // Fetch product data when the component mounts
  useEffect(() => {
    async function fetchData() {
      const fetchData = await client.fetch(
        `*[_type == "products"]{
          _id, 
          title, 
          description,
          "imageUrl": image.asset->url
        }`
      );
      setData(fetchData || []); // Ensure we set an empty array if no data is returned
    }

    fetchData(); // Call fetchData when the component mounts
  }, []); // Empty dependency array means it runs only once when the component mounts

  // Handle selecting a product
  const handleSelectProduct = (product: any) => {
    setSelectedProduct(product);
  };

  // Add comment function
  const handleAddComment = (comment: string) => {
    if (comment) {
      setComments([...comments, comment]);
    }
  };

  // Delete comment function
  const handleDeleteComment = (index: number) => {
    const newComments = comments.filter((_, i) => i !== index);
    setComments(newComments);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-black p-6 md:p-12 text-white">
      {!selectedProduct ? (
        <div className="grid gap-8 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
          {data.length > 0 ? (
            data.map((val: any) => (
              <div
                key={val._id}
                className="w-full bg-gray-800 border border-gray-700 rounded-lg shadow-xl overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
              >
                {/* Image Section */}
                <div className="relative h-[200px] w-full">
                  <Image
                    className="object-cover"
                    src={val.imageUrl}
                    alt={val.title}
                    fill
                  />
                </div>

                {/* Content Section */}
                <div className="p-6 flex flex-col justify-between h-[220px]">
                  <h5 className="text-xl font-bold mb-2 text-yellow-300">
                    {val.title}
                  </h5>
                  <p className="text-sm text-gray-300 mb-4 line-clamp-3">
                    {val.description}
                  </p>
                  <button
                    onClick={() => handleSelectProduct(val)}
                    className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium bg-gradient-to-r from-purple-500 to-indigo-500 text-white rounded-lg hover:from-purple-600 hover:to-indigo-600 focus:ring-2 focus:ring-purple-400"
                  >
                    Read more
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p>Loading...</p> // Show loading message if data is not yet loaded
          )}
        </div>
      ) : (
        <div className="p-6 bg-gray-800 rounded-lg shadow-xl max-w-4xl mx-auto">
          <button
            onClick={() => setSelectedProduct(null)}
            className="text-white bg-purple-600 hover:bg-purple-700 py-2 px-4 rounded mb-4"
          >
            Back to Products
          </button>
          <h2 className="text-2xl font-bold text-yellow-300">{selectedProduct.title}</h2>
          
          {/* Image Section */}
          <div className="flex justify-center my-4">
            <Image
              src={selectedProduct.imageUrl}
              alt={selectedProduct.title}
              width={600}
              height={400}
              className="rounded-lg shadow-2xl"
            />
          </div>

          <p className="text-gray-300 mb-4">{selectedProduct.description}</p>

          {/* Comment Section */}
          <div className="mt-6">
            <h3 className="text-xl font-bold text-yellow-300">Comments</h3>
            <textarea
              className="w-full mt-2 p-2 rounded-md text-yellow-600"
              placeholder="Add your comment"
              onBlur={(e) => handleAddComment(e.target.value)}
            ></textarea>

            <div className="mt-4">
              {comments.map((comment, index) => (
                <div key={index} className="bg-gray-700 p-4 my-2 rounded-md">
                  <p className="text-gray-300">{comment}</p>
                  <button
                    onClick={() => handleDeleteComment(index)}
                    className="bg-red-500 text-white py-1 px-3 rounded mt-2"
                  >
                    Delete Comment
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Update and Delete buttons (you can adjust these functions later) */}
          <div className="mt-4 flex space-x-4">
            <button className="bg-yellow-500 text-white py-2 px-4 rounded mr-2 w-full sm:w-auto">
              Update Comment
            </button>
            <button className="bg-red-500 text-white py-2 px-4 rounded w-full sm:w-auto">
              Delete Comment
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
