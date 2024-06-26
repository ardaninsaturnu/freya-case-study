import React from "react";
import fetchProducts from "@/api/fetchProducts";
import {Listing} from "@/app/(components)/Listing";

export default async function Recommendation() {
  const products = await fetchProducts();

  return (
    <Listing productData={products} page={"recommendations"}/>
  );
}
