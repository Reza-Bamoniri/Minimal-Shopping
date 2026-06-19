import { useState } from "react"
import { Outlet } from "react-router-dom"
import NavBar from "../components/Header/Navbar"
import Footer from "../components/Footer/Footer"
import ProductSidebar from "../components/ProductSidebar/ProductSidebar"
import CartModal from "../components/CartModal/CartModal"
import type { Product } from "../types"

const MainLayout = () => {
  const [cartModal, setCartModal] = useState(false)

  // state مودال محصول
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  const handleOpenSidebar = (product: Product) => {
    setSelectedProduct(product)
    setIsSidebarOpen(true)
  }

  const handleCloseSidebar = () => {
    setIsSidebarOpen(false)
    setTimeout(() => setSelectedProduct(null), 400)
  }

  return (
    <>
      <NavBar onOpenCartModal={() => setCartModal(true)}/>
      <main>
        {/* context رو به Outlet پاس میدیم */}
        <Outlet context={{ onOpenSidebar: handleOpenSidebar }}/>
      </main>
      <Footer/>

      <ProductSidebar
        product={selectedProduct}
        isOpen={isSidebarOpen}
        onClose={handleCloseSidebar}
      />

      {cartModal && <CartModal onCloseCartModal={() => setCartModal(false)}/>}
    </>
  )
}

export default MainLayout