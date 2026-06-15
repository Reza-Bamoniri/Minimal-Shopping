import { Link } from "react-router-dom"
import Advertisement from "../components/Header/Advertisement"
import ProductCard from "../components/ProductCard/ProductCard"


const Home = () => {
  return (
    <>
       <Advertisement/>


       <div className="">
        <div className="container pt-22.5 ">

            <div className="grid grid-cols-4 justify-items-center">
                 <ProductCard/>
                 <ProductCard/>
                 <ProductCard/>
                 <ProductCard/>
                 <ProductCard/>
                 <ProductCard/>
                 <ProductCard/>
                 <ProductCard/>
            </div>


            <div className="flex justify-center">
              
              <Link to="/products">

             <button className="bg-orange-400 px-10 py-2 text-amber-50 rounded-3xl mb-7 cursor-pointer hover:font-bold hover:bg-orange-500" >more products ...</button>
              
              </Link>

            </div>
        </div>
       </div>
    </>
  )
}

export default Home