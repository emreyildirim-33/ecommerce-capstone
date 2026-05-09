import React from "react";
import { Link } from "react-router-dom";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import hero from "../assets/hero_transparent.png";
import p1 from "../assets/p1.jpg"; import p2 from "../assets/p2.jpg";
import p3 from "../assets/p3.jpg"; import p4 from "../assets/p4.jpg";
import p5 from "../assets/p5.jpg"; import p6 from "../assets/p6.jpg";
import p7 from "../assets/p7.jpg"; import p8 from "../assets/p8.jpg";

import ProductCard from "../components/ProductCard";
import ShopCards from "../components/ShopCards";
import GreenHero from "../components/GreenHero";
import NeuralUniverse from "../components/NeuralUniverse";

export default function HomePage({ addToCart }) {
    const bestsellerProducts = [
        { id: 1, img: p1, title: "Beige Hooded Jacket", price: "$6.48" },
        { id: 2, img: p2, title: "Grey High-Neck Sweater", price: "$10.00" },
        { id: 3, img: p3, title: "Yellow Knit Cardigan", price: "$6.48" },
        { id: 4, img: p4, title: "Mustard Floral Summer Shirt", price: "$10.00" },
        { id: 5, img: p5, title: "White Performance Coat", price: "$6.48" },
        { id: 6, img: p6, title: "Yellow Winter Vest", price: "$10.00" },
        { id: 7, img: p7, title: "White Polka Dot Shirt", price: "$6.48" },
        { id: 8, img: p8, title: "Pink Mock Neck Top", price: "$6.48" }
    ];

    return (
        <div className="w-full">
            <Carousel showThumbs={false} infiniteLoop={true} showStatus={false} showArrows={true}>
                <div className="bg-[#23A6F0] flex flex-col items-center text-center py-12 px-6 md:flex-row md:justify-between md:px-48 min-h-[600px]">
                    <div className="flex flex-col gap-6 md:items-start md:text-left items-center text-center text-white">
                        <h5 className="font-bold tracking-widest text-sm">SUMMER 2020</h5>
                        <h1 className="text-5xl md:text-7xl font-bold uppercase">NEW COLLECTION</h1>
                        <p className="text-xl max-w-xs font-light">We know how large objects will act, but things on a small scale.</p>
                        
                        {/* DÜZELTİLDİ: Artık Shop sayfasına gider */}
                        <Link 
                            to="/shop" 
                            className="bg-[#2DC071] px-10 py-4 rounded-md text-xl font-bold uppercase transition active:scale-95 inline-block no-underline"
                        >
                            SHOP NOW
                        </Link>
                    </div>
                    <div className="mt-8 flex justify-center"><img src={hero} className="object-contain h-[450px]" alt="Hero" /></div>
                </div>
            </Carousel>

            <ShopCards />

            <div className="flex flex-col items-center gap-3 mt-16 mb-12 text-center px-4">
                <h4 className="text-gray-500 font-bold text-xl">Featured Products</h4>
                <h3 className="text-slate-800 font-bold text-2xl uppercase">BESTSELLER PRODUCTS</h3>
                <p className="text-gray-500 font-normal">Problems trying to resolve the conflict between</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 container mx-auto px-4 mb-20">
                {bestsellerProducts.map((p) => (
                    <Link to={`/product/${p.id}`} key={p.id} className="no-underline">
                        <ProductCard image={p.img} title={p.title} price={p.price} />
                    </Link>
                ))}
            </div>

            <GreenHero addToCart={addToCart} />
            <NeuralUniverse />
        </div>
    );
}