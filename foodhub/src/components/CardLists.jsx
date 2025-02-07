import { Shimmer } from "./Shimmer";
import { RestaurantCard } from "./RestaurantCard";
import { Link } from "react-router-dom";

export const CardLists=(props)=>{
    const {restaurants}=props;

    return restaurants?.length==0 ? <Shimmer/>:(
        <div className='flex flex-wrap justify-center gap-4 p-4'>
            {
            restaurants?.map((restaurant) => {
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