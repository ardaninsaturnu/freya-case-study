import React from 'react';
import fetchProducts from "@/api/fetchProducts";
import {Listing} from "@/app/(components)/Listing";

async function Page() {
  const products = await fetchProducts();

  return (
    <Listing productData={products} page="favorites" />
  );
}

export default Page;
