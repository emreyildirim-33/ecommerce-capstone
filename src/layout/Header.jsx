import React from "react";
import { Search, ShoppingCart, User, Heart, ChevronDown } from "lucide-react"; 
import { Link } from "react-router-dom";

export default function Header({ cart = [], wishlist = [] }) { 
    return ( 
    <header className="bg-white relative z-50 shadow-sm border-b">
     <div className="flex justify-between items-center p-4 container mx-auto"> 
        <Link to="/" className="font-bold text-2xl text-[#252B42] no-underline">Bandage</Link>

        <nav className="hidden md:flex gap-6 font-bold text-[#737373] text-sm items-center"> 
            <Link to="/" className="hover:text-[#252B42] no-underline">Home</Link>
            <Link to="/shop" className="hover:text-[#252B42] flex items-center gap-1 no-underline">Shop <ChevronDown size={16} /></Link>
            <Link to="/about" className="hover:text-[#252B42] no-underline">About</Link>
            <Link to="/blog" className="hover:text-[#252B42] no-underline">Blog</Link>
            <Link to="/contact" className="hover:text-[#252B42] no-underline">Contact</Link>
        </nav>

        <div className="flex gap-4 text-[#23A6F0] items-center font-bold">
            <div className="hidden md:flex items-center gap-2">
                <User size={18} /> <Link to="/login" className="text-sm no-underline">Login / Register</Link>
            </div>
            <Search size={20} className="cursor-pointer" />
            
            {/* WISHLIST LİNKİ */}
            <Link to="/wishlist" className="flex items-center gap-1 no-underline text-[#23A6F0]">
                <Heart size={20} fill={wishlist.length > 0 ? "#23A6F0" : "none"} />
                <span className="text-xs font-normal">{wishlist.length}</span>
            </Link>

            {/* SEPET LİNKİ: Artık direkt /cart sayfasına gider */}
            <Link to="/cart" className="flex items-center gap-1 no-underline text-[#23A6F0]">
                <ShoppingCart size={20} />
                <span className="text-xs font-normal">{cart.length}</span>
            </Link>
         </div>
        </div>
    </header>
    );
}