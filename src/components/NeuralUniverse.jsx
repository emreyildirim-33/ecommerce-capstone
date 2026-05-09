import React, { useState } from "react";
import { Link } from "react-router-dom";
import neuralImg from "../assets/neural-universe.png";

export default function NeuralUniverse() {
  // Read More metnini açıp kapatmak için state
  const [isReadMoreOpen, setIsReadMoreOpen] = useState(false);

  return (
    <div className="bg-white py-16 font-['Montserrat']">
      <div className="container mx-auto flex flex-col-reverse md:flex-row items-center gap-8 px-4">
        
        {/* LEFT SIDE: IMAGE */}
        <div className="md:w-1/2">
            <img 
                src={neuralImg} 
                alt="Neural Universe" 
                className="w-full h-full object-contain" 
            />
        </div>

        {/* RIGHT SIDE: TEXT CONTENT */}
        <div className="md:w-1/2 flex flex-col gap-6 text-center md:text-left items-center md:items-start">
            <h5 className="text-gray-400 font-bold text-[16px] uppercase tracking-widest">SUMMER 2020</h5>
            
            <h1 className="text-slate-800 font-bold text-[40px] md:text-[50px] leading-tight">
                Part of the Neural Universe
            </h1>
            
            <p className="text-gray-500 text-[20px] max-w-[380px]">
                We know how large objects will act, but things on a small scale.
            </p>

            {/* DYNAMIC DESCRIPTION (English Version) */}
            {isReadMoreOpen && (
                <div className="bg-[#f9f9f9] p-4 rounded-md border-l-4 border-[#2DC071] animate-in fade-in duration-500 shadow-sm">
                    <p className="text-sm text-slate-600 leading-relaxed italic">
                        "This collection blends classic design with cutting-edge textile technology. 
                        Its unique fiber structure ensures optimal comfort across all seasons, 
                        crafted to be an essential staple in your minimalist wardrobe."
                    </p>
                </div>
            )}

            {/* ACTION BUTTONS */}
            <div className="flex flex-col md:flex-row gap-4 mt-4 w-full md:w-auto">
                {/* BUY NOW: Redirects to the closest match product (ID: 10) */}
                <Link 
                    to="/product/10" 
                    className="bg-[#2DC071] text-white px-10 py-4 rounded-md font-bold uppercase hover:bg-green-600 transition duration-300 no-underline text-center shadow-md active:scale-95"
                >
                    BUY NOW
                </Link>
                
                {/* READ MORE: Toggles the detailed description */}
                <button 
                    onClick={() => setIsReadMoreOpen(!isReadMoreOpen)}
                    className="bg-white text-[#2DC071] border-2 border-[#2DC071] px-10 py-4 rounded-md font-bold uppercase hover:bg-gray-50 transition duration-300 shadow-sm active:scale-95"
                >
                    {isReadMoreOpen ? "SHOW LESS" : "READ MORE"}
                </button>
            </div>
        </div>
      </div>
    </div>
  );
}