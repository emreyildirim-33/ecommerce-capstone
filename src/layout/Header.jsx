import React,{useState} from "react";
import { Search,ShoppingCart,Menu,User,ArrowRight} from "lucide-react";
import { Link } from "react-router-dom";
export default function Header () { 
    const [isOpen,setIsOpen] = useState(false);
    return ( 
    <header className="bg-white">
     
     <div className="flex justify-between items-center p-4">
        <div>
          <Link to="/" className="font-bold text-2xl text-slate-800">
           Bandage
           </Link>
           </div>
        <div className="flex gap-4 text-slate-600">
         <button onClick={() => setIsOpen(!isOpen)}>
         <Search />
         </button>
         <ShoppingCart />
         <button onClick={() =>  setIsOpen(!isOpen)}>
            <Menu />
            </button>
         </div>
        </div>
         
         {isOpen && ( 
         <div className="flex flex-col items-center gap-8 py-8 text-3xl text-slate-500 font-normal">
         <div className="w-[%80] flex flex-col gap-4 mb-6 ">
            <input type="text" placeholder="Search" className="bg-slate-50 border border-slate-200 rounded-md p-4 text-slate-500 "/> 
            <select className="bg-slate-50 border border-slate-200 rounded-md p-4 text-slate-500">
                <option>Category</option>
                </select>
            <button className="bg-blue-500 text-white rounded-md p-4 flex-justify-center items-center "> <Search/> </button>
        </div>
         <Link to = "/" className="hover:text-slate-800">Home</Link>
         <Link to = "/shop" className="hover:text-slate-800">Product</Link>
         <Link to = "/pricing" className="hover:text-slate-800">Pricing</Link>
         <Link to="/contact" className="hover:text-slate-800">Contact</Link>
         <Link to="/login" className="text-blue 500 font-bold flex items-center gap-2 mt-2"
         onClick={() => setIsOpen(false)}
         >
            Login
         </Link>
          <Link to = "/register" className="bg-blue-500 text-white font-bold text-xl py-4  px-10 rounded-md flex items-center gap-2 hover:bg-blue-600 transititon-colors "
          onClick={() => setIsOpen(false)}
          >
            Become a member <ArrowRight size={20} /> 
            </Link>
         </div>
         )}
        </header>
    );
}
