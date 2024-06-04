"use client"
import React from 'react';
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {usePathname} from "next/navigation";
import useStore from "@/store";

const FilterHeader = () => {
  const pathname = usePathname();
  const { products, setSortIncreasing, setSortDecreasing } = useStore( state => state );

  return (
    <div className="flex my-4 mx-5 justify-between">
      <div className="hidden md:block"></div>
       <div className="flex gap-5">
         <Link href="/" className={`${ pathname === '/' ? 'text-orange-500 border-b border-b-2 border-b-orange-500 font-medium' : 'opacity-50' }`}>Öneriler</Link>
         <Link href="/Favorites" className={`${ pathname === '/Favorites' ? 'text-orange-500 border-b border-b-2 border-b-orange-500 font-medium' : 'opacity-50' }`}>Favoriler</Link>
       </div>
       <div>
       <DropdownMenu>
         <DropdownMenuTrigger className="flex gap-5 text-[12px] font-normal leading-4 items-center justify-end p-2.5 border-[0.5px] border-solid border-[#D6D6D6] rounded-[10px]">
           Filtrele
           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-3">
             <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
           </svg>
         </DropdownMenuTrigger>
         <DropdownMenuContent align={"start"}>
           <DropdownMenuItem onClick={() => setSortIncreasing(products)}>Artan Fiyat</DropdownMenuItem>
           <DropdownMenuItem onClick={() => setSortDecreasing(products)}>Azalan Fiyat</DropdownMenuItem>
         </DropdownMenuContent>
       </DropdownMenu>
       </div>
    </div>
  );
};

export default FilterHeader;
