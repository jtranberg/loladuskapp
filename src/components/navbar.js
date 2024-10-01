import { useRef, useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "../styles/navbar.css";

export default function Navbar() {
  const navRef = useRef();
  const toggleButtonRef = useRef();
  const [isNavOpen, setIsNavOpen] = useState(false);

  // Function to toggle the navbar visibility
  const showNavbar = () => {
    setIsNavOpen(!isNavOpen);
  };

  // Close the navbar if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        navRef.current && !navRef.current.contains(event.target) &&
        toggleButtonRef.current && !toggleButtonRef.current.contains(event.target)
      ) {
        setIsNavOpen(false); // Close the navbar if clicked outside
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div>
      {/* Custom SVG Toggle Button */}
      <button
        onClick={showNavbar}
        id="nav__toggle"
        ref={toggleButtonRef}>
        <svg fill="none" viewBox="1 -5 130 100" width="50">
                    <path
                        className="line"
                        ref={toggleButtonRef}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="3"
                        stroke="rgba(32, 27, 2, 0.808)"
                        d="m 70 15 l -27 51 l 62 -38 l -81 20 l 74 7 l -60 -31 l 42 47 l -10 -57 l -45 -1 l 0 68 l 50 0 a 1 1 0 0 0 -10 -67 l 1 66">
                    </path>
                </svg>
            </button>

      {/* Navbar */}
      <nav ref={navRef} className={`header_nav ${isNavOpen ? "nav-open" : ""}`}>
        <ul>
          <li className="nav__item"><NavLink to="/" className="nav__link">Home</NavLink></li>
          <li className="nav__item"><NavLink to="/products" className="nav__link">Products</NavLink></li>
          <li className="nav__item"><NavLink to="/services" className="nav__link">Services</NavLink></li>
          <li className="nav__item"><NavLink to="/appointments" className="nav__link">Appointments</NavLink></li>
          <li className="nav__item"><NavLink to="/blog" className="nav__link">Blog</NavLink></li>
          <li className="nav__item"><NavLink to="/contact" className="nav__link">Contact</NavLink></li>
          <li className="nav__item"><NavLink to="/socials" className="nav__link">Socials</NavLink></li>
          <li className="nav__item"><NavLink to="/random" className="nav__link">Card of the Day</NavLink></li>
        </ul>
      </nav>
    </div>
  );
}
