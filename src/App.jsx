import React, { useState } from "react";
import Header from './layout/Header';
import PageContent from './layout/PageContent';
import Footer from './layout/Footer';

/**
 * App Component: Uygulamanın State (Veri) merkezidir.
 * MacBook Air M1 üzerinde mermi gibi çalışması için optimize edilmiştir.
 */
function App() { 
  // Sepet ve Favori listeleri için state tanımlamaları
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);

  /**
   * Sepete Ekleme Fonksiyonu
   * Ürün zaten varsa miktarını artırır, yoksa yeni ürün olarak ekler.
   */
  const addToCart = (product) => {
    setCart(prev => {
      // Ürünün id'sine göre sepette olup olmadığını kontrol et
      const existingItem = prev.find(item => item.id === product.id);
      
      if (existingItem) {
        // Ürün zaten varsa: Sadece o ürünün quantity değerini 1 artır
        return prev.map(item =>
          item.id === product.id 
            ? { ...item, quantity: (item.quantity || 1) + 1 } 
            : item
        );
      }
      // Ürün ilk kez ekleniyorsa: quantity: 1 olarak listeye dahil et
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  /**
   * Sepetten Ürün Silme Fonksiyonu
   */
  const removeFromCart = (index) => {
    setCart(prev => prev.filter((_, i) => i !== index));
  };

  /**
   * Favorilere Ekleme/Çıkarma Fonksiyonu (Toggle)
   */
  const toggleWishlist = (product) => {
    setWishlist(prev => {
      const exists = prev.find(item => item.id === product.id);
      if (exists) {
        // Varsa listeden çıkar
        return prev.filter(item => item.id !== product.id);
      }
      // Yoksa listeye ekle
      return [...prev, product];
    });
  };

  return ( 
    <div className="flex flex-col min-h-screen font-['Montserrat']">
      {/* Header: Sepet ve Favori sayılarını göstermesi için verileri paslıyoruz */}
      <Header 
        cart={cart} 
        wishlist={wishlist} 
      /> 
      
      {/* PageContent: Tüm sayfaların ve fonksiyonların dağıtım merkezi */}
      <PageContent 
        cart={cart} 
        addToCart={addToCart} 
        removeFromCart={removeFromCart} 
        wishlist={wishlist} 
        toggleWishlist={toggleWishlist} 
      />
      
      <Footer />
    </div>
  );
}

export default App;