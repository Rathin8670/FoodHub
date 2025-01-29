import { RestaurantCard } from "./RestaurantCard"
import { useEffect, useState } from "react";
import { Shimmer } from "./Shimmer";
import { RESTAURENT_DATA_URL } from "../utils/contants";
import {Link} from "react-router-dom"

export const Body = () => {
    const [restaurants, setRestaurants] = useState([]);
    useEffect(() => {
    fetchData();
    },[]);

    const fetchData = async () => { 
        const response = await fetch(RESTAURENT_DATA_URL);
        const json = await response.json();
    
        //console.log(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);

        // when extract do optional chaining
        setRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        
    }
    return restaurants?.length==0 ? <Shimmer/>:(
        <div className='flex flex-wrap justify-center gap-4 p-4'>
            {
            restaurants.map((restaurant) => {
                return <Link 
                key={restaurant.info.id} 
                to={"/restaurent/"+restaurant.info.id}>
                <RestaurantCard restaurant={restaurant}  />
                </Link>;
            })
            }
        </div>
    )
}