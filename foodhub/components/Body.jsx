import { RestaurantCard } from "./RestaurantCard"
import { useEffect, useState } from "react";

export const Body = () => {
    const [restaurants, setRestaurants] = useState([]);
    useEffect(() => {
    fetchData();
    },[]);

    const fetchData = async () => { 
        const response = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.9544908&lng=88.3792554&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json = await response.json();
    
        //console.log(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);

        // when extract do optional chaining
        setRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        
    }
    return (
        <div className='flex flex-wrap justify-center gap-4 p-4'>
            {
            restaurants.map((restaurant) => {
                return <RestaurantCard restaurant={restaurant} key={restaurant.info.id} />;
            })
            }
        </div>
    )
}