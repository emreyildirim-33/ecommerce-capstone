import React from "react";
import { Link } from "react-router-dom";
import ProductCard from "../components/ProductCard";

export default function WishlistPage({ wishlist, toggleWishlist }) {
    return (
        <div className="bg-white min-h-screen font-['Montserrat']">
            <div className="bg-[#FAFAFA] py-8">
                <div className="container mx-auto px-4">
                    <h2 className="font-bold text-2xl text-slate-800">My Favorites</h2>
                    <div className="flex gap-2 text-sm font-bold mt-2">
                        <Link to="/" className="text-slate-800 no-underline">Home</Link>
                        <span className="text-gray-400">&gt;</span>
                        <span className="text-gray-400">Wishlist</span>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-4 py-16">
                {wishlist.length === 0 ? (
                    <div className="text-center py-20">
                        <h3 className="text-xl text-gray-500 mb-6">Your wishlist is currently empty.</h3>
                        <Link to="/shop" className="bg-[#23A6F0] text-white px-10 py-4 rounded-md font-bold no-underline uppercase">
                            Go Shopping
                        </Link>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12">
                        {wishlist.map((product) => (
                            <div key={product.id} className="relative group">
                                <Link to={`/product/${product.id}`} className="no-underline">
                                    <ProductCard 
                                        image={product.image} 
                                        title={product.title} 
                                        price={product.price} 
                                    />
                                </Link>
                                {/* Sayfa içinden de favoriden çıkarabilmek için buton */}
                                <button 
                                    onClick={() => toggleWishlist(product)}
                                    className="absolute top-4 right-4 bg-white p-2 rounded-full shadow-md text-red-500 hover:scale-110 transition"
                                >
                                    ✕
                                </button>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}