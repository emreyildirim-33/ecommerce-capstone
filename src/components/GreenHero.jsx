import React from "react";
import greenHeroImg from "../assets/green-hero.png";

export default function GreenHero () { 
    return ( 
    <div className="bg-[#23856D] pt-20 px-4">
     <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">

     <div className="text-white flex flex-col gap-6 md:items-start text-center md:text-left">
     <h5 className="text-[16px] font-bold">SUMMER 2020</h5>
     <h1 className="text-[58px] font-bold leading-tihgt ">Vita Classic Product</h1>
     <p className="max-w-[340px] text-[14px]">We know how large objects will act.We know how are objects will act.We know</p>
      
     <div className="flex items-center gap-8 ">
      <h3 className="text-2xl font-bold ">$16.48</h3>
      <button className="bg-[#2DC071] px-10 py-4 rounded-md uppercase font-bold">Add to Cart</button>
      </div>
      </div>

      <div className="relative pt-12 md:pt-0">
      <img src={greenHeroImg} className="w-full h-full object-contain" />
      </div>

      </div>
      </div>

    );
}