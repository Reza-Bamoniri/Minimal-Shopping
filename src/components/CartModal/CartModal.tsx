import { useCart } from "../../hooks/useCart";
import { useState, useRef } from "react";

interface Props {
  onCloseCartModal: () => void;
}

const defaultDelivery = {
  name: "Wade John Smith",
  address1: "New Zealand - 2nd Cross",
  address2: "Cross raod - Po 25698",
  country: "United States",
};

const CartModal = ({ onCloseCartModal }: Props) => {
  const { cartItems, increaseQuantity, decreaseQuantity, totalItems } =
    useCart();

  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );

  const [delivery, setDelivery] = useState(defaultDelivery);

  const firstInputRef = useRef<HTMLInputElement>(null);

  const handleEdit = () => {
    firstInputRef.current?.focus();
  };

  return (
    <>
      <div
        onClick={onCloseCartModal}
        className="fixed inset-0 bg-black/40 flex items-center justify-center p-4 z-50"
      >
        <div
          onClick={(e) => e.stopPropagation()}
          className="bg-white rounded-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto shadow-2xl relative"
        >
          <button
            onClick={onCloseCartModal}
            className="absolute top-4 right-4 w-9 h-9 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors z-10 cursor-pointer"
          >
            <svg
              className="w-5 h-5 text-gray-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          <div className="grid grid-cols-1 md:grid-cols-[1fr_300px] gap-4 p-5">
            <div className="flex flex-col gap-4">
              <div className="border border-gray-200 overflow-y-auto max-h-87.5 rounded-xl p-5">
                <h2 className="text-lg font-semibold text-gray-800 mb-4">
                  Cart Details
                </h2>

                {cartItems.length === 0 && (
                  <p className="text-center text-gray-400 py-8">
                    The Basket is empty
                  </p>
                )}

                {cartItems.map((item) => (
                  <div
                    key={item.id}
                    className="flex gap-4 items-start mb-4 pb-4 border-b border-gray-100 last:border-0 last:mb-0 last:pb-0"
                  >
                    <div className="relative shrink-0">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-20 h-20 rounded-lg object-cover"
                      />
                      <span className="absolute -bottom-2 -right-2 w-6 h-6 bg-gray-300 text-orange-500 text-xs font-bold rounded-full flex items-center justify-center">
                        {item.quantity}
                      </span>
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex justify-between items-start gap-2">
                        <div>
                          <p className="font-semibold text-gray-800 text-sm">
                            {item.title}
                          </p>
                          <p className="text-xs text-gray-500">
                            {item.category}
                          </p>
                          <p className="text-xs text-gray-400 mt-0.5">
                            {item.description.slice(0, 40)}...
                          </p>
                        </div>
                        <span className="text-base font-bold text-gray-600 whitespace-nowrap">
                          ${(item.price * item.quantity).toFixed(2)}
                        </span>
                      </div>

                      <div className="flex gap-0.5 mt-2">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <svg
                            key={star}
                            className={`w-4 h-4 fill-current ${star <= Math.round(item.rating.rate) ? "text-orange-400" : "text-gray-300"}`}
                            viewBox="0 0 20 20"
                          >
                            <path d="M10 15l-5.878 3.09 1.122-6.545L.488 6.91l6.562-.954L10 0l2.95 5.956 6.562.954-4.756 4.635 1.122 6.545z" />
                          </svg>
                        ))}
                      </div>

                      <div className="flex items-center gap-2 mt-2">
                        <button
                          onClick={() => decreaseQuantity(item.id)}
                          className="w-6 h-6 rounded-full border border-gray-300 flex items-center justify-center text-gray-500 hover:border-orange-400 hover:text-orange-400 cursor-pointer"
                        >
                          −
                        </button>
                        <button
                          onClick={() => increaseQuantity(item.id)}
                          className="w-6 h-6 rounded-full border border-pink-400 flex items-center justify-center text-pink-400 hover:bg-pink-50 cursor-pointer"
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="border border-gray-200 rounded-xl p-5">
                <div className="flex justify-between items-center mb-3">
                  <h2 className="text-lg font-semibold text-gray-600">
                    Delivery Information
                  </h2>
                  <button
                    onClick={handleEdit}
                    className="px-4 py-1.5 border border-orange-400 text-orange-400 text-sm rounded-full hover:bg-orange-400 transition-colors font-medium cursor-pointer hover:text-amber-50"
                  >
                    Edit
                  </button>
                </div>

                <div className="text-sm text-gray-600 space-y-2">
                  <input
                    ref={firstInputRef}
                    value={delivery.name}
                    onChange={(e) =>
                      setDelivery({ ...delivery, name: e.target.value })
                    }
                    className="w-full font-medium text-gray-700 border-b border-transparent focus:border-orange-400 focus:outline-none py-0.5 transition-colors"
                  />
                  <input
                    value={delivery.address1}
                    onChange={(e) =>
                      setDelivery({ ...delivery, address1: e.target.value })
                    }
                    className="w-full border-b border-transparent focus:border-orange-400 focus:outline-none py-0.5 transition-colors"
                  />
                  <input
                    value={delivery.address2}
                    onChange={(e) =>
                      setDelivery({ ...delivery, address2: e.target.value })
                    }
                    className="w-full border-b border-transparent focus:border-orange-400 focus:outline-none py-0.5 transition-colors"
                  />
                  <input
                    value={delivery.country}
                    onChange={(e) =>
                      setDelivery({ ...delivery, country: e.target.value })
                    }
                    className="w-full border-b border-transparent focus:border-orange-400 focus:outline-none py-0.5 transition-colors"
                  />
                </div>
              </div>
            </div>

            <div className="border border-gray-200 rounded-xl h-full">
              <div className="p-5">
                <h2 className="text-lg font-semibold text-gray-800 mb-4">
                  Order Summary
                </h2>

                <div className="space-y-3 text-sm">
                  <div className="flex flex-col">
                    <span className="text-gray-900 font-medium">
                      Products added
                    </span>
                    <span className="text-gray-500 mb-2">{totalItems}</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-gray-900 font-medium mb-1">GST</span>
                    <span className="text-gray-500 mb-2">1.25%</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-gray-900 font-medium mb-1">
                      S-GST
                    </span>
                    <span className="text-gray-500 mb-2">1.25%</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-gray-900 font-medium mb-1">
                      Total Cart Value{" "}
                      <span className="text-gray-500 font-normal">(in $)</span>
                    </span>
                    <span className="text-gray-500 mb-2">
                      ${totalPrice.toFixed(2)}
                    </span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-gray-900 font-medium mb-1">
                      Discount{" "}
                      <span className="text-gray-500 font-normal">(in %)</span>
                    </span>
                    <span className="text-gray-500">7.5%</span>
                  </div>
                </div>
              </div>

              <div className="flex items-start flex-col w-full bg-gray-100 mt-9 pt-4 rounded-lg h-40">
                <div className="flex gap-3 items-center rounded-t-lg w-full p-3">
                  <div className="mt-0.5 shrink-0">
                    <svg
                      width="24"
                      height="20"
                      viewBox="0 0 24 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M1 0C0.447715 0 0 0.447715 0 1V14C0 14.5523 0.447715 15 1 15H2.33682C2.12085 15.4546 2 15.9632 2 16.5C2 18.433 3.567 20 5.5 20C7.433 20 9 18.433 9 16.5C9 15.9632 8.87915 15.4546 8.66318 15H15.3368C15.1208 15.4546 15 15.9632 15 16.5C15 18.433 16.567 20 18.5 20C20.433 20 22 18.433 22 16.5C22 15.9632 21.8792 15.4546 21.6632 15H23C23.5523 15 24 14.5523 24 14V9C24 8.73478 23.8946 8.48043 23.7071 8.29289L20.7071 5.29289C20.5196 5.10536 20.2652 5 20 5H17V1C17 0.447715 16.5523 0 16 0H1ZM18.5 13H22V9.41421L19.5858 7H17V13H18.5ZM18.5 15C17.6716 15 17 15.6716 17 16.5C17 17.3284 17.6716 18 18.5 18C19.3284 18 20 17.3284 20 16.5C20 15.6716 19.3284 15 18.5 15ZM4 16.5C4 15.6716 4.67157 15 5.5 15C6.32843 15 7 15.6716 7 16.5C7 17.3284 6.32843 18 5.5 18C4.67157 18 4 17.3284 4 16.5ZM15 13H5.5H2V2H15V6V13Z"
                        fill="black"
                        fillOpacity="0.5"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-700">
                      Delivery limit
                    </p>
                    <p className="text-xs text-gray-500 mt-0.5">
                      Free delivery within 50 km's.
                    </p>
                  </div>
                </div>

                <div className="flex gap-3 items-center rounded-b-lg w-full p-3">
                  <div className="mt-0.5 shrink-0">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M1.70711 0.292893C1.31658 -0.0976311 0.683417 -0.0976311 0.292893 0.292893C-0.0976311 0.683417 -0.0976311 1.31658 0.292893 1.70711L3.11678 4.531C3.04167 4.67237 3 4.83265 3 5V12C3 15.4464 5.28175 18.2003 7.3415 20.0026C8.39238 20.9221 9.43854 21.6408 10.22 22.1292C10.6118 22.3741 10.9397 22.5627 11.1719 22.6913C11.2881 22.7556 11.3806 22.805 11.4453 22.839C11.4777 22.856 11.5032 22.8692 11.5212 22.8784L11.5427 22.8894L11.5492 22.8926L11.5514 22.8937L11.5522 22.8941C11.5525 22.8943 11.5528 22.8944 12 22L11.5528 22.8944C11.8412 23.0386 12.1815 23.0349 12.4667 22.8844C14.3771 21.8764 16.1212 20.5844 17.6401 19.0544L22.2929 23.7071C22.6834 24.0976 23.3166 24.0976 23.7071 23.7071C24.0976 23.3166 24.0976 22.6834 23.7071 22.2929L18.3329 16.9187C18.3295 16.9152 18.326 16.9118 18.3226 16.9083L5.45315 4.03894C5.44296 4.02829 5.43255 4.01788 5.42194 4.00773L1.70711 0.292893ZM5 6.41421V12C5 14.5536 6.71825 16.7997 8.6585 18.4974C9.60762 19.3279 10.5615 19.9842 11.28 20.4332C11.5626 20.6098 11.8071 20.7534 11.9985 20.8619C13.5501 19.9879 14.9727 18.9035 16.2259 17.6401L5 6.41421ZM11.6503 1.06318C11.8763 0.978771 12.1253 0.978944 12.3512 1.06367L20.3512 4.06367C20.7415 4.21003 21.0001 4.58316 21.0001 5V12V12.0066H21.0001C20.9949 12.7832 20.8754 13.5548 20.6451 14.2964C20.4814 14.8239 19.9211 15.1188 19.3936 14.9551C18.8662 14.7913 18.5713 14.231 18.735 13.7036C18.9067 13.1507 18.996 12.5755 19.0001 11.9966V5.693L11.9993 3.06772L9.18991 4.11682C8.67252 4.31002 8.09647 4.04721 7.90327 3.52982C7.71007 3.01243 7.97288 2.43639 8.49026 2.24318L11.6503 1.06318Z"
                        fill="black"
                        fillOpacity="0.5"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-700">
                      Return Policy
                    </p>
                    <p className="text-xs text-gray-500 mt-0.5">
                      With-in 5 days of product delivery.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartModal;
