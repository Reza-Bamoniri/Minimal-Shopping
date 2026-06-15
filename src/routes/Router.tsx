import { Routes, Route } from "react-router-dom"
import Home from '../pages/Home'
import Products from '../pages/Products'
import NotFound from '../pages/NotFound'
import MainLayout from "../layouts/MainLayout"

const Router = () => {
  return (
    <Routes>
      <Route element={<MainLayout/>}>
      <Route path="/" element={<Home/>} />
      <Route path="/products" element={<Products/>} />
      </Route>
      <Route path="*" element={<NotFound/>} />

    </Routes>
  )
}

export default Router