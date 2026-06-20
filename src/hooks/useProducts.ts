import { useState, useEffect, useCallback } from "react";
import type { Product } from "../types";

function useProducts() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchProducts = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch("https://fakestoreapi.com/products");
      if (!response.ok) throw new Error("There is a problem receiving the products");
      const data: Product[] = await response.json();
      setProducts(data);
    } catch (err) {
      setError("Error in receiving products");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  
  return { products, loading, error, retry: fetchProducts };
}

export default useProducts;