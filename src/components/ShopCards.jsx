import React from "react";
import { Link } from "react-router-dom";
import menImg from "../assets/p1.jpg";      
import womenImg from "../assets/p2.jpg";    
import kidsImg from "../assets/p6.jpg";     

export default function ShopCards() {
    return (
        <section className="bg-[#FAFAFA] py-16 px-4">
            <div className="container mx-auto text-center">
                <h2 className="text-[#252B42] font-bold text-2xl mb-2 uppercase">Editor's Pick</h2>
                <p className="text-[#737373] text-sm mb-12">Problems trying to resolve the conflict between</p>
                
                {/* 3'LÜ TEMİZ GRID */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 h-auto md:h-[500px]">
                    
                    {/* MEN */}
                    <Link to="/product/1" className="md:col-span-2 relative group overflow-hidden block shadow-sm rounded-lg">
                        <img src={menImg} alt="Men" className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
                        <div className="absolute bottom-8 left-8 bg-white px-10 py-3 font-bold text-[#252B42] uppercase tracking-widest group-hover:bg-[#23A6F0] group-hover:text-white transition-colors">
                            Men
                        </div>
                    </Link>

                    {/* WOMEN */}
                    <Link to="/product/2" className="md:col-span-1 relative group overflow-hidden block shadow-sm rounded-lg">
                        <img src={womenImg} alt="Women" className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
                        <div className="absolute bottom-8 left-8 bg-white px-8 py-3 font-bold text-[#252B42] uppercase tracking-widest group-hover:bg-[#23A6F0] group-hover:text-white transition-colors">
                            Women
                        </div>
                    </Link>

                    {/* KIDS */}
                    <Link to="/product/6" className="md:col-span-1 relative group overflow-hidden block shadow-sm rounded-lg">
                        <img src={kidsImg} alt="Kids" className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
                        <div className="absolute bottom-8 left-8 bg-white px-8 py-3 font-bold text-[#252B42] uppercase tracking-widest group-hover:bg-[#23A6F0] group-hover:text-white transition-colors">
                            Kids
                        </div>
                    </Link>

                </div>
            </div>
        </section>
    );
}