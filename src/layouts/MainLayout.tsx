import { Outlet } from "react-router-dom"
import NavBar from "../components/Header/Navbar"
import Footer from "../components/Footer/Footer"
import ProductSidebar from "../components/ProductSidebar/ProductSidebar"


const MainLayout = () => {
  return (
    <>
      <NavBar/>
      <main>
        <Outlet/>
      </main>
      <Footer/>


      <ProductSidebar/>
    </>
  )
}

export default MainLayout