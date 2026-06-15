import { Outlet } from "react-router-dom"
import NavBar from "../components/Header/Navbar"
import Footer from "../components/Footer/Footer"


const MainLayout = () => {
  return (
    <>
      <NavBar/>
      <main>
        <Outlet/>
      </main>
      <Footer/>
    </>
  )
}

export default MainLayout