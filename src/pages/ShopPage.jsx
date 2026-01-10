import React from "react";

export default function ShopPage() { 
    const categories = [
    { id: 1, title: "CLOTHS", count: "5 Items", img: "https://images.pexels.com/photos/298863/pexels-photo-298863.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
    { id: 2, title: "CLOTHS", count: "5 Items", img: "https://images.pexels.com/photos/298863/pexels-photo-298863.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
    { id: 3, title: "CLOTHS", count: "5 Items", img: "https://images.pexels.com/photos/298863/pexels-photo-298863.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
    { id: 4, title: "CLOTHS", count: "5 Items", img: "https://images.pexels.com/photos/298863/pexels-photo-298863.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
    { id: 5, title: "CLOTHS", count: "5 Items", img: "https://images.pexels.com/photos/298863/pexels-photo-298863.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
];
    return ( 
        <div >
            <div className="bg-[#FAFAFA] py-6">
                <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
                    <h3 className="font-bold text-slate-800 text-2xl">Shop</h3>
                    <div className="flex gap-2">
                        <a href="/" className="text-[#252B42] hover:text-[#23A6F0]">Home</a>
                        <span className="text-[BDBDBD]">{">"}</span>
                        <span className="text-[BDBDBD]">Shop</span>
                        </div>

                      </div>
                    </div>

                    <div className="container mx-auto px-4 py-10">
                        <p className="bg-[#FAFAFA] pb-12 container mx-auto grid-cols-1 md:grid-cols-5 gap-4">Kategoriler Buraya Gelecek...</p>
                        </div>

                        </div>
    )
}
