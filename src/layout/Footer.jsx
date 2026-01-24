import React from "react";

export default function Footer() {
    return (
        <footer className="bg-white">
            
            
            <div className="bg-[#FAFAFA] py-10">
                <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
                    <h3 className="font-bold text-slate-800 text-2xl">Bandage</h3>
                    <div className="flex gap-5 text-[#23A6F0]">
                        <i className="fa-brands fa-facebook text-2xl"></i>
                        <i className="fa-brands fa-instagram text-2xl"></i>
                        <i className="fa-brands fa-twitter text-2xl"></i>
                    </div>
                </div>
            </div>

            
            <div className="bg-white py-12">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col md:flex-row gap-8 justify-between">
                        
                        
                        <div className="flex flex-col gap-4">
                            <h5 className="font-bold text-[#252B42] text-lg">Company Info</h5>
                            <div className="flex flex-col gap-3 font-bold text-[#737373]">
                                <a href="#">About Us</a>
                                <a href="#">Carrier</a>
                                <a href="#">We are hiring</a>
                                <a href="#">Blog</a>
                            </div>
                        </div>

                        
                        <div className="flex flex-col gap-4">
                            <h5 className="font-bold text-[#252B42] text-lg">Legal</h5>
                            <div className="flex flex-col gap-3 font-bold text-[#737373]">
                                <a href="#">About Us</a>
                                <a href="#">Carrier</a>
                                <a href="#">We are hiring</a>
                                <a href="#">Blog</a>
                            </div>
                        </div>

                        
                        <div className="flex flex-col gap-4">
                            <h5 className="font-bold text-[#252B42] text-lg">Features</h5>
                            <div className="flex flex-col gap-3 font-bold text-[#737373]">
                                <a href="#">Business Marketing</a>
                                <a href="#">User Analytic</a>
                                <a href="#">Live Chat</a>
                                <a href="#">Unlimited Support</a>
                            </div>
                        </div>

                        
                        <div className="flex flex-col gap-4">
                            <h5 className="font-bold text-[#252B42] text-lg">Resources</h5>
                            <div className="flex flex-col gap-3 font-bold text-[#737373]">
                                <a href="#">IOS & Android</a>
                                <a href="#">Watch a Demo</a>
                                <a href="#">Customers</a>
                                <a href="#">API</a>
                            </div>
                        </div>

                        
                        <div className="flex flex-col gap-4">
                            <h5 className="font-bold text-[#252B42] text-lg">Get In Touch</h5>
                            <div className="flex flex-col gap-2">
                                <div className="flex border border-[#E6E6E6] rounded-md overflow-hidden">
                                    <input type="email" placeholder="Your Email" className="bg-[#F9F9F9] p-4 outline-none flex-1 text-[#737373]" />
                                    <button className="bg-[#23A6F0] text-white px-4 py-2">Subscribe</button>
                                </div>
                                <p className="text-[#737373] text-xs">Lore imp sum dolor Amit</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            
            <div className="bg-[#FAFAFA] py-6">
                <div className="container mx-auto px-4 text-[#737373] font-bold text-sm text-center md:text-left">
                    <p>Made With Love By Finland All Right Reserved</p>
                </div>
            </div>

        </footer>
    );
}