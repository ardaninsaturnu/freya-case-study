"use client"
import * as React from 'react';
import ProductCard from "@/app/(components)/ProductCard";
import {Product} from "@/api/fetchProducts";
import {useEffect} from "react";
import useStore from "@/store";

type Props = {
    productData: Product[];
    page: string;
};

export function Listing({ productData, page }: Props) {
  const {setProducts,products} = useStore((state) => state);

  useEffect(() => {
    setProducts(productData);
  },[])

  return (
    <div className="flex gap-5 flex-wrap px-5 max-w-[970px] mx-auto justify-center md:justify-start">
      {
        products?.map(( item,index: number ) => {
          return <ProductCard item={item} key={index} page={page} />
        })
      }
    </div>
  );
};
