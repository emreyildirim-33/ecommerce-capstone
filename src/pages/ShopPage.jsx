import React from "react";
import img1 from "../assets/c1.jpg";
import img2 from "../assets/c2.jpg";
import img3 from "../assets/c3.jpeg";
import img4 from "../assets/c4.jpg";
import img5 from "../assets/c5.jpg";
import p1 from "../assets/p1.jpg";
import p2 from "../assets/p2.jpg";
import p3 from "../assets/p3.jpg";
import p4 from "../assets/p4.jpg";
import p5 from "../assets/p5.jpg";
import p6 from "../assets/p6.jpg";
import p7 from "../assets/p7.jpg";
import p8 from "../assets/p8.jpg";
import p9 from "../assets/p9.jpg";
import p10 from "../assets/p10.jpg";
import p11 from "../assets/p11.jpg";
import p12 from "../assets/p12.jpg";


export default function ShopPage() { 
    // KATEGORİ DATASI
    const categories = [
        { id: 1, title: "CLOTHS", count: "5 Items", img: img1},
        { id: 2, title: "CLOTHS", count: "5 Items", img: img2},
        { id: 3, title: "CLOTHS", count: "5 Items", img: img3},
        { id: 4, title: "CLOTHS", count: "5 Items", img: img4},
        { id: 5, title: "CLOTHS", count: "5 Items", img: img5},
    ];

    // ÜRÜN DATASI
    const productImages = [p1,p2,p3,p4,p5,p6,p7,p8,p9,p10,p11,p12];
    const products = Array.from({ length: 12 }).map((_, index) => ({
        id: index + 1,
        title: "Graphic Design",
        department: "English Department",
        priceOld: "$16.48",
        priceNew: "$6.48",
        img: productImages[index],
        colors: ["bg-blue-500", "bg-green-500", "bg-orange-500", "bg-slate-800"]
    }));

    return ( 
        <div className="bg-white">
            
            {/* HEADER KISMI */}
            <div className="bg-[#FAFAFA] py-6">
                <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-4">
                    <h3 className="font-bold text-slate-800 text-2xl">Shop</h3>
                    <div className="flex gap-2 text-sm font-bold">
                        <a href="/" className="text-[#252B42] hover:text-[#23A6F0]">Home</a>
                        <span className="text-[#BDBDBD]">{">"}</span>
                        <span className="text-[#BDBDBD]">Shop</span>
                    </div>
                </div>
            </div>

            {/* KATEGORİLER */}
            <div className="bg-[#FAFAFA] pb-12">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                        {categories.map((cat) => ( 
                            <div key={cat.id} className="relative w-full h-[300px] cursor-pointer hover:shadow-lg transition group overflow-hidden rounded-md">
                                <img 
                                    src={cat.img}
                                    className="w-full h-full object-cover object-[center_top] group-hover:scale-110 transition duration-500"
                                    alt={cat.title}
                                />
                                <div className="absolute inset-0 flex flex-col justify-center items-center text-white bg-black/25 group-hover:bg-black/40 transition">
                                    <h5 className="font-bold text-base uppercase">{cat.title}</h5>
                                    <p className="text-sm">{cat.count}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* FİLTRELEME ÇUBUĞU */}
            <div className="bg-white py-6 border-b border-gray-200">
                <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-4 px-4">
                    <div className="font-bold text-gray-500">
                        Showing all 12 results
                    </div>
                    <div className="flex items-center gap-4">
                        <span className="font-bold text-gray-500">Views:</span>
                        <div className="flex gap-2">
                            <button className="border border-gray-200 w-10 h-10 flex justify-center items-center rounded hover:bg-gray-100 text-gray-700">
                                <i className="fa-solid fa-table-cells text-lg"></i>
                            </button>
                            <button className="border border-gray-200 w-10 h-10 flex justify-center items-center rounded hover:bg-gray-100 text-gray-700">
                                <i className="fa-solid fa-list text-lg"></i>
                            </button>
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <select className="border border-gray-200 bg-[#F9F9F9] px-4 py-3 rounded text-gray-500 focus:outline-none">
                            <option>Popularity</option>
                            <option>Price: Low to High</option>
                            <option>Price: High to Low</option>
                        </select>
                        <button className="bg-[#23A6F0] text-white px-5 py-3 rounded font-bold hover:bg-blue-600 transition">
                            Filter
                        </button>
                    </div>
                </div>
            </div>

            {/* ÜRÜN KARTLARI  */}
            <div className="bg-white py-12">
                <div className="container mx-auto px-4">
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
                        {products.map((product) => ( 
                            <div key={product.id} className="flex flex-col items-center gap-4 pb-6 hover:shadow-lg transition duration-300 cursor-pointer group">
                                
                                {/* Resim Alanı */}
                                <div className="w-full h-[300px] overflow-hidden">
                                    <img
                                        src={product.img}
                                        alt={product.title}
                                        className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                                    />
                                </div>

                                {/* Bilgi Alanı (BAŞLIK VE FİYATLAR BURAYA EKLENDİ) */}
                                <div className="flex flex-col items-center gap-2 px-4 text-center">
                                    <h5 className="font-bold text-slate-800 text-lg">{product.title}</h5>
                                    <p className="text-gray-500 font-bold text-sm">{product.department}</p>
                                    
                                    <div className="flex gap-2 font-bold">
                                        <span className="text-gray-400 line-through">{product.priceOld}</span>
                                        <span className="text-[#23856D]">{product.priceNew}</span>
                                    </div>

                                    {/* Renk Seçenekleri  */}
                                    <div className="flex gap-2 mt-1">
                                        {product.colors.map((color, i) => ( 
                                            // 👇 Düzeltme: Backtick (`) eklendi
                                            <span key={i} className={`w-4 h-4 rounded-full ${color}`}></span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Sayfalama Butonları */}
                    <div className="flex justify-center mt-12">
                        <div className="border border-gray-200 rounded flex shadow-sm font-bold text-gray-500">
                            <button className="px-6 py-3 bg-[#F3F3F3] border-r hover:bg-gray-200">First</button>
                            <button className="px-5 py-3 bg-white text-[#23A6F0] border-r hover:bg-gray-50">1</button>
                            <button className="px-5 py-3 bg-[#23A6F0] text-white border-r">2</button>
                            <button className="px-5 py-3 bg-white text-[#23A6F0] border-r hover:bg-gray-50">3</button>
                            <button className="px-6 py-3 bg-white text-[#23A6F0] hover:bg-gray-50">Next</button>
                        </div>
                    </div>

                </div> 
                </div>
                <div className="bg-[#FAFAFA] py-12">
                    <div className="container mx-auto px-4">
                        <div className="flex flex-col md:flex-row justify-between gap-8 items-center">
                          <i className="fa-brands fa-hooli text-6xl text-gray-500 hover:text-slate-800 transition cursor-pointer"></i>
                          <i className="fa-brands fa-lyft text-6xl text-gray-500 hover:text-slate-800 transition cursor-pointer"></i>
                          <i className="fa-brands fa-pied-piper-hat text-6xl text-gray-500 hover:text-slate-800 transition cursor-pointer"></i>
                          <i className="fa-brands fa-stripe text-6xl text-gray-500 hover:text-slate-800 transition cursor-pointer"></i>
                          <i className="fa-brands fa-aws text-6xl text-gray-500 hover:text-slate-800 transition cursor-pointer"></i>
                          <i className="fa-brands fa-reddit-alien  text-6xl text-gray-500 hover:text-slate-800 transition cursor-pointer"></i>
                          </div>

            </div>

        </div> 
        </div>
    );
}