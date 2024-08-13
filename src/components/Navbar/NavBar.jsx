import { useState } from "react";

function Navbar() {
  // State to toggle the mobile menu visibility
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div>
      <nav className="text-white p-4 flex justify-between items-center relative bg-transparent">
        {/* Mobile menu button - toggles the visibility of the mobile menu */}
        <button
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        {/* Logo - centered on mobile and static on desktop */}
        <div className="absolute left-1/2 transform -translate-x-1/2 md:static md:translate-x-0 pl-7">
          <img
            className="h-9 w-17 mt-2"
            src="https://lgi-img-cdn-lb.lionsgateplay.com/prd-peg-data/default/web3/resources/images/channels/voucher-thankyou-page/rebrand-lionsgateplay.png"
            alt="Lionsgate Play"
          />
        </div>

        {/* Desktop navigation links - hidden on mobile */}
        <div className="hidden md:flex items-center space-x-8 ml-[-40rem]">
          <div className="space-x-6">
            {/* Navigation links */}
            <a
              href="#"
              className="hover:text-gray-400 text-sm border-b-2 mx-3 font-semibold border-lime-300 pb-1"
            >
              HOME
            </a>
            <a
              href="#"
              className="hover:text-gray-400 text-sm pr-4 font-semibold"
            >
              SHOWS
            </a>
            <a href="#" className="hover:text-gray-400 text-sm font-semibold">
              MOVIES
            </a>
          </div>
        </div>

        {/* Desktop action buttons - hidden on mobile */}
        <div className="hidden md:flex items-center space-x-8">
          {/* Search button */}
          <button className="hover:text-yellow-400 flex items-center space-x-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
            <span className="font-semibold text-sm mr-4">Search</span>
          </button>
          {/* Log In button */}
          <button className="hover:text-gray-400 text-sm mr-6 font-semibold">
            LOG IN
          </button>
          {/* Sign Up button */}
          <button className="hover:text-gray-400 px-4 py-2 pr-7 text-sm rounded font-semibold">
            SIGN UP
          </button>
        </div>

        {/* Mobile menu - shown when menu is open */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-cyan-900 md:hidden z-50">
            {/* Mobile navigation links */}
            <a href="#" className="block py-2 px-4 hover:text-yellow-400">
              HOME
            </a>
            <a href="#" className="block py-2 px-4 hover:text-yellow-400">
              SHOWS
            </a>
            <a href="#" className="block py-2 px-4 hover:text-yellow-400">
              MOVIES
            </a>
            <a href="#" className="block py-2 px-4 hover:text-yellow-400">
              Search
            </a>
            <a href="#" className="block py-2 px-4 hover:text-yellow-400">
              LOG IN
            </a>
            <a href="#" className="block py-2 px-4 hover:text-yellow-400">
              SIGN UP
            </a>
          </div>
        )}
      </nav>
    </div>
  );
}

export default Navbar;
