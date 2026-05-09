import React from "react";
import { Link } from "react-router-dom";
import { Trash2, ChevronLeft, CreditCard, Plus, Minus } from "lucide-react";

export default function CartPage({ cart = [], removeFromCart, setCart }) {
    // Toplam fiyatı (Miktar * Fiyat) olarak hesaplıyoruz
    const totalPrice = cart.reduce((total, item) => {
        const priceValue = typeof item.price === 'string' 
            ? parseFloat(item.price.replace('$', '')) 
            : (item.price || 0);
        return total + (priceValue * (item.quantity || 1));
    }, 0).toFixed(2);

    return (
        <div className="bg-white min-h-screen font-['Montserrat']">
            <div className="bg-[#FAFAFA] py-8 px-4">
                <div className="container mx-auto flex justify-between items-center">
                    <h2 className="font-bold text-2xl text-slate-800">Shopping Cart</h2>
                    <Link to="/shop" className="text-[#23A6F0] flex items-center gap-2 font-bold no-underline text-sm">
                        <ChevronLeft size={16} /> Continue Shopping
                    </Link>
                </div>
            </div>

            <div className="container mx-auto px-4 py-12">
                {cart.length === 0 ? (
                    <div className="text-center py-20">
                        <h3 className="text-xl text-gray-400 mb-6">Your cart is empty.</h3>
                        <Link to="/shop" className="bg-[#23A6F0] text-white px-10 py-4 rounded-md font-bold no-underline uppercase">Start Shopping</Link>
                    </div>
                ) : (
                    <div className="flex flex-col lg:flex-row gap-12">
                        <div className="flex-1 space-y-6">
                            {cart.map((item, index) => (
                                <div key={item.id} className="flex flex-col sm:flex-row items-center gap-6 p-4 border rounded-lg shadow-sm">
                                    <img src={item.image} alt={item.title} className="w-24 h-24 object-cover rounded-md" />
                                    
                                    <div className="flex-1 text-center sm:text-left">
                                        <h4 className="font-bold text-slate-800">{item.title}</h4>
                                        <p className="text-[#23856D] font-bold mt-1">{item.price}</p>
                                    </div>

                                    {/* MİKTAR KONTROLÜ */}
                                    <div className="flex items-center gap-4 bg-[#FAFAFA] px-4 py-2 rounded-full">
                                        <span className="text-sm font-bold">Qty: {item.quantity || 1}</span>
                                    </div>

                                    <div className="font-bold text-slate-800">
                                        ${(parseFloat(item.price.replace('$', '')) * (item.quantity || 1)).toFixed(2)}
                                    </div>

                                    <button onClick={() => removeFromCart(index)} className="text-red-400 hover:text-red-600 p-2">
                                        <Trash2 size={20} />
                                    </button>
                                </div>
                            ))}
                        </div>

                        <div className="lg:w-1/3">
                            <div className="bg-[#FAFAFA] p-8 rounded-lg border sticky top-24">
                                <h3 className="font-bold text-xl mb-6 border-b pb-4">Summary</h3>
                                <div className="flex justify-between font-bold text-lg text-slate-800">
                                    <span>Total Amount</span>
                                    <span className="text-[#23856D]">${totalPrice}</span>
                                </div>
                                <button className="w-full bg-[#23A6F0] text-white py-4 rounded-md font-bold uppercase mt-6 flex items-center justify-center gap-2">
                                    <CreditCard size={20} /> Checkout
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}