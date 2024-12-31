import { createClient } from "next-sanity";

const client = createClient({
  projectId: "qj1xbxi4", // Sanity project ID
  dataset: "production",     // Sanity dataset name
  useCdn: false,               // Disable CDN for real-time data
  apiVersion: "2024-12-26",    // API version (optional)
  token: process.env.SANITY_READ_TOKEN, // Token from environment variable
});

export { client };
