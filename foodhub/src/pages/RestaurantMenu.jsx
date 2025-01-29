import { useEffect, useState } from "react"
import { Shimmer } from "../components/Shimmer"
import { MENU_URL } from "../utils/contants"
import { MenuItems } from "../components/MenuItems"
import { useParams } from "react-router-dom"

export const RestaurentMenu=()=>{

    const [resInfo,setResInfo]=useState(null) // when api call done it will update that's why we need this state variable here

    const {resId}=useParams();
    console.log(resId)
    
    useEffect(()=>{
        fetchMenu()
    },[])

    const fetchMenu=async()=>{
        const data=await fetch(MENU_URL+resId+"&catalog_qa=undefined&submitAction=ENTER")

        const json=await data.json()

        console.log(json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[4]?.card?.card?.itemCards)

        //setResInfo(json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards)
        setResInfo(json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[4]?.card?.card?.itemCards)
    }

    if(resInfo===null){
        return <Shimmer/>
    }
    
    
    return (
        <>
        <div className="min-h-screen flex flex-col">
        {   
            resInfo.map((item) => (<MenuItems key={item.card.info.id} item={item.card.info} />))

        }
        </div>
        </>
    )
}