"use client";

import { useState, useEffect } from "react";
import { client } from "@/sanity/lib/client";
import Image from "next/image";

// Server-side function for fetching product data
async function fetchProductData(id: string) {
  const fetchData = await client.fetch(
    `*[_type == "products" && _id == $id]{
      _id, 
      title, 
      description, 
      "imageUrl": image.asset->url
    }`,
    { id }
  );
  return fetchData[0];
}

export default function ProductDetails({ params }: { params: { id: string } }) {
  const [product, setProduct] = useState<any>(null);
  const [comments, setComments] = useState<string[]>([]);
  const [newComment, setNewComment] = useState<string>("");

  const { id } = params;

  // Fetch product data on client-side
  useEffect(() => {
    const loadProduct = async () => {
      try {
        const data = await fetchProductData(id);
        setProduct(data);
      } catch (error) {
        console.error("Failed to fetch product data:", error);
      }
    };
    loadProduct();
  }, [id]);

  if (!product) {
    return <div className="text-white">Loading...</div>;
  }

  const handleCommentSubmit = () => {
    if (newComment.trim() !== "") {
      setComments([...comments, newComment]);
      setNewComment("");
    }
  };

  const handleCommentDelete = (index: number) => {
    const updatedComments = comments.filter((_, i) => i !== index);
    setComments(updatedComments);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-black p-12 text-white">
      <div className="flex flex-col md:flex-row items-center space-x-8">
        {/* Left: Product Image */}
        <div className="relative w-full md:w-1/2">
          <Image
            src={product.imageUrl}
            alt={product.title}
            width={400}
            height={400}
            className="object-cover rounded-lg shadow-xl"
          />
        </div>

        {/* Right: Product Details */}
        <div className="text-center md:text-left md:w-1/2 mt-8 md:mt-0">
          <h2 className="text-3xl font-bold text-yellow-300">{product.title}</h2>
          <p className="text-lg text-gray-300 mt-4">{product.description}</p>

          {/* Comment Section */}
          <div className="mt-6">
            <h3 className="text-xl text-yellow-300">Comments</h3>
            <textarea
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              placeholder="Add a comment..."
              className="w-full p-2 mt-4 text-gray-900 rounded-lg"
            />
            <button
              onClick={handleCommentSubmit}
              className="w-full bg-gradient-to-r from-green-500 to-blue-500 text-white py-2 mt-4 rounded-lg hover:scale-105 transform transition-transform duration-300"
            >
              Submit Comment
            </button>

            {/* Display Comments */}
            <ul className="mt-4 space-y-2">
              {comments.map((comment, index) => (
                <li
                  key={index}
                  className="flex justify-between items-center bg-gray-700 p-2 rounded-lg"
                >
                  <span className="text-gray-300">{comment}</span>
                  <button
                    onClick={() => handleCommentDelete(index)}
                    className="text-red-500 hover:text-red-700"
                  >
                    Delete
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
