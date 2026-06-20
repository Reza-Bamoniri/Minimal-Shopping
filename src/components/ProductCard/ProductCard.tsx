import type { Product } from "../../types"
import { useCart } from "../../context/CartContext";

interface Props {
  product: Product;
  onOpenSidebar: (product: Product) => void;
}

const ProductCard = ({ product, onOpenSidebar }: Props) => {

  const { cartItems, removeFromCart, toggleWishlist, isInWishlist } = useCart();
  
  
  const isInCart = cartItems.some((item) => item.id === product.id);



  return (
    <>
    <div className="w-60 mb-18.75 relative group">
       <div className="h-60">
  <div className="relative group h-60">
    <img className="w-60 h-60 rounded-2xl" src={product.image} alt={product.title} />
    
    
    <div className="absolute inset-0 bg-gray-800/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>

    
    {isInCart && (
      <div className="absolute inset-0 bg-green-300/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
    )}

    {isInCart ? (
      <>
        
        <div className="absolute top-27 right-26 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="w-9 h-9 rounded-full bg-green-400 flex items-center justify-center">
            <svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="42" height="42" rx="21" fill="white"/>
            <path fillRule="evenodd" clipRule="evenodd" d="M19.0166 12.2213C20.9096 11.7936 22.8902 11.9893 24.663 12.7792C25.1675 13.0039 25.7587 12.7772 25.9834 12.2727C26.2082 11.7683 25.9815 11.1771 25.477 10.9523C23.3103 9.98687 20.8896 9.7477 18.5758 10.2705C16.2621 10.7932 14.1793 12.0499 12.6381 13.8531C11.0969 15.6563 10.1799 17.9093 10.0238 20.2762C9.86777 22.6432 10.481 24.9971 11.7721 26.9871C13.0631 28.977 14.9628 30.4963 17.1879 31.3183C19.413 32.1404 21.8442 32.2211 24.1189 31.5486C26.3936 30.876 28.39 29.4862 29.8103 27.5863C31.2306 25.6864 31.9986 23.3784 32 21.0063V21.0057V20.0857C32 19.5334 31.5523 19.0857 31 19.0857C30.4477 19.0857 30 19.5334 30 20.0857V21.0052C29.9989 22.9459 29.3705 24.8344 28.2084 26.3888C27.0464 27.9432 25.413 29.0804 23.5518 29.6307C21.6907 30.1809 19.7015 30.1149 17.881 29.4423C16.0605 28.7697 14.5062 27.5266 13.4499 25.8985C12.3935 24.2704 11.8918 22.3444 12.0195 20.4078C12.1472 18.4713 12.8975 16.6278 14.1585 15.1525C15.4194 13.6772 17.1235 12.649 19.0166 12.2213ZM31.7075 13.7125C32.0978 13.3218 32.0975 12.6886 31.7068 12.2983C31.316 11.9079 30.6829 11.9083 30.2925 12.299L20.9996 21.6012L18.7071 19.3086C18.3166 18.9181 17.6834 18.9181 17.2929 19.3086C16.9024 19.6992 16.9024 20.3323 17.2929 20.7228L20.2929 23.7228C20.4805 23.9104 20.7349 24.0158 21.0003 24.0157C21.2656 24.0157 21.52 23.9102 21.7075 23.7225L31.7075 13.7125Z" fill="#8BC34A"/>
            </svg>
          </div>
        </div>

        
        <button
          onClick={(e) => {
            e.stopPropagation();
            removeFromCart(product.id);
          }}
          className="absolute top-4.5 left-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 w-8 h-8 rounded-full flex items-center justify-center cursor-pointer">
          <svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="42" height="42" rx="21" fill="#FF1055"/>
          <path fillRule="evenodd" clipRule="evenodd" d="M18.2929 12.2929C18.4804 12.1054 18.7348 12 19 12H23C23.2652 12 23.5196 12.1054 23.7071 12.2929C23.8946 12.4804 24 12.7348 24 13V14H18V13C18 12.7348 18.1054 12.4804 18.2929 12.2929ZM16 14V13C16 12.2043 16.3161 11.4413 16.8787 10.8787C17.4413 10.3161 18.2044 10 19 10H23C23.7956 10 24.5587 10.3161 25.1213 10.8787C25.6839 11.4413 26 12.2043 26 13V14H28H30C30.5523 14 31 14.4477 31 15C31 15.5523 30.5523 16 30 16H29V29C29 29.7957 28.6839 30.5587 28.1213 31.1213C27.5587 31.6839 26.7957 32 26 32H16C15.2043 32 14.4413 31.6839 13.8787 31.1213C13.3161 30.5587 13 29.7957 13 29V16H12C11.4477 16 11 15.5523 11 15C11 14.4477 11.4477 14 12 14H14H16ZM17 16H25H27V29C27 29.2652 26.8946 29.5196 26.7071 29.7071C26.5196 29.8946 26.2652 30 26 30H16C15.7348 30 15.4804 29.8946 15.2929 29.7071C15.1054 29.5196 15 29.2652 15 29V16H17ZM19 19C19.5523 19 20 19.4477 20 20V26C20 26.5523 19.5523 27 19 27C18.4477 27 18 26.5523 18 26V20C18 19.4477 18.4477 19 19 19ZM24 26V20C24 19.4477 23.5523 19 23 19C22.4477 19 22 19.4477 22 20V26C22 26.5523 22.4477 27 23 27C23.5523 27 24 26.5523 24 26Z" fill="white"/>
          </svg>
        </button>
      </>
    ) : (
      <button className="flex items-center justify-center cursor-pointer" onClick={() => onOpenSidebar(product)}>
        
      <div className="absolute top-27 right-26 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="w-9 h-9 rounded-full flex items-center justify-center">
            
               <svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
               <rect width="42" height="42" rx="21" fill="white"/>
               <path fill-rule="evenodd" clip-rule="evenodd" d="M10 10C9.44772 10 9 10.4477 9 11C9 11.5523 9.44772 12 10 12H13.1803L14.012 16.1551C14.0164 16.1835 14.022 16.2116 14.0288 16.2392L15.6992 24.5848L15.6993 24.5857C15.8366 25.2759 16.2122 25.8959 16.7605 26.3373C17.3062 26.7766 17.9884 27.011 18.6886 27H28.3914C29.0916 27.011 29.7738 26.7766 30.3195 26.3373C30.868 25.8958 31.2437 25.2754 31.3808 24.5848L31.3809 24.5848L31.3823 24.5773L32.9823 16.1873C33.0381 15.8946 32.9605 15.5922 32.7705 15.3626C32.5805 15.1329 32.298 15 32 15H15.8204L14.9806 10.8037C14.887 10.3364 14.4766 10 14 10H10ZM17.6606 24.1937L16.2207 17H30.7913L29.4185 24.1984C29.3723 24.4273 29.2474 24.6328 29.0654 24.7793C28.8826 24.9265 28.6538 25.0047 28.4192 25.0002L28.4 25H18.68L18.6608 25.0002C18.4262 25.0047 18.1974 24.9265 18.0146 24.7793C17.8318 24.6322 17.7066 24.4254 17.6608 24.1952L17.6606 24.1937ZM16 31C16 29.8954 16.8954 29 18 29C19.1046 29 20 29.8954 20 31C20 32.1046 19.1046 33 18 33C16.8954 33 16 32.1046 16 31ZM27 31C27 29.8954 27.8954 29 29 29C30.1046 29 31 29.8954 31 31C31 32.1046 30.1046 33 29 33C27.8954 33 27 32.1046 27 31Z" fill="black" fill-opacity="0.5"/>
               </svg>

          </div>
       </div>

      </button>
    )}
  </div>

         <img
         src={isInWishlist(product.id) ? "/images/like.png" : "/images/unlike.png"}
         alt=""
         onClick={() => toggleWishlist(product.id)}
         className="absolute top-5 right-5 w-9 cursor-pointer"
        />
</div>

       <div className="mt-3.25">
         <div className="flex justify-between ">
            <p className="text-black cursor-pointer truncate">{product.title}</p>
            <span className="font-bold">${product.price}</span>
         </div>
           
           <p className="text-black">{product.category}</p>

           <span className="text-[14px] text-gray-500 truncate">{product.description.slice(0, 40)}...</span>

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