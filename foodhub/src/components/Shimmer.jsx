import { ShimmerCard } from "./ShimmerCard";

export const Shimmer = () => {
    return (
        <div className='flex flex-wrap justify-center gap-4 p-4'>
            {Array(12).fill("").map((e, index) => (
                <ShimmerCard key={index}/>
            ))}
        </div>
    );
};
