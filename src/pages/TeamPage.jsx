import React from "react";
import { Link } from "react-router-dom";

export default function TeamPage() {
  const teamMembers = [
    { id: 1, role: "Software Engineer", img: "https://picsum.photos/400/400?random=11" },
    { id: 2, role: "UI/UX Designer", img: "https://picsum.photos/400/400?random=12" },
    { id: 3, role: "Product Manager", img: "https://picsum.photos/400/400?random=13" },
  ];

  return (
    <div className="bg-white min-h-[70vh]">
      {/* Üst Kısım */}
      <div className="text-center py-16 px-4 bg-[#FAFAFA]">
        <h5 className="text-[#737373] font-bold text-base mb-4 uppercase">What We Do</h5>
        <h2 className="text-[#252B42] text-4xl md:text-5xl font-bold mb-4">Meet Our Team</h2>
        <p className="text-[#737373] max-w-lg mx-auto">
          We are a team of passionate developers and designers dedicated to building the best e-commerce experiences.
        </p>
      </div>

      {/* Ekip Kartları */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {teamMembers.map((member) => (
            <div key={member.id} className="flex flex-col items-center bg-white shadow-sm hover:shadow-lg transition-all rounded-md overflow-hidden pb-6">
              <div className="w-full h-[300px] overflow-hidden mb-6">
                <img src={member.img} alt="Team Member" className="w-full h-full object-cover" />
              </div>
              <h5 className="text-[#252B42] text-xl font-bold mb-2">Username</h5>
              <p className="text-[#737373] font-bold text-sm mb-4">{member.role}</p>
              
              {/* Sosyal Medya İkonları */}
              <div className="flex gap-4 text-[#23A6F0] text-xl">
                <i className="fa-brands fa-facebook cursor-pointer hover:text-blue-700 transition"></i>
                <i className="fa-brands fa-instagram cursor-pointer hover:text-pink-600 transition"></i>
                <i className="fa-brands fa-twitter cursor-pointer hover:text-blue-400 transition"></i>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}