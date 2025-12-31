import React, { useState } from "react";
import { Search, ShoppingCart, Menu, User, Heart } from "lucide-react"; 
import { Link } from "react-router-dom";

export default function Header() { 
    const [isOpen, setIsOpen] = useState(false);
    
    return ( 
    <header className=" bg-white relative">
     <div className="flex justify-between items-center p-4 container mx-auto"> 
        
       
        <div>
          <Link to="/" className="font-bold text-2xl text-slate-800">
           Bandage
           </Link>
        </div>

       
       <nav className="hidden md:flex gap-6 font-bold text-slate-500 text-sm"> 
            <Link to="/" className="hover:text-slate-800">Home</Link>
            <Link to="/shop" className="hover:text-slate-800">Shop</Link>
            <Link to="/about" className="hover:text-slate-800">About</Link>
            <Link to="/blog" className="hover:text-slate-800">Blog</Link>
            <Link to="/contact" className="hover:text-slate-800">Contact</Link>
            <Link to="/pages" className="hover:text-slate-800">Pages</Link>
        </nav>

       
        <div className="flex gap-4 text-slate-600 items-center">
         
        
         <div className="hidden md:flex items-center gap-2 text-blue-500 font-bold cursor-pointer hover:text-blue-600">
            <User size={16} />
            <Link to="/login" className="text-sm">Login / Register</Link>
         </div>

        
         <button onClick={() => setIsOpen(!isOpen)} className="hover:text-blue-500">
            <Search />
         </button>
         
        
         <div className="relative cursor-pointer hover:text-blue-500">
             <ShoppingCart />
             <span className="absolute -right-2 -top-2 text-[10px] text-white bg-blue-500 rounded-full w-4 h-4 flex items-center justify-center font-normal">1</span> {/* Sayıyı yuvarlak içine aldım */}
         </div>

         
         <div className="hidden md:flex relative cursor-pointer hover:text-blue-500">
             <Heart />
             <span className="absolute -right-2 -top-2 text-[10px] text-white bg-blue-500 rounded-full w-4 h-4 flex items-center justify-center font-normal">1</span>
         </div>

        
         <button onClick={() =>  setIsOpen(!isOpen)} className="md:hidden hover:text-blue-500">
            <Menu />
         </button>
         
         </div>
        </div>
         
        
         {isOpen && ( 
         <div className="bg-white border-t border-slate-200 flex flex-col items-center gap-8 py-8 text-3xl text-slate-500 font-normal w-full animate-in slide-in-from-top-5 duration-300"> 
            
            <div className="flex flex-col items-center gap-6 mb-4">
                <span className="font-bold text-slate-800">Explore</span>
                <Link to="/login" onClick={() => setIsOpen(false)}>Login</Link>
                <Link to="/register" onClick={() => setIsOpen(false)}>Sign-up</Link>
            </div>
            
            <div className="w-[80%] flex flex-col gap-4 mb-6 ">
                <input type="text" placeholder="Search" className="bg-slate-50 border border-slate-200 rounded-md p-4 text-slate-500 "/> 
                <select className="bg-slate-50 border border-slate-200 rounded-md p-4 text-slate-500">
                    <option>Category</option>
                </select>
                <button className="bg-blue-500 text-white rounded-md p-4 flex justify-center items-center "> <Search/> </button>
            </div>
            
            <Link to = "/" className="hover:text-slate-800">Home</Link>
            <Link to = "/shop" className="hover:text-slate-800">Shop</Link>
            <Link to = "/about" className="hover:text-slate-800">About</Link>
            <Link to = "/blog" className="hover:text-slate-800">Blog</Link>
            <Link to="/contact" className="hover:text-slate-800">Contact</Link>
            <Link to = "/pages" className="hover:text-slate-800">Pages</Link>
            
            <Link to = "/login" className="text-blue-500 font-bold flex items-center gap-2 mt-4 hover:text-blue-600"
            onClick={() => setIsOpen(false)}
            >
                <User /> Login / Register
            </Link>

            <div className="flex flex-col items-center gap-6 text-blue-500 mt-4 pb-12">
                <Search size={30} /> 
                
                <div className="relative">
                    <ShoppingCart size={30} />
                    <span className="absolute -right-2 -top-2 text-xs bg-blue-500 text-white rounded-full px-1">1</span>
                </div>
                <div className="relative">
                    <Heart size={30} />
                    <span className="absolute -right-2 -top-2 text-xs bg-blue-500 text-white rounded-full px-1">1</span>
                </div>
            </div>
         </div>
         )}
        </header>
    );
}