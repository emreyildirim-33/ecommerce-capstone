import React from "react";
import productImg from "../assets/product-chair.jpg"; // Sarı Koltuk (Büyük)
import productThumb from "../assets/imagechair.jpg";  // Gri Sandalye (Küçük)

export default function ProductDetailPage() {
    return (
        <div className="bg-[#FAFAFA] min-h-screen">
            <div className="container mx-auto px-4 py-6">
                <p className="text-sm font-bold">
                    <span className="text-[#252B42]">Home</span> 
                    <span className="text-[#BDBDBD]"> > Shop</span>
                </p>
            </div>

            <div className="container mx-auto px-4 pb-12">
                <div className="flex flex-col md:flex-row gap-8">
                    
                    {/* SOL TARAF: RESİM VE SLIDER */}
                    <div className="flex-1">
                        <div className="bg-white rounded-md shadow-sm overflow-hidden relative">
                            <img 
                                src={productImg} 
                                alt="Product" 
                                className="w-full h-[450px] object-cover"
                            />
                            <div className="absolute top-1/2 left-4 -translate-y-1/2 text-white text-4xl cursor-pointer hover:scale-110 transition">
                                <i className="fa-solid fa-chevron-left"></i>
                            </div>
                            <div className="absolute top-1/2 right-4 -translate-y-1/2 text-white text-4xl cursor-pointer hover:scale-110 transition">
                                <i className="fa-solid fa-chevron-right"></i>
                            </div>
                        </div>

                        {/* ALT KÜÇÜK RESİMLER (THUMBNAILS) - SIRAYI DEĞİŞTİRDİK */}
                        <div className="flex gap-4 mt-4">
                            {/* 1. SOLDA: Gri Sandalye */}
                            <div className="w-24 h-20 cursor-pointer opacity-100 border-2 border-gray-300 rounded-md overflow-hidden">
                                <img src={productThumb} className="w-full h-full object-cover" />
                            </div>
                            
                            {/* 2. SAĞDA: Sarı Koltuk */}
                            <div className="w-24 h-20 cursor-pointer opacity-60 hover:opacity-100 transition-opacity rounded-md overflow-hidden">
                                <img src={productImg} className="w-full h-full object-cover" />
                            </div>
                        </div>
                    </div>
                   
                    {/* SAĞ TARAF: ÜRÜN BİLGİLERİ */}
                    <div className="flex-1">
                        <h4 className="text-[#252B42] font-bold text-2xl mb-3">Floating Phone</h4>

                        <div className="flex items-center gap-2 mb-4">
                            <div className="flex text-yellow-400">
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-regular fa-star text-gray-300"></i>
                            </div>
                            <span className="text-[#737373] font-bold text-sm">10 Reviews</span>
                        </div>

                        <h3 className="font-bold text-2xl text-[#252B42] mb-2">$1,139.33</h3>

                        <p className="font-bold text-sm text-[#737373] mb-5">
                            Availability : <span className="text-[#23A6F0]">In Stock</span>
                        </p>
                     
                        <p className="text-[#858585] text-sm leading-6 mb-6">
                            Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. 
                            RELIT official consequent door ENIM RELIT Mollie.
                        </p>

                        <hr className="mb-6 border-gray-200" />

                        <div className="flex gap-2 mb-10">
                            <div className="w-8 h-8 rounded-full bg-[#23A6F0] cursor-pointer hover:scale-110 transition"></div>
                            <div className="w-8 h-8 rounded-full bg-[#2DC071] cursor-pointer hover:scale-110 transition"></div>
                            <div className="w-8 h-8 rounded-full bg-[#E77C40] cursor-pointer hover:scale-110 transition"></div>
                            <div className="w-8 h-8 rounded-full bg-[#252B42] cursor-pointer hover:scale-110 transition"></div>
                        </div>

                        <div className="flex items-center gap-3">
                            <button className="bg-[#23A6F0] text-white px-6 py-3 rounded-md font-bold hover:bg-blue-600 transition-all">
                                Select Options
                            </button>
                            <div className="flex gap-2">
                                <button className="w-10 h-10 border border-gray-200 rounded-full flex items-center justify-center bg-white hover:bg-gray-100 transition">
                                    <i className="fa-regular fa-heart"></i>
                                </button>
                                <button className="w-10 h-10 border border-gray-200 rounded-full flex items-center justify-center bg-white hover:bg-gray-100 transition">
                                    <i className="fa-solid fa-cart-shopping"></i>
                                </button>
                                <button className="w-10 h-10 border border-gray-200 rounded-full flex items-center justify-center bg-white hover:bg-gray-100 transition">
                                    <i className="fa-solid fa-eye"></i>
                                </button>
                            </div>
                        </div>
                    </div>

                </div>

                {/* ALT KISIM: AÇIKLAMA SEKMELERİ */}
                <div className="mt-16 bg-white p-6 rounded-md shadow-sm">
                    <div className="flex justify-center gap-8 py-6 border-b border-gray-200 text-sm font-bold text-[#737373] mb-8">
                        <span className="text-[#252B42] cursor-pointer border-b-2 border-transparent hover:border-[#23A6F0] pb-2">Description</span>
                        <span className="cursor-pointer hover:text-[#252B42] pb-2">Additional Information</span>
                        <span className="cursor-pointer hover:text-[#252B42] pb-2">Reviews (0)</span>
                    </div>

                    <div className="flex flex-col md:flex-row gap-8">
                        <div className="flex-1">
                            <h3 className="text-[#252B42] font-bold text-2xl mb-4">the quick fox jumps over</h3>
                            <p className="text-[#737373] text-sm leading-relaxed mb-4">
                                Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial aliquip nostrud amet sunt.
                            </p>
                            <p className="text-[#737373] text-sm leading-relaxed mb-4 border-l-4 border-[#23A6F0] pl-4">
                                Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie.
                            </p>
                            <p className="text-[#737373] text-sm leading-relaxed">
                                Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie.
                            </p>
                        </div>
                        <div className="flex-1 h-[300px] overflow-hidden rounded-md">
                            <img src={productImg} className="w-full h-full object-cover shadow-lg" alt="Description" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}