import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function LoginPage() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="min-h-[80vh] bg-[#FAFAFA] flex items-center justify-center py-12 px-4">
      <div className="max-w-md w-full bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100">
        {/* Sekme Seçici */}
        <div className="flex border-b border-gray-100">
          <button 
            onClick={() => setIsLogin(true)}
            className={`flex-1 py-4 font-bold text-sm uppercase transition ${isLogin ? 'text-[#23A6F0] border-b-2 border-[#23A6F0]' : 'text-[#737373] hover:bg-gray-50'}`}
          >
            Login
          </button>
          <button 
            onClick={() => setIsLogin(false)}
            className={`flex-1 py-4 font-bold text-sm uppercase transition ${!isLogin ? 'text-[#23A6F0] border-b-2 border-[#23A6F0]' : 'text-[#737373] hover:bg-gray-50'}`}
          >
            Register
          </button>
        </div>

        <div className="p-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-[#252B42] mb-2">
              {isLogin ? "Welcome Back" : "Create Account"}
            </h2>
            <p className="text-[#737373] text-sm">
              {isLogin ? "Enter your credentials to access your account" : "Join our community and start shopping today"}
            </p>
          </div>

          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            {!isLogin && (
              <div>
                <label className="block text-sm font-bold text-[#252B42] mb-2">Full Name</label>
                <input type="text" placeholder="John Doe" className="w-full px-4 py-3 bg-[#F9F9F9] border border-gray-200 rounded-md outline-none focus:border-[#23A6F0] transition" />
              </div>
            )}
            
            <div>
              <label className="block text-sm font-bold text-[#252B42] mb-2">Email Address</label>
              <input type="email" placeholder="example@mail.com" className="w-full px-4 py-3 bg-[#F9F9F9] border border-gray-200 rounded-md outline-none focus:border-[#23A6F0] transition" />
            </div>

            <div>
              <label className="block text-sm font-bold text-[#252B42] mb-2">Password</label>
              <input type="password" placeholder="********" className="w-full px-4 py-3 bg-[#F9F9F9] border border-gray-200 rounded-md outline-none focus:border-[#23A6F0] transition" />
            </div>

            {isLogin && (
              <div className="flex justify-end">
                <a href="#" className="text-xs font-bold text-[#23A6F0] hover:underline">Forgot Password?</a>
              </div>
            )}

            <button className="w-full bg-[#23A6F0] text-white py-4 rounded-md font-bold uppercase hover:bg-blue-600 transition shadow-md active:scale-[0.98]">
              {isLogin ? "Sign In" : "Get Started"}
            </button>
          </form>

          <div className="mt-8 flex items-center justify-between gap-4">
            <hr className="flex-1 border-gray-200" />
            <span className="text-xs text-gray-400 font-bold uppercase">Or continue with</span>
            <hr className="flex-1 border-gray-200" />
          </div>

          <div className="mt-6 grid grid-cols-2 gap-4">
            <button className="flex items-center justify-center gap-2 py-3 border border-gray-200 rounded-md hover:bg-gray-50 transition font-bold text-sm text-[#252B42]">
              <i className="fa-brands fa-google text-red-500"></i> Google
            </button>
            <button className="flex items-center justify-center gap-2 py-3 border border-gray-200 rounded-md hover:bg-gray-50 transition font-bold text-sm text-[#252B42]">
              <i className="fa-brands fa-facebook text-blue-600"></i> Facebook
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}