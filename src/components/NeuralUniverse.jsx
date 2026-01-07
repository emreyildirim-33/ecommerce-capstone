import React from "react";
import neuralImg from "../assets/neural-universe.png";

export default function NeuralUniverse() {
  return (
    <div className="bg-white py-16">
      <div className="container mx-auto flex flex-col-reverse md:flex-row items-center gap-8">
        
        {/* SOL TARAF: RESİM */}
        <div className="md:w-1/2">
            <img 
                src={neuralImg} 
                alt="Neural Universe" 
                className="w-full h-full object-cover object-center" 
            />
        </div>

        {/* SAĞ TARAF: YAZILAR */}
        <div className="md:w-1/2 flex flex-col gap-6 text-center md:text-left items-center md:items-start">
            <h5 className="text-gray-400 font-bold text-[16px]">SUMMER 2020</h5>
            
            <h1 className="text-slate-800 font-bold text-[40px] md:text-[50px] leading-tight">
                Part of the Neural Universe
            </h1>
            
            <p className="text-gray-500 text-[20px] max-w-[380px]">
                We know how large objects will act, but things on a small scale.
            </p>

            {/* BUTONLAR (Yan Yana) */}
            <div className="flex flex-col md:flex-row gap-4 mt-4">
                {/* Yeşil Buton */}
                <button className="bg-[#2DC071] text-white px-10 py-4 rounded-md font-bold uppercase hover:bg-green-600 transition duration-300">
                    BUY NOW
                </button>
                
                {/* Beyaz Buton (Yeşil Çerçeveli) */}
                <button className="bg-white text-[#2DC071] border-2 border-[#2DC071] px-10 py-4 rounded-md font-bold uppercase hover:bg-gray-50 transition duration-300">
                    READ MORE
                </button>
            </div>

        </div>

      </div>
    </div>
  );
}