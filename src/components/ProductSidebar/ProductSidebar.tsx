import { useState } from "react";
import type { Product } from "../../types";
import { useCart } from "../../hooks/useCart";

interface Props {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
  ShowToastbar: () => void;
  hideToast: () => void;
}

const ProductSidebar = ({
  product,
  isOpen,
  onClose,
  ShowToastbar,
  hideToast,
}: Props) => {
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState<number>(1);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);

  const handleAddToCart = () => {
    if (!product) return;
    for (let i = 0; i < quantity; i++) {
      addToCart(product);
    }
    ShowToastbar();
    setTimeout(() => {
      hideToast();
    }, 2500);
    onClose();
  };

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40 md:hidden"
          onClick={onClose}
        />
      )}

      <div
        style={{
          right: isOpen ? "4px" : "-150%",
          transition: "right 0.4s ease",
          width: "min(calc(100vw - 8px), 470px)",
        }}
        className="bg-white fixed top-4 bottom-4 rounded-2xl shadow-xl z-50 flex flex-col px-6 py-5 overflow-hidden"
      >
        {/*close button*/}
        <button
          onClick={onClose}
          className="w-10 h-10 rounded-full bg-gray-200 text-gray-800 font-bold cursor-pointer flex items-center justify-center absolute top-5 right-5"
        >
          ✕
        </button>

        {/*product image*/}
        <div className="w-full shrink-0">
          <img
            style={{ height: "clamp(120px, 22vh, 240px)" }}
            className="w-fit rounded-2xl object-contain"
            src={product?.image || "/images/images (1).jpg"}
            alt={product?.title || ""}
          />
        </div>

        {/*product information*/}
        <div className="shrink-0 mt-3">
          <div className="flex justify-between items-start">
            <p className="text-black font-medium truncate pr-2">
              {product?.title || "Rounded neck - T shirt"}
            </p>
            <span className="font-bold shrink-0">
              {product ? `$${product.price}` : "85$"}
            </span>
          </div>
          <p className="text-black text-sm">{product?.category || "100% Cotton"}</p>
          <span className="text-[13px] text-gray-500 line-clamp-1">
            {product?.description.slice(0, 50) || "Organic Cotton, Fair Trade quality"}...
          </span>
          <div className="mt-2">
            <svg width="100" height="14" viewBox="0 0 120 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8 1L10.163 5.60778L15 6.35121L11.5 9.93586L12.326 15L8 12.6078L3.674 15L4.5 9.93586L1 6.35121L5.837 5.60778L8 1Z" fill="#FE8A00" stroke="#FE8A00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M34 1L36.163 5.60778L41 6.35121L37.5 9.93586L38.326 15L34 12.6078L29.674 15L30.5 9.93586L27 6.35121L31.837 5.60778L34 1Z" fill="#FE8A00" stroke="#FE8A00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M60 1L62.163 5.60778L67 6.35121L63.5 9.93586L64.326 15L60 12.6078L55.674 15L56.5 9.93586L53 6.35121L57.837 5.60778L60 1Z" fill="#FE8A00" stroke="#FE8A00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M86 1L88.163 5.60778L93 6.35121L89.5 9.93586L90.326 15L86 12.6078L81.674 15L82.5 9.93586L79 6.35121L83.37 5.60778L86 1Z" stroke="#FE8A00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M112 1L114.163 5.60778L119 6.35121L115.5 9.93586L116.326 15L112 12.6078L107.674 15L108.5 9.93586L105 6.35121L109.837 5.60778L112 1Z" stroke="#FE8A00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>

        {/*number of selection*/}
        <div className="shrink-0 mt-3">
          <div className="flex items-center border border-gray-300 rounded-xl h-10 w-30">
            <button onClick={() => setQuantity((q) => Math.max(1, q - 1))} className="flex items-center justify-center w-1/3 h-full cursor-pointer">
              <div className="flex items-center justify-center w-5 h-5 rounded-full border border-gray-400 text-gray-400 font-light">-</div>
            </button>
            <div className="flex items-center justify-center w-1/3 h-full border-l border-r border-gray-300">
              <span className="font-medium text-gray-600 leading-none">{String(quantity).padStart(2, "0")}</span>
            </div>
            <button onClick={() => setQuantity((q) => q + 1)} className="flex items-center justify-center w-1/3 h-full cursor-pointer">
              <div className="flex items-center justify-center w-5 h-5 rounded-full border border-pink-500 text-pink-500 font-light">+</div>
            </button>
          </div>
        </div>

        {/*Size selection*/}
        <div className="shrink-0 mt-3">
          <div className="flex gap-3">
            {["S", "M", "L", "XL", "XXL"].map((size) => (
              <button
                key={size}
                onClick={() => setSelectedSize(size)}
                className={`w-10 h-10 border rounded-lg cursor-pointer transition-colors duration-200 text-sm ${
                  selectedSize === size
                    ? "bg-orange-400 border-orange-400 text-white"
                    : "border-orange-400 text-orange-500 hover:border-orange-400 hover:text-orange-400"
                }`}
              >
                {size}
              </button>
            ))}
          </div>
        </div>

        {/*empty area*/}
        <div className="flex-1" />

        {/*Delivery information*/}
        <div className="shrink-0 space-y-3">
          <div className="flex gap-4 items-center">
            <span className="shrink-0">
              <svg width="24" height="20" viewBox="0 0 24 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M1 0C0.447715 0 0 0.447715 0 1V14C0 14.5523 0.447715 15 1 15H2.33682C2.12085 15.4546 2 15.9632 2 16.5C2 18.433 3.567 20 5.5 20C7.433 20 9 18.433 9 16.5C9 15.9632 8.87915 15.4546 8.66318 15H15.3368C15.1208 15.4546 15 15.9632 15 16.5C15 18.433 16.567 20 18.5 20C20.433 20 22 18.433 22 16.5C22 15.9632 21.8792 15.4546 21.6632 15H23C23.5523 15 24 14.5523 24 14V9C24 8.73478 23.8946 8.48043 23.7071 8.29289L20.7071 5.29289C20.5196 5.10536 20.2652 5 20 5H17V1C17 0.447715 16.5523 0 16 0H1ZM18.5 13H22V9.41421L19.5858 7H17V13H18.5ZM18.5 15C17.6716 15 17 15.6716 17 16.5C17 17.3284 17.6716 18 18.5 18C19.3284 18 20 17.3284 20 16.5C20 15.6716 19.3284 15 18.5 15ZM4 16.5C4 15.6716 4.67157 15 5.5 15C6.32843 15 7 15.6716 7 16.5C7 17.3284 6.32843 18 5.5 18C4.67157 18 4 17.3284 4 16.5ZM15 13H5.5H2V2H15V6V13Z" fill="black" fillOpacity="0.5"/>
              </svg>
            </span>
            <div>
              <h3 className="font-medium text-sm">Delivery limit</h3>
              <p className="text-xs text-gray-500">Free delivery within 50 km's.</p>
            </div>
          </div>

          <div className="flex gap-4 items-center">
            <span className="shrink-0">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M1.70711 0.292893C1.31658 -0.0976311 0.683417 -0.0976311 0.292893 0.292893C-0.0976311 0.683417 -0.0976311 1.31658 0.292893 1.70711L3.11678 4.531C3.04167 4.67237 3 4.83265 3 5V12C3 15.4464 5.28175 18.2003 7.3415 20.0026C8.39238 20.9221 9.43854 21.6408 10.22 22.1292C10.6118 22.3741 10.9397 22.5627 11.1719 22.6913C11.2881 22.7556 11.3806 22.805 11.4453 22.839C11.4777 22.856 11.5032 22.8692 11.5212 22.8784L11.5427 22.8894L11.5492 22.8926L11.5514 22.8937L11.5522 22.8941C11.5525 22.8943 11.5528 22.8944 12 22L11.5528 22.8944C11.8412 23.0386 12.1815 23.0349 12.4667 22.8844C14.3771 21.8764 16.1212 20.5844 17.6401 19.0544L22.2929 23.7071C22.6834 24.0976 23.3166 24.0976 23.7071 23.7071C24.0976 23.3166 24.0976 22.6834 23.7071 22.2929L18.3329 16.9187C18.3295 16.9152 18.326 16.9118 18.3226 16.9083L5.45315 4.03894C5.44296 4.02829 5.43255 4.01788 5.42194 4.00773L1.70711 0.292893ZM5 6.41421V12C5 14.5536 6.71825 16.7997 8.6585 18.4974C9.60762 19.3279 10.5615 19.9842 11.28 20.4332C11.5626 20.6098 11.8071 20.7534 11.9985 20.8619C13.5501 19.9879 14.9727 18.9035 16.2259 17.6401L5 6.41421ZM11.6503 1.06318C11.8763 0.978771 12.1253 0.978944 12.3512 1.06367L20.3512 4.06367C20.7415 4.21003 21.0001 4.58316 21.0001 5V12V12.0066H21.0001C20.9949 12.7832 20.8754 13.5548 20.6451 14.2964C20.4814 14.8239 19.9211 15.1188 19.3936 14.9551C18.8662 14.7913 18.5713 14.231 18.735 13.7036C18.9067 13.1507 18.996 12.5755 19.0001 11.9966V5.693L11.9993 3.06772L9.18991 4.11682C8.67252 4.31002 8.09647 4.04721 7.90327 3.52982C7.71007 3.01243 7.97288 2.43639 8.49026 2.24318L11.6503 1.06318Z" fill="black" fillOpacity="0.5"/>
              </svg>
            </span>
            <div>
              <h3 className="font-medium text-sm">Return Policy</h3>
              <p className="text-xs text-gray-500">With-in 5 days of product delivery.</p>
            </div>
          </div>
        </div>

        {/*buttons*/}
        <div className="shrink-0 mt-7 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <button
              onClick={handleAddToCart}
              className="px-6 py-1 border border-orange-500 rounded-full text-orange-500 cursor-pointer hover:text-white hover:bg-orange-500 duration-300"
            >
              Add to cart
            </button>
            <button onClick={onClose} className="text-gray-500 hover:text-gray-300 cursor-pointer">
              Cancel
            </button>
          </div>

          <div className="flex gap-2 items-center text-lg font-medium text-gray-400">
            <span>
              <svg width="24" height="23" viewBox="0 0 24 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M1 0C0.447715 0 0 0.447715 0 1C0 1.55228 0.447715 2 1 2H4.18032L5.01195 6.15508C5.01638 6.18353 5.02201 6.21159 5.02879 6.2392L6.69916 14.5848L6.69933 14.5857C6.83664 15.2759 7.21225 15.8959 7.76048 16.3373C8.3062 16.7766 8.98837 17.011 9.68864 17H19.3914C20.0916 17.011 20.7738 16.7766 21.3195 16.3373C21.868 15.8958 22.2437 15.2754 22.3808 14.5848L22.3809 14.5848L22.3823 14.5773L23.9823 6.18733C24.0381 5.89458 23.9605 5.59218 23.7705 5.36256C23.5805 5.13293 23.298 5 23 5H6.82043L5.98055 0.803743C5.88701 0.336385 5.47663 0 5 0H1ZM8.66055 14.1937L7.22073 7H21.7913L20.4185 14.1984C20.3723 14.4273 20.2474 14.6328 20.0654 14.7793C19.8826 14.9265 19.6538 15.0047 19.4192 15.0002L19.4 15H9.68L9.66084 15.0002C9.42619 15.0047 9.19743 14.9265 9.01461 14.7793C8.83179 14.6322 8.70656 14.4254 8.66084 14.1952L8.66055 14.1937ZM7 21C7 19.8954 7.89543 19 9 19C10.1046 19 11 19.8954 11 21C11 22.1046 10.1046 23 9 23C7.89543 23 7 22.1046 7 21ZM18 21C18 19.8954 18.8954 19 20 19C21.1046 19 22 19.8954 22 21C22 22.1046 21.1046 23 20 23C18.8954 23 18 22.1046 18 21Z" fill="black" fillOpacity="0.5"/>
              </svg>
            </span>
            ${product ? (product.price * quantity).toFixed(2) : "85"}
          </div>
        </div>

      </div>
    </>
  );
};

export default ProductSidebar;