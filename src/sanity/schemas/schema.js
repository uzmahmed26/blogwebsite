// schemas/schema.js
import createSchema from "part:@sanity/base/schema-creator";
import schemaTypes from "all:part:@sanity/base/schema-type";
import products from "../schemas/product";

// Import custom product schema
// import { product } from "./product";  

export default createSchema({
  name: "default",
  types: schemaTypes.concat([products]),
});
