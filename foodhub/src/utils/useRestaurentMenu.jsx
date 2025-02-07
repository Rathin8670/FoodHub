import { useEffect, useState } from "react";
import { MENU_URL } from "./contants";

export const useRestaurentMenu=(resId)=>{
    const [resInfo,setResInfo]=useState(null);

    useEffect(()=>{
        fetchMenu()
        },[])

    const fetchMenu=async()=>{
        const data=await fetch(MENU_URL+resId)
        const json=await data.json()

        console.log(json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards)
        //setResInfo(json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards)
        setResInfo(json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards)
    }

    return resInfo;
}