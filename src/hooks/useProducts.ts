import { useState, useEffect } from "react";
import type { Product } from "../types";

function useProducts() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // وقتی کامپوننت لود میشه، این تابع اجرا میشه
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const response = await fetch("https://fakestoreapi.com/products");

        if (!response.ok) {
          throw new Error("مشکلی در دریافت محصولات پیش اومد");
        }

        const data: Product[] = await response.json();
        setProducts(data);
      } catch (err) {
        setError("خطا در دریافت محصولات");
      } finally {
        // چه موفق بشه چه نشه، loading رو false کن
        setLoading(false);
      }
    };

    fetchProducts();
  }, []); // آرایه خالی یعنی فقط یه بار اجرا بشه

  return { products, loading, error };
}

export default useProducts;