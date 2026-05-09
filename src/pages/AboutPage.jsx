import React from "react";
import { Link } from "react-router-dom";

export default function AboutPage() {
  return (
    <div className="min-h-[60vh] bg-[#FAFAFA] flex flex-col items-center justify-center py-20 px-4">
      <div className="max-w-3xl text-center">
        <h5 className="text-[#23A6F0] font-bold text-sm tracking-widest mb-6 uppercase">About Company</h5>
        <h1 className="text-[#252B42] text-5xl font-bold mb-8">ABOUT US</h1>
        <p className="text-[#737373] text-lg leading-8 mb-10">
          We know how large objects will act, but things on a small scale just do not act that way. 
          We are dedicated to bringing you the best e-commerce experience with high-quality products.
        </p>
        <Link to="/shop" className="bg-[#23A6F0] text-white px-8 py-4 rounded-md font-bold hover:bg-blue-600 transition">
          Go To Shop
        </Link>
      </div>
    </div>
  );
}