import React from "react";

export default function ProductCard({ image, title = "Graphic Design", price = "$6.48" }) {
    return (
        <div className="flex flex-col items-center gap-4 pb-6 group cursor-pointer">
            {/* Resim Alanı */}
            <div className="w-full h-[300px] overflow-hidden rounded-sm">
                <img 
                    src={image} 
                    alt={title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-500" 
                />
            </div>

            {/* Bilgi Alanı */}
            <div className="flex flex-col items-center gap-2 px-4 text-center">
                <h5 className="font-bold text-slate-800 text-lg">{title}</h5>
                <p className="text-gray-500 font-bold text-sm">English Department</p>
                
                <div className="flex gap-2 font-bold">
                    <span className="text-gray-400 line-through">$16.48</span>
                    <span className="text-[#23856D]">{price}</span>
                </div>

                <div className="flex gap-2 mt-1">
                    <span className="w-4 h-4 rounded-full bg-blue-500"></span>
                    <span className="w-4 h-4 rounded-full bg-green-500"></span>
                    <span className="w-4 h-4 rounded-full bg-orange-500"></span>
                    <span className="w-4 h-4 rounded-full bg-slate-800"></span>
                </div>
            </div>
        </div>
    );
}