const Footer = () => {
  return (
    <>
      <footer className="bg-orange-400">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 px-6 md:px-16 py-14">
          <div>
            <div className="flex items-center gap-2 text-white font-bold text-2xl mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-7 h-7"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                />
              </svg>
              Minimal Shopping
            </div>
            <p className="text-orange-200 text-base leading-relaxed mb-6">
              Quality products at prices you'll love. Fast delivery, easy
              returns.
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                aria-label="Instagram"
                className="w-10 h-10 rounded-full bg-white/20 text-white flex items-center justify-center hover:bg-white/30 transition"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <rect
                    x="2"
                    y="2"
                    width="20"
                    height="20"
                    rx="5"
                    ry="5"
                    strokeWidth={2}
                  />
                  <circle cx="12" cy="12" r="4" strokeWidth={2} />
                  <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
                </svg>
              </a>
              <a
                href="#"
                aria-label="Twitter"
                className="w-10 h-10 rounded-full bg-white/20 text-white flex items-center justify-center hover:bg-white/30 transition"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a
                href="#"
                aria-label="Facebook"
                className="w-10 h-10 rounded-full bg-white/20 text-white flex items-center justify-center hover:bg-white/30 transition"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
            </div>
          </div>

          <div>
            <p className="text-white font-semibold text-lg mb-5">Shop</p>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-orange-200 text-base hover:text-white transition"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-orange-200 text-base hover:text-white transition"
                >
                  Products
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-orange-200 text-base hover:text-white transition"
                >
                  What's New
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-orange-200 text-base hover:text-white transition"
                >
                  Offers
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-white font-semibold text-lg mb-5">Support</p>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-orange-200 text-base hover:text-white transition"
                >
                  My Account
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-orange-200 text-base hover:text-white transition"
                >
                  Track Order
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-orange-200 text-base hover:text-white transition"
                >
                  Returns
                </a>
              </li>
              <li>
                <a
                  href="tel:+18005551890"
                  className="text-orange-200 text-base hover:text-white transition"
                >
                  +91 (720) 090 1896
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 mx-6 md:mx-16" />

        <div className="flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-5 gap-3 text-orange-200 text-sm">
          <span>© 2026 Minimal Shopping. All rights reserved.</span>
          <div className="flex gap-5">
            <a href="#" className="hover:text-white transition">
              Privacy
            </a>
            <a href="#" className="hover:text-white transition">
              Terms
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
