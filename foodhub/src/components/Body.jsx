import { RestaurantCard } from "./RestaurantCard"
import { Shimmer } from "./Shimmer";
import { Link } from "react-router-dom"
import { useRestaurentData } from "../utils/useRestaurentData";
import { CardLists } from "./CardLists";

export const Body = (searchText) => {

    const [restaurants,filterRestaurents] = useRestaurentData(searchText);

    return (
        <div>
            <CardLists restaurants={restaurants}/> 
        </div>
    )
}