import React from "react";
export default function ProductDetailPage() {
    return (
        <div className="bg-[#FAFAFA]" >
            <p className="container mx-auto px-4 py-6">Home > Shop</p>
         <div className="container mx-auto px-4 pb-12">
            <div className="flex flex-col md:flex-row gap-8">
                <div className="flex-1 bg-white p-4 rounded-md shadow-sm">
                    <p>Resim Alanı  (Gelecek)</p>
                    </div>
                   
                   <div className="flex-1">
                     <h4 className="text-[#252B42] font-bold text-2xl">Floating Phone</h4>

                  <div className="flex items-center gap-2 mt-2">
                    <span className="text-yellow-400">****</span>
                    <span className="text-gray-300">*</span>
                    <span className="text-gray-500 font-bold text-sm">10 Reviews</span>
                    </div>
                   <h3 className="font-bold text-2xl mt-4">$1,139.33</h3>

                   <p className="mt-2 font-bold text-gray-500">
                     Availability :<span className="text-[#23A6F0]">In Stock</span>
                     </p>
                     
                     <p className="text-gray-500 mt-4">
                        Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. 
                        RELIT official consequent door ENIM RELIT Mollie.
                        </p>
                    </div>

                  </div>
                      
    );
}