import React from "react";
import { useParams, Link } from "react-router-dom";
import { Heart } from "lucide-react";
import p1 from "../assets/p1.jpg"; import p2 from "../assets/p2.jpg";
import p3 from "../assets/p3.jpg"; import p4 from "../assets/p4.jpg";
import p5 from "../assets/p5.jpg"; import p6 from "../assets/p6.jpg";
import p7 from "../assets/p7.jpg"; import p8 from "../assets/p8.jpg";
import p9 from "../assets/p9.jpg"; import p10 from "../assets/p10.jpg";
import p11 from "../assets/p11.jpg"; import p12 from "../assets/p12.jpg";

export default function ProductDetailPage({ addToCart, toggleWishlist, wishlist = [] }) {
    const { productId } = useParams();
    
    const productNames = [
        "Beige Hooded Jacket", "Grey High-Neck Sweater", "Yellow Knit Cardigan", "Mustard Floral Summer Shirt",
        "White Performance Coat", "Yellow Winter Vest", "White Polka Dot Shirt", "Pink Mock Neck Top",
        "Green Sports Jacket", "Pink Hoodie & Bomber", "Navy Print Shirt", 
        "Sterling Silver Watch" // ShopPage ile birebir aynı olmalı
    ];
    
    const productPrices = ["$6.48", "$10.00", "$6.48", "$10.00", "$6.48", "$10.00", "$6.48", "$6.48", "$8.50", "$15.00", "$10.00", "$25.00"];
    const productImages = [p1, p2, p3, p4, p5, p6, p7, p8, p9, p10, p11, p12];
    
    const index = Number(productId) - 1;
    const currentProduct = {
        id: productId,
        title: productNames[index] || "Fashion Item",
        price: productPrices[index] || "$6.48",
        image: productImages[index] || p1
    };

    const isLiked = wishlist.some(item => item.id === productId);

    return (
        <div className="bg-[#FAFAFA] min-h-screen font-['Montserrat']">
            <div className="container mx-auto px-4 py-8">
                <div className="flex flex-col md:flex-row gap-12 bg-white p-6 rounded-lg shadow-sm">
                    <div className="flex-1 relative">
                        <div className="rounded-md overflow-hidden h-[550px]">
                            <img src={currentProduct.image} alt={currentProduct.title} className="w-full h-full object-cover" />
                        </div>
                        <button 
                            onClick={() => toggleWishlist(currentProduct)}
                            className={`absolute top-4 right-4 p-3 rounded-full shadow-lg transition-all active:scale-90 ${isLiked ? 'bg-red-500 text-white' : 'bg-white text-gray-400 hover:text-red-500'}`}
                        >
                            <Heart size={24} fill={isLiked ? "currentColor" : "none"} />
                        </button>
                    </div>
                   
                    <div className="flex-1 flex flex-col justify-center">
                        <h2 className="text-[#252B42] text-4xl font-bold mb-6">{currentProduct.title}</h2>
                        <h3 className="font-bold text-3xl text-[#252B42] mb-6">{currentProduct.price}</h3>
                        <p className="text-[#858585] mb-10 leading-relaxed">Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.</p>
                        <button 
                            onClick={() => addToCart(currentProduct)} 
                            className="bg-[#23A6F0] text-white px-10 py-4 rounded-md font-bold uppercase hover:bg-blue-600 transition active:scale-95 w-full md:w-max shadow-md"
                        >
                            Add To Cart
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}