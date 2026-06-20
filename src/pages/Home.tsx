import { Link, useOutletContext } from "react-router-dom"
import Advertisement from "../components/Header/Advertisement"
import ProductCard from "../components/ProductCard/ProductCard"
import LoadingScreen from "../components/LoadingScreen/LoadingScreen"
import useProducts from "../hooks/useProducts"
import type { Product } from "../types"

interface LayoutContext {
  onOpenSidebar: (product: Product) => void
}

const Home = () => {
  const { products, loading, error, retry } = useProducts()
  const { onOpenSidebar } = useOutletContext<LayoutContext>()

  if (loading || error) return <LoadingScreen error={error} onRetry={retry} />

  return (
    <>
      <Advertisement/>
      <div className="">
        <div className="container pt-22.5">
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 justify-items-center gap-y-4">
            {products.slice(0, 8).map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onOpenSidebar={onOpenSidebar}
              />
            ))}
          </div>

          <div className="flex justify-center">
            <Link to="/products">
              <button className="bg-orange-400 px-10 py-2 text-amber-50 rounded-3xl mb-7 cursor-pointer hover:font-bold hover:bg-orange-500 transition">
                more products ...
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home