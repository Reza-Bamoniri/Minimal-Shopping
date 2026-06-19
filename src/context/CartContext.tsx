import type { ReactNode } from "react";
import { createContext, useState, useContext } from "react";
import type { CartItem, Product } from "../types/index.ts";

// --- شکل Context ---
interface CartContextType {
  cartItems: CartItem[];
  addToCart: (product: Product) => void;
  removeFromCart: (id: number) => void;
  increaseQuantity: (id: number) => void;
  decreaseQuantity: (id: number) => void;
  totalItems: number;
}

// --- ساخت Context ---
const CartContext = createContext<CartContextType | undefined>(undefined);

// --- Provider: دور همه صفحه‌ها میپیچه ---
export function CartProvider({ children }: { children: ReactNode }) {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  // اضافه کردن به سبد
  const addToCart = (product: Product) => {
    setCartItems((prev) => {
      const exists = prev.find((item) => item.id === product.id);
      if (exists) {
        // اگه قبلاً بوده، فقط تعدادش رو زیاد کن
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      // اگه نبوده، با تعداد ۱ اضافه کن
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  // حذف کامل از سبد
  const removeFromCart = (id: number) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  // افزایش تعداد
  const increaseQuantity = (id: number) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  // کاهش تعداد - اگه به ۰ رسید، از سبد حذف میشه
  const decreaseQuantity = (id: number) => {
    setCartItems((prev) => {
      const item = prev.find((i) => i.id === id);
      if (item && item.quantity === 1) {
        return prev.filter((i) => i.id !== id);
      }
      return prev.map((i) =>
        i.id === id ? { ...i, quantity: i.quantity - 1 } : i
      );
    });
  };

  // تعداد کل آیتم‌های سبد
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        increaseQuantity,
        decreaseQuantity,
        totalItems,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

// --- Hook: توی هر کامپوننتی باهاش به سبد دسترسی داری ---
export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used inside CartProvider");
  }
  return context;
}