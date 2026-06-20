import { useState, useEffect } from "react";
import type { Product } from "../types";

function useProducts() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const response = await fetch("https://fakestoreapi.com/products");

        if (!response.ok) {
          throw new Error("There is a problem receiving the products");
        }

        const data: Product[] = await response.json();
        setProducts(data);
      } catch (err) {
        setError("Error in receiving products");
      } finally {
      
        setLoading(false);
      }
    };

    fetchProducts();
  }, []); 

  return { products, loading, error };
}

export default useProducts;