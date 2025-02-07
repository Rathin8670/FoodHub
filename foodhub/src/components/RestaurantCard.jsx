import { Star } from 'lucide-react';
import { IMG_CDN_URL } from '../utils/contants';


export const RestaurantCard = ({ restaurant }) => {
    const {cuisines}=restaurant.info;
    //console.log(cuisines);
    
    return (
      <div className="w-full md:w-80 bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer">
        <div className="h-48 bg-gray-200 rounded-t-2xl overflow-hidden">
          <img src={IMG_CDN_URL+restaurant.info.cloudinaryImageId}
            alt={restaurant.info.name}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="p-4">
          <h2 className="text-lg font-bold text-gray-800 truncate">
            {restaurant.info.name}
          </h2>
          <div className="flex items-center text-sm text-gray-600 mt-1">
            <Star className="w-4 h-4 text-yellow-500" />
            <span className="ml-1 font-medium">{restaurant.info.avgRating}</span>
            <span className="mx-2">&bull;</span>
            <span className="text-sm text-gray-500 mt-2">
              {restaurant.info.sla.deliveryTime} mins
            </span>
          </div>
    
          <div className="text-md text-gray-800 mt-2 truncate">
            {cuisines.join(", ")}
          </div>
        </div>
      </div>
    );
  };
  