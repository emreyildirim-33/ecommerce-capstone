import React from "react";

export default function Footer() {
  return (
    <footer className="bg-white">
      {/* Üst Kısım: Logo ve Sosyal Medya */}
      <div className="bg-[#FAFAFA] py-10">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
          <h3 className="text-[#252B42] font-bold text-2xl">Bandage</h3>
          <div className="flex gap-5 text-[#23A6F0] text-xl">
            <i className="fa-brands fa-facebook cursor-pointer"></i>
            <i className="fa-brands fa-instagram cursor-pointer"></i>
            <i className="fa-brands fa-twitter cursor-pointer"></i>
          </div>
        </div>
      </div>

      {/* Orta Kısım: Linkler */}
      <div className="container mx-auto px-4 py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8">
        <div>
          <h5 className="font-bold text-[#252B42] mb-5">Company Info</h5>
          <div className="flex flex-col gap-3 text-[#737373] text-sm font-bold">
            <a href="#">About Us</a><a href="#">Carrier</a><a href="#">We are hiring</a><a href="#">Blog</a>
          </div>
        </div>
        <div>
          <h5 className="font-bold text-[#252B42] mb-5">Legal</h5>
          <div className="flex flex-col gap-3 text-[#737373] text-sm font-bold">
            <a href="#">About Us</a><a href="#">Carrier</a><a href="#">We are hiring</a><a href="#">Blog</a>
          </div>
        </div>
        <div>
          <h5 className="font-bold text-[#252B42] mb-5">Features</h5>
          <div className="flex flex-col gap-3 text-[#737373] text-sm font-bold">
            <a href="#">Business Marketing</a><a href="#">User Analytic</a><a href="#">Live Chat</a><a href="#">Unlimited Support</a>
          </div>
        </div>
        <div>
          <h5 className="font-bold text-[#252B42] mb-5">Resources</h5>
          <div className="flex flex-col gap-3 text-[#737373] text-sm font-bold">
            <a href="#">IOS & Android</a><a href="#">Watch a Demo</a><a href="#">Customers</a><a href="#">API</a>
          </div>
        </div>
        <div>
          <h5 className="font-bold text-[#252B42] mb-5">Get In Touch</h5>
          <div className="flex flex-col gap-4">
            <div className="flex border border-[#E6E6E6] rounded-md overflow-hidden">
              <input type="email" placeholder="Your Email" className="px-4 py-3 bg-[#F9F9F9] text-sm outline-none w-full" />
              <button className="bg-[#23A6F0] text-white px-4 py-3 text-sm">Subscribe</button>
            </div>
            <p className="text-[#737373] text-xs">Lore imp sum dolor Amit</p>
          </div>
        </div>
      </div>

      {/* Alt Kısım: Telif Hakkı */}
      <div className="bg-[#FAFAFA] py-6">
        <div className="container mx-auto px-4 text-[#737373] font-bold text-sm text-center md:text-left">
          Made With Love By Finland All Right Reserved
        </div>
      </div>
    </footer>
  );
}