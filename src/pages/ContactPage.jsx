import React from "react";

export default function ContactPage() {
  return (
    <div className="min-h-[70vh] bg-white py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-[#252B42] text-4xl font-bold mb-4">Contact Us</h2>
          <p className="text-[#737373]">Any questions or remarks? Just write us a message!</p>
        </div>
        
        <div className="bg-[#FAFAFA] rounded-xl shadow-lg p-8 md:p-12 flex flex-col md:flex-row gap-12">
          {/* İletişim Bilgileri */}
          <div className="flex-1">
            <h3 className="text-[#252B42] text-2xl font-bold mb-6">Contact Information</h3>
            <div className="flex flex-col gap-6 text-[#737373] font-bold">
              <p><i className="fa-solid fa-phone text-[#23A6F0] mr-4 text-xl"></i> +451 215 215 </p>
              <p><i className="fa-solid fa-envelope text-[#23A6F0] mr-4 text-xl"></i> info@bandage.com</p>
              <p><i className="fa-solid fa-location-dot text-[#23A6F0] mr-4 text-xl"></i> 123 Street, New York, USA</p>
            </div>
          </div>
          
          {/* Form Alanı */}
          <div className="flex-1 flex flex-col gap-4">
            <input type="text" placeholder="Your Name" className="w-full p-4 border border-gray-200 rounded outline-none focus:border-[#23A6F0]" />
            <input type="email" placeholder="Your Email" className="w-full p-4 border border-gray-200 rounded outline-none focus:border-[#23A6F0]" />
            <textarea placeholder="Your Message" className="w-full p-4 border border-gray-200 rounded outline-none h-32 focus:border-[#23A6F0]"></textarea>
            <button className="bg-[#23A6F0] text-white py-4 rounded font-bold hover:bg-blue-600 transition">Send Message</button>
          </div>
        </div>
      </div>
    </div>
  );
}