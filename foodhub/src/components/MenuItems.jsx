import { IMG_CDN_URL } from "../utils/contants"

export const MenuItems=({item})=>{
    return (
        <div className="flex justify-between items-center border-b m-20 pb-4">
        {/* Left Side: Name, Price, Rating */}
        <div>
            <img src={IMG_CDN_URL+item.imageId} alt={item.name} className="w-20 h-20 rounded-md object-cover" />
            <h3 className="text-lg font-semibold">{item.name}</h3>
            <p className="text-gray-700">₹{item.price/100}</p>
            <p className="text-green-600 text-sm">⭐ {item.ratings.aggregatedRating.rating} ({item.reviews})</p>
        </div>

        {/* Right Side: Image & Add Button */}
        <div className="relative">
            <img src={IMG_CDN_URL+item.imageId} alt={item.name} className="w-15 h-15 rounded-md object-cover" />
            <button className="absolute bottom-0 left-1/2 transform -translate-x-1/2 bg-white text-green-600 font-bold px-3 py-1 rounded shadow-md">
            ADD
            </button>
        </div>
    </div>
    )
}