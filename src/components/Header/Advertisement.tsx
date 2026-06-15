import { Link } from "react-router-dom"


const Advertisement = () => {
  return (
    <>
    
    <div className="container">
        <div className="relative ">
        <img className="ml-auto mr-auto" src="/images/baner.png" alt="" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
    <p className="text-white text-2xl font-bold text-[40px]">Get 50%  Off on <br /> Selected categories</p>
    <button className="mt-15 px-10 py-1.5 bg-white text-pink-700 rounded-4xl text-[20px] font-medium cursor-pointer hover:font-bold hover:bg-gray-200 transition">
       <Link to="/products">Shop Now</Link>
    </button>
   </div>

        </div>
    </div>
    
    </>
  )
}

export default Advertisement