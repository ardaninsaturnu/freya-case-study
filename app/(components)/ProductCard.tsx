import React from 'react';
import {Product} from "@/api/fetchProducts";
import Image from "next/image";
import useStore from "@/store";

const ProductCard : ({ item,page }: { item: Product, page: string }) => JSX.Element = ({ item, page}) => {
  const {toggleFavorite, favorites } = useStore(state => state );

  return (
    <div className="w-[170px] gap-2.5" key={item.id}>
      <div className="border border-[0.5px] border-[#D6D6D6] rounded-[5px] h-[186px] relative">
        <Image src={item?.images?.[0].includes('place') ? item?.category?.image : item?.images?.[0].replace(/^\["|"]$/g, '')  } alt={item?.title} fill className="object-cover object-center"/>
        {
          page !== 'recommendations' && (
            <div className="absolute top-[10px] right-[10px] w-6 h-6 flex justify-center items-center bg-white bg-opacity-60 rounded-xl bg-blur/1px cursor-pointer">
              <svg xmlns="http://www.w3.org/2000/svg" fill={ favorites?.includes(String(item.id)) ? '#E14621' : 'white' } viewBox="0 0 24 24" strokeWidth={1.5} stroke={ favorites?.includes(String(item?.id)) ? '#E14621' : 'white' } className="size-5" onClick={() => toggleFavorite(String(item.id))}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
              </svg>
            </div>
          )
        }
      </div>
      <p className="text-[12px] font-light leading-6 text-ellipsis whitespace-nowrap overflow-hidden">{item.title}</p>
      <p className="font-bold text-[12px] leading-6">{item.price}₺</p>
      <button className="rounded-[5px] bg-[#E14621] text-[12px] h-[30px] flex justify-center w-full items-center text-white">Sepete Ekle</button>
    </div>
  );
};

export default ProductCard;
