import type { Product } from "../../types"

interface Props {
  product: Product;
  onOpenSidebar: (product: Product) => void;
}

const ProductCard = ({ product, onOpenSidebar }: Props) => {
  return (
    <>
    <div className="w-60 mb-18.75 relative group">
       <div>
            <div className="relative group">
            <img className="w-60 h-60 rounded-2xl" src={product.image} alt={product.title} />
              <div className="absolute inset-0 bg-gray-800/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
            </div>
             
              <img src="/images/unlike.png" alt="" className="absolute top-5 right-5 w-9 cursor-pointer"/>

              {/* کلیک روی دکمه سبد → مودال باز میشه */}
              <button onClick={() => onOpenSidebar(product)}>
              <img src="/images/basket.png" alt="" className="absolute top-27 right-26 w-9 cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity duration-300"/>
              </button>
       </div>

       <div className="mt-3.25">
         <div className="flex justify-between ">
            <p className="text-black cursor-pointer">{product.title}</p>
            <span className="font-bold">${product.price}</span>
         </div>
           
           <p className="text-black">{product.category}</p>

           <span className="text-[14px] text-gray-500">{product.description.slice(0, 40)}...</span>

           <div className="mt-3.25">
<svg width="120" height="16" viewBox="0 0 120 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8 1L10.163 5.60778L15 6.35121L11.5 9.93586L12.326 15L8 12.6078L3.674 15L4.5 9.93586L1 6.35121L5.837 5.60778L8 1Z" fill="#FE8A00" stroke="#FE8A00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M34 1L36.163 5.60778L41 6.35121L37.5 9.93586L38.326 15L34 12.6078L29.674 15L30.5 9.93586L27 6.35121L31.837 5.60778L34 1Z" fill="#FE8A00" stroke="#FE8A00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M60 1L62.163 5.60778L67 6.35121L63.5 9.93586L64.326 15L60 12.6078L55.674 15L56.5 9.93586L53 6.35121L57.837 5.60778L60 1Z" fill="#FE8A00" stroke="#FE8A00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M86 1L88.163 5.60778L93 6.35121L89.5 9.93586L90.326 15L86 12.6078L81.674 15L82.5 9.93586L79 6.35121L83.837 5.60778L86 1Z" stroke="#FE8A00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M112 1L114.163 5.60778L119 6.35121L115.5 9.93586L116.326 15L112 12.6078L107.674 15L108.5 9.93586L105 6.35121L109.837 5.60778L112 1Z" stroke="#FE8A00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
           </div>
       </div>
    </div>
    </>
  )
}

export default ProductCard