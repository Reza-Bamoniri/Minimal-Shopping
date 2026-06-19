import { useOutletContext } from "react-router-dom"
import ProductCard from "../components/ProductCard/ProductCard"
import useProducts from "../hooks/useProducts"
import type { Product } from "../types"

interface LayoutContext {
  onOpenSidebar: (product: Product) => void
}

const Products = () => {
  const { products, loading, error } = useProducts()
  const { onOpenSidebar } = useOutletContext<LayoutContext>()

  if (loading) return <p className="text-center mt-10">در حال بارگذاری...</p>
  if (error) return <p className="text-center text-red-500">{error}</p>

  return (
    <>
      <div className="">
        <div className="container pt-5">
          <div className="grid grid-cols-4 justify-items-center">
            {products.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onOpenSidebar={onOpenSidebar}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default Products