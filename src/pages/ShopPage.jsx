import React from "react";
import img1 from "../assets/c1.jpg";
import img2 from "../assets/c2.jpg";
import img3 from "../assets/c3.jpeg";
import img4 from "../assets/c4.jpg";
import img5 from "../assets/c5.jpg";

export default function ShopPage() { 
    const categories = [
        { id: 1, title: "CLOTHS", count: "5 Items", img: img1},
        { id: 2, title: "CLOTHS", count: "5 Items", img: img2},
        { id: 3, title: "CLOTHS", count: "5 Items", img: img3},
        { id: 4, title: "CLOTHS", count: "5 Items", img: img4},
        { id: 5, title: "CLOTHS", count: "5 Items", img: img5},
    ];

    return ( 
        
        <div className="bg-white">
            
            
            <div className="bg-[#FAFAFA] py-6">
                <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-4">
                    <h3 className="font-bold text-slate-800 text-2xl">Shop</h3>
                    <div className="flex gap-2 text-sm font-bold">
                        <a href="/" className="text-[#252B42] hover:text-[#23A6F0]">Home</a>
                        <span className="text-[#BDBDBD]">{">"}</span>
                        <span className="text-[#BDBDBD]">Shop</span>
                    </div>
                </div>
            </div>

            
            <div className="bg-[#FAFAFA] pb-12">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                        {categories.map((cat) => ( 
                            <div key={cat.id} className="relative w-full h-[300px] cursor-pointer hover:shadow-lg transition group overflow-hidden rounded-md">
                                <img 
                                    src={cat.img}
                                    className="w-full h-full object-cover object-[center_top] group-hover:scale-110 transition duration-500"
                                    alt={cat.title}
                                />
                                <div className="absolute inset-0 flex flex-col justify-center items-center text-white bg-black/25 group-hover:bg-black/40 transition">
                                    <h5 className="font-bold text-base uppercase">{cat.title}</h5>
                                    <p className="text-sm">{cat.count}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            
            <div className="bg-white py-6 border-b border-gray-200">
                <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-4 px-4">
                    
                    
                    <div className="font-bold text-gray-500">
                        Showing all 12 results
                    </div>

                    
                    <div className="flex items-center gap-4">
                        <span className="font-bold text-gray-500">Views:</span>
                        <div className="flex gap-2">
                            <button className="border border-gray-200 w-10 h-10 flex justify-center items-center rounded hover:bg-gray-100 text-gray-700">
                                <i className="fa-solid fa-table-cells text-lg"></i>
                            </button>
                            <button className="border border-gray-200 w-10 h-10 flex justify-center items-center rounded hover:bg-gray-100 text-gray-700">
                                <i className="fa-solid fa-list text-lg"></i>
                            </button>
                        </div>
                    </div>

                    
                    <div className="flex gap-4">
                        <select className="border border-gray-200 bg-[#F9F9F9] px-4 py-3 rounded text-gray-500 focus:outline-none">
                            <option>Popularity</option>
                            <option>Price: Low to High</option>
                            <option>Price: High to Low</option>
                        </select>
                        <button className="bg-[#23A6F0] text-white px-5 py-3 rounded font-bold hover:bg-blue-600 transition">
                            Filter
                        </button>
                    </div>

                </div>
            </div>

        </div> 
    );
}