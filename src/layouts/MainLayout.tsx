import { useState } from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../components/Header/Navbar";
import Footer from "../components/Footer/Footer";
import ProductSidebar from "../components/ProductSidebar/ProductSidebar";
import CartModal from "../components/CartModal/CartModal";
import type { Product } from "../types";
import Notification from "../components/Notification/Notification";

const MainLayout = () => {
  const [cartModal, setCartModal] = useState(false);

  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleOpenSidebar = (product: Product) => {
    setSelectedProduct(product);
    setIsSidebarOpen(true);
  };

  const handleCloseSidebar = () => {
    setIsSidebarOpen(false);
    setTimeout(() => setSelectedProduct(null), 400);
  };

  const [showToast, setShowToast] = useState(false);

  return (
    <>
      <NavBar onOpenCartModal={() => setCartModal(true)} />
      <main>
        <Outlet context={{ onOpenSidebar: handleOpenSidebar }} />
      </main>
      <Footer />

      <ProductSidebar
        key={selectedProduct?.id}
        product={selectedProduct}
        isOpen={isSidebarOpen}
        onClose={handleCloseSidebar}
        ShowToastbar={() => setShowToast(true)}
        hideToast={() => setShowToast(false)}
      />

      {cartModal && <CartModal onCloseCartModal={() => setCartModal(false)} />}

      <Notification show={showToast} />
    </>
  );
};

export default MainLayout;
