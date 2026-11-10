import React, { useState } from 'react';
import { FADA_PRODUCTS_CATALOG, FadaCartItem, FadaProduct } from '../../data/fadaFoodData.ts';
import { FadaAboutSection } from './FadaAboutSection.tsx';
import { FadaB2BSection } from './FadaB2BSection.tsx';
import { FadaCartDrawer } from './FadaCartDrawer.tsx';
import { FadaCatalog } from './FadaCatalog.tsx';
import { FadaCookingGuide } from './FadaCookingGuide.tsx';
import { FadaFooter } from './FadaFooter.tsx';
import { FadaHero } from './FadaHero.tsx';
import { FadaNavbar } from './FadaNavbar.tsx';
import { FadaProductModal } from './FadaProductModal.tsx';

interface FadaMainAppProps {
  isCompact?: boolean;
}

export const FadaMainApp: React.FC<FadaMainAppProps> = ({ isCompact = false }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [selectedProductForModal, setSelectedProductForModal] = useState<FadaProduct | null>(null);

  // Cart state preloaded with favorite products
  const [cartItems, setCartItems] = useState<FadaCartItem[]>([
    {
      product: FADA_PRODUCTS_CATALOG[1], // Merhan Kabuli 500gr
      selectedWeight: '500gr (5-6 Porsi)',
      unitPrice: 42000,
      quantity: 1,
    },
    {
      product: FADA_PRODUCTS_CATALOG[13], // Beras Basmati Noor-E-Punjab
      selectedWeight: '1 KG',
      unitPrice: 45000,
      quantity: 1,
    },
  ]);

  const totalCartCount = cartItems.reduce((acc, it) => acc + it.quantity, 0);

  const handleAddToCart = (product: FadaProduct, selectedWeight: string, unitPrice: number) => {
    setCartItems((prev) => {
      const existingIdx = prev.findIndex(
        (it) => it.product.id === product.id && it.selectedWeight === selectedWeight
      );
      if (existingIdx >= 0) {
        const updated = [...prev];
        updated[existingIdx].quantity += 1;
        return updated;
      }
      return [...prev, { product, selectedWeight, unitPrice, quantity: 1 }];
    });
  };

  const handleUpdateQuantity = (productId: string, weight: string, delta: number) => {
    setCartItems((prev) =>
      prev
        .map((it) => {
          if (it.product.id === productId && it.selectedWeight === weight) {
            const newQty = it.quantity + delta;
            return newQty > 0 ? { ...it, quantity: newQty } : null;
          }
          return it;
        })
        .filter((it): it is FadaCartItem => it !== null)
    );
  };

  const handleRemoveItem = (productId: string, weight: string) => {
    setCartItems((prev) =>
      prev.filter((it) => !(it.product.id === productId && it.selectedWeight === weight))
    );
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col font-sans">
      {/* Lemonilo-style Navbar */}
      <FadaNavbar
        cartCount={totalCartCount}
        onOpenCart={() => setIsCartOpen(true)}
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
        isCompact={isCompact}
      />

      {/* Main Content Sections */}
      <main className="flex-1 flex flex-col">
        <FadaHero isCompact={isCompact} />

        <FadaCatalog
          onAddToCart={handleAddToCart}
          onOpenDetailModal={setSelectedProductForModal}
          searchTerm={searchTerm}
          isCompact={isCompact}
        />

        <FadaCookingGuide />

        <FadaAboutSection />

        <FadaB2BSection />
      </main>

      {/* Footer */}
      <FadaFooter />

      {/* Cart Drawer & Detail Modal */}
      <FadaCartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
      />

      <FadaProductModal
        product={selectedProductForModal}
        onClose={() => setSelectedProductForModal(null)}
        onAddToCart={handleAddToCart}
      />
    </div>
  );
};
