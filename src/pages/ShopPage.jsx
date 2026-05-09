import React from "react";
import { Link } from "react-router-dom";

// Resimleri import ediyoruz
import p1 from "../assets/p1.jpg"; import p2 from "../assets/p2.jpg";
import p3 from "../assets/p3.jpg"; import p4 from "../assets/p4.jpg";
import p5 from "../assets/p5.jpg"; import p6 from "../assets/p6.jpg";
import p7 from "../assets/p7.jpg"; import p8 from "../assets/p8.jpg";
import p9 from "../assets/p9.jpg"; import p10 from "../assets/p10.jpg";
import p11 from "../assets/p11.jpg"; import p12 from "../assets/p12.jpg";

import ProductCard from "../components/ProductCard";

export default function ShopPage() { 
    // 12 ürünlük tam liste
    const allProducts = [
        { id: 1, img: p1, title: "Beige Hooded Jacket", price: "$6.48" },
        { id: 2, img: p2, title: "Grey High-Neck Sweater", price: "$10.00" },
        { id: 3, img: p3, title: "Yellow Knit Cardigan", price: "$6.48" },
        { id: 4, img: p4, title: "Mustard Floral Summer Shirt", price: "$10.00" },
        { id: 5, img: p5, title: "White Performance Coat", price: "$6.48" },
        { id: 6, img: p6, title: "Yellow Winter Vest", price: "$10.00" },
        { id: 7, img: p7, title: "White Polka Dot Shirt", price: "$6.48" },
        { id: 8, img: p8, title: "Pink Mock Neck Top", price: "$6.48" },
        { id: 9, img: p9, title: "Green Sports Jacket", price: "$8.50" },
        { id: 10, img: p10, title: "Pink Hoodie & Bomber", price: "$15.00" },
        { id: 11, img: p11, title: "Navy Print Shirt", price: "$10.00" },
        { id: 12, img: p12, title: "Brown Leather Biker Jacket", price: "$25.00" }
    ];

    return ( 
        <div className="bg-white font-['Montserrat']">
            {/* Üst Başlık Kısmı */}
            <div className="bg-[#FAFAFA] py-8">
                <div className="container mx-auto px-4 flex justify-between items-center">
                    <h2 className="font-bold text-2xl text-slate-800">Shop</h2>
                    <div className="flex gap-2 text-sm font-bold">
                        <Link to="/" className="text-slate-800">Home</Link>
                        <span className="text-gray-400">&gt;</span>
                        <span className="text-gray-400">Shop</span>
                    </div>
                </div>
            </div>

            {/* ASIL ÜRÜN LİSTESİ (Burada Editor's Pick yok!) */}
            <div className="container mx-auto px-4 py-16">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12">
                    {allProducts.map((product) => ( 
                        <Link to={`/product/${product.id}`} key={product.id} className="no-underline">
                            <ProductCard 
                                image={product.img} 
                                title={product.title} 
                                price={product.price} 
                            />
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}