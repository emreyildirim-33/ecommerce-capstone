import React from "react";
// O kadın resminden kurtulup, elindeki mevcut bir adam resmini çağırıyoruz (örneğin p5)
import heroImg from "../assets/p5.jpg"; 

export default function GreenHero({ addToCart }) {
    const vitaProduct = {
        id: "vita-99",
        title: "Vita Classic Product",
        price: "$16.48",
        image: heroImg
    };

    return (
        <section className="bg-[#23856D] text-white py-16 px-4 md:px-48 flex flex-col md:flex-row items-center justify-between gap-12 overflow-hidden">
            <div className="flex-1 flex flex-col gap-6 items-center md:items-start text-center md:text-left">
                <h5 className="font-bold text-base uppercase tracking-widest">SUMMER 2020</h5>
                <h2 className="text-4xl md:text-6xl font-bold leading-tight max-w-sm">Vita Classic Product</h2>
                <p className="text-sm md:text-lg max-w-sm font-light">
                    We know how large objects will act. We know how objects will act.
                </p>
                <div className="flex flex-col md:flex-row items-center gap-6 mt-4">
                    <span className="text-2xl font-bold">$16.48</span>
                    <button 
                        onClick={() => addToCart(vitaProduct)}
                        className="bg-[#2DC071] text-white px-10 py-4 rounded-md font-bold uppercase hover:bg-[#25a561] transition shadow-lg active:scale-95"
                    >
                        ADD TO CART
                    </button>
                </div>
            </div>
            
            <div className="flex-1 w-full flex justify-center md:justify-end">
                {/* O kadın resmi yerine beyaz montlu (p5) veya senin seçeceğin resim gelecek */}
                <div className="w-[300px] md:w-[400px] h-[400px] md:h-[500px] overflow-hidden rounded-lg shadow-xl">
                    <img 
                        src={heroImg} 
                        className="w-full h-full object-cover" 
                        alt="Vita Classic Model" 
                    />
                </div>
            </div>
        </section>
    );
}