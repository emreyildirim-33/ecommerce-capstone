import React from "react";
import men from "../assets/men.jpg";
import women from "../assets/women.jpg";
import kıds from "../assets/kıds.jpg";
import accessories from "../assets/accessories.jpg";

export default function ShopCards() { 
    return ( 
    <div className="w-full bg-[#FAFAFA] py-12 ">

        <div className="container mx-auto px-4">
            <div className="flex flex-col items-center gap-3 mb-12 text-center">
            <h3 className="text-slate-800 font-bold text-2xl uppercase">EDITOR'S PICK</h3>
            <p  className="text-gray-500 font-normal">Problems trying to resolve the conflict between</p>
            </div>
        <div className="flex flex-col md:flex-row gap-4 h-[500px]">

         <div className="md:w-[48%] h-full relative ">
            <img src={men} className=" w-full h-full object-cover "/>
            <div className="absolute bottom-5 left-5 bg-white px-6 py-3 font-bold">
            MEN
            </div>
        </div>

         <div className="md:w-[24%] h-full relative">
            <img src={women} className=" w-full h-full object-cover"/>
            <div className="absolute bottom-5 left-5 bg-white px-6 py-3 font-bold ">
            WOMEN
            </div>
        </div>

         <div className="md:w-[24%] h-full flex flex-col gap-4">
        
         <div className="h-[48%] w-full relative">
            <img src={kıds} className="  w-full  h-full object-cover" />
            <div className="absolute bottom-5 left-5 bg-white px-4 py-2 font-bold ">
            KIDS
            </div>
        </div>

        <div className="h-[48%] w-full relative">
            <img src={accessories} className="  w-full h-full object-cover"/>
            <div className="absolute bottom-5 left-5 bg-white px-4 py-2 font-bold">
            ACCESSORİES
            </div>

            </div>

            </div>
            
        </div>
        </div>
    </div>

    );
}
    