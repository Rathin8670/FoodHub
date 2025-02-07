import { useEffect, useState } from "react"
import { restaurantList } from "./contants"

export const useRestaurentData=(searchText)=>{
    const [restaurent,setRestaurent]=useState([])
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);

    useEffect(()=>{
        setRestaurent(restaurantList),
        setFilteredRestaurants(restaurantList); // Initialize both lists
    },[])

    useEffect(() => {
        // Update filteredRestaurants whenever searchText changes
        const filtered = restaurantList.filter((restaurant) =>
            restaurant?.data?.name?.toLowerCase()?.includes(searchText.toLowerCase())
        );
        setFilteredRestaurants(filtered);
    }, [searchText, restaurantList]); // Re-run when searchText or restaurants update

    return [restaurent,filteredRestaurants];
}