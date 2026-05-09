import React from "react";
import { Routes, Route } from "react-router-dom";

import HomePage from "../pages/HomePage";
import ShopPage from "../pages/ShopPage";
import ProductDetailPage from "../pages/ProductDetailPage";
import WishlistPage from "../pages/WishlistPage";
import CartPage from "../pages/CartPage";
import AboutPage from "../pages/AboutPage";
import ContactPage from "../pages/ContactPage";
import BlogPage from "../pages/BlogPage";
import TeamPage from "../pages/TeamPage";
import LoginPage from "../pages/LoginPage";

// Props'ları buradan (destructuring) doğru aldığımıza emin oluyoruz
export default function PageContent({ cart, addToCart, removeFromCart, wishlist, toggleWishlist }) { 
    return ( 
        <div className="flex-grow">
            <Routes>
                <Route path="/" element={<HomePage addToCart={addToCart} />} />
                <Route path="/shop" element={<ShopPage addToCart={addToCart} />} />
                
                {/* Wishlist Sayfası */}
                <Route path="/wishlist" element={<WishlistPage wishlist={wishlist} toggleWishlist={toggleWishlist} />} />
                
                {/* CART SAYFASI: cart ve removeFromCart burada olmalı */}
                <Route 
                    path="/cart" 
                    element={<CartPage cart={cart} removeFromCart={removeFromCart} />} 
                />
                
                <Route 
                    path="/product/:productId" 
                    element={
                        <ProductDetailPage 
                            addToCart={addToCart} 
                            toggleWishlist={toggleWishlist} 
                            wishlist={wishlist} 
                        />
                    } 
                />
                
                <Route path="/about" element={<AboutPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/blog" element={<BlogPage />} />
                <Route path="/pages" element={<TeamPage />} />
                <Route path="/login" element={<LoginPage />} />
            </Routes>
        </div>
    );
}