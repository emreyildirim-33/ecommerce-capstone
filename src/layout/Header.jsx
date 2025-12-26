import React from "react";
import { Search,ShoppingCart,Menu,User } from "lucide-react";
import { Link } from "react-router-dom";
export default function Header () { 
    return ( 
    <header className="bg-white">
     
     <div className="flex justify-between items-center p-4">
        <div>
          <Link to="/" className="font-bold text-2xl text-slate-800">
           Bandage
           </Link>
           </div>
        <div className="flex gap-4 text-slate-600">
         <Search />
         <ShoppingCart />
         <Menu />
         </div>
        </div>

         <div className="flex flex-col items-center gap-8 py-8 text-3xl text-slate-500 font-normal">
         <Link to = "/" className="hover:text-slate-800">Home</Link>
         <Link to = "/shop" className="hover:text-slate-800">Product</Link>
         <Link to = "/pricing" className="hover:text-slate-800">Pricing</Link>
         <Link to="/contact" className="hover:text-slate-800">Contact</Link>
         <Link to="/login" className="text-blue 500 font-bold flex items-center gap-2 mt-2">
         <User /> Login /Register
         </Link>
         </div>

        </header>
    );
}