"use client"

import Link from "next/link";
import { categoryItems } from "../lib/categoryItems";
import Image from "next/image";
import { usePathname, useSearchParams } from "next/navigation";
import { useCallback } from "react";
import { cn } from "@/lib/utils";

export function MapFilterItems(){

    const searchParm = useSearchParams();
    const search = searchParm.get("filter");

    const pathName = usePathname();

    const createQueryString = useCallback(
        (name:string, value: string) =>{
            const params = new URLSearchParams(searchParm.toString());

            params.set(name,value);

            return params.toString();
        },
        [searchParm]
    )

    return(
        <div className="flex gap-x-10 mt-5 w-full overflow-x-scroll no-scrollbar">
           {categoryItems.map((item) =>(
            <Link key={item.id} href={
                pathName + "?" + createQueryString("filter",item.name)}
                className={
                    cn(
                        search === item.name
                        ? "border-b-2 border-black pb-2 flex-shrink-0"
                        : "opacity-70 flex-shrink-0",
                        "flex flex-col gap-y-3 items-center"
                    )
                }>
                <div className="relative w-6 h-6">
                    <Image src={item.imageUrl}
                    alt="Category Image"
                    className="w-6 h-6"
                    width={24}
                    height={24}/>

                </div>
                <p className="text-xs font-medium">{item.title}</p>
            </Link>
           ))}
        </div>
    )
}