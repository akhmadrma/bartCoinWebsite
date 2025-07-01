import { useEffect, useState } from "react";
import "./navbar.css";

const NavigationBar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false); // State untuk toggle menu

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggleMenu = () => {
    setMenuOpen(prev => !prev);
  };

  return (
    <nav className={`sticky-navbar ${scrolled ? "scrolled" : ""} flex px-4 border-b md:shadow-lg items-center relative`}>
      <div className="text-lg font-bold px-10 py-4 montserrat">Bart Coin</div>

      <ul className={`md:px-2 ml-auto md:flex md:space-x-2 absolute md:relative top-full left-0 right-0 bg-white md:bg-transparent z-10 transition-all duration-300
        ${menuOpen ? "block" : "hidden"} md:block`}>
        <li>
          <a href="#home" className="flex md:inline-flex p-4 items-center hover:bg-gray-50">
            <span>Home</span>
          </a>
        </li>
        <li>
          <a href="#about" className="flex md:inline-flex p-4 items-center hover:bg-gray-50">
            <span>About</span>
          </a>
        </li>
        <li>
          <a href="#tokenomics" className="flex md:inline-flex p-4 items-center hover:bg-gray-50">
            <span>Tokenomics</span>
          </a>
        </li>
        <li>
          <a href="#roadmaps" className="flex md:inline-flex p-4 items-center hover:bg-gray-50">
            <span>Roadmaps</span>
          </a>
        </li>
        <li>
          <a href="http://dexscreener.com/base/0x0256c5ecabeb0f1f46359a87a915fd325756bcfd" className="flex md:inline-flex p-4 items-center hover:bg-gray-50">
            <span>Dex</span>
          </a>
        </li>
        <li>
          <a href="https://ape.store/base/0x0256c5ecabeb0f1f46359a87a915fd325756bcfd" className="flex md:inline-flex p-4 items-center hover:bg-gray-50">
            <span>ApeStore</span>
          </a>
        </li>
      </ul>

      <div className="ml-auto md:hidden text-black cursor-pointer" onClick={toggleMenu}>
        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 fill-current" viewBox="0 0 24 24">
          <path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"/>
        </svg>
      </div>
    </nav>
  );
};

export default NavigationBar;