// schemas/product.ts
export const products = {
    title: "Product",
    name: "products",
    type: "document",
    fields: [
      {
        title: "Product Title",
        name: "title",
        type: "string",
      },
      {
        title: "Product Description",
        name: "description",
        type: "string",
      },
      {
        title: "Product Image",
        name: "image",
        type: "image",
      },
    ],
  };
  