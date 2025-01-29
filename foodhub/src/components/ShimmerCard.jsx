import React from "react";

export const ShimmerCard = (key) => {
    return (
        <div className="w-full md:w-80 bg-white rounded-2xl shadow-md animate-pulse">
        <div className="h-48 bg-gray-300 rounded-t-2xl"></div>
        <div className="p-4">
            <div className="h-6 bg-gray-300 rounded w-3/4"></div>
            <div className="flex items-center mt-2 space-x-2">
            <div className="h-4 bg-gray-300 rounded w-6"></div>
            <div className="h-4 bg-gray-300 rounded w-12"></div>
            <div className="h-4 bg-gray-300 rounded w-16"></div>
            </div>
            <div className="h-4 bg-gray-300 rounded w-full mt-2"></div>
        </div>
        </div>
    );
};
