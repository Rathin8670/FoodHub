import { Shimmer } from "../components/Shimmer"
import { MenuItems } from "../components/MenuItems"
import { useParams } from "react-router-dom"
import { useRestaurentMenu } from "../utils/useRestaurentMenu"

export const RestaurentMenu=()=>{

    const {resId}=useParams();
    //console.log(resId)
    const resInfo=useRestaurentMenu(resId);

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