import { useState } from "react"
import { Outlet } from "react-router-dom"
import NavBar from "../components/Header/Navbar"
import Footer from "../components/Footer/Footer"
import ProductSidebar from "../components/ProductSidebar/ProductSidebar"
import CartModal from "../components/CartModal/CartModal"


const MainLayout = () => {

  const [cartModal, setcartModal] = useState(false)

  return (
    <>
      <NavBar onOpenCartModal={()=>setcartModal(true)}/>
      <main>
        <Outlet/>
      </main>
      <Footer/>


      <ProductSidebar/>

      {cartModal && <CartModal onCloseCartModal={()=>setcartModal(false)}/>}
    </>
  )
}

export default MainLayout