import React from "react";

export default function BlogPage() {
  const posts = [1, 2, 3]; // 3 adet örnek blog kartı

  return (
    <div className="bg-[#FAFAFA] min-h-[70vh] py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h6 className="text-[#23A6F0] font-bold text-sm mb-4">Practice Advice</h6>
          <h2 className="text-[#252B42] text-4xl font-bold mb-4">Featured Posts</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post) => (
            <div key={post} className="bg-white shadow-md rounded-md overflow-hidden group cursor-pointer">
              <div className="h-[300px] overflow-hidden relative">
                <span className="absolute top-4 left-4 bg-[#E77C40] text-white px-3 py-1 rounded text-sm font-bold z-10">NEW</span>
                <img src={`https://picsum.photos/400/300?random=${post + 50}`} className="w-full h-full object-cover group-hover:scale-110 transition duration-500" alt="blog" />
              </div>
              <div className="p-6">
                <div className="flex gap-4 text-xs mb-4">
                  <span className="text-[#23A6F0]">Google</span>
                  <span className="text-[#737373]">Trending</span>
                  <span className="text-[#737373]">New</span>
                </div>
                <h4 className="text-[#252B42] text-xl font-bold mb-3 hover:text-[#23A6F0] transition">Loudest à la Madison #1 (L'integral)</h4>
                <p className="text-[#737373] text-sm leading-relaxed mb-6">We focus on ergonomics and meeting you where you work. It's only a keystroke away.</p>
                <div className="flex justify-between items-center text-xs font-bold text-[#737373]">
                  <span><i className="fa-regular fa-clock text-[#23A6F0] mr-2"></i> 22 April 2026</span>
                  <span><i className="fa-solid fa-chart-area text-[#2DC071] mr-2"></i> 10 comments</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}