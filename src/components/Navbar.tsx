import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, Mail } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Products", path: "/products" },
    { name: "Manufacturing", path: "/manufacturing" },
    { name: "Exports", path: "/exports" },
    { name: "Quality", path: "/quality" },
    { name: "Blog", path: "/blog" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-lg py-2" : "bg-white/90 backdrop-blur-md py-4"
      }`}
    >
      {/* Top Bar (Contact Info) */}
      {!isScrolled && (
        <div className="hidden md:flex bg-primary text-white py-1 px-6 justify-end gap-6 text-xs font-light tracking-wider border-b border-white/10">
          <div className="flex items-center gap-2">
            <Phone size={12} />
            <span>+91 9168304010</span>
          </div>
          <div className="flex items-center gap-2">
            <Mail size={12} />
            <span>sales@protectlifesciences.com</span>
          </div>
        </div>
      )}

      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center mt-2">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img
            src="/logo.png"
            alt="Protect Life Sciences"
            className="h-14 w-auto object-contain"
          />
        </Link>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`text-sm font-semibold transition-colors duration-200 hover:text-primary ${
                location.pathname === link.path ? "text-primary" : "text-gray-600"
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/contact"
            className="bg-primary text-white px-6 py-2 rounded-full text-sm font-bold hover:bg-primary-dark transition-all transform hover:scale-105"
          >
            Inquiry
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden text-primary p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden absolute top-full left-0 w-full bg-white shadow-2xl transition-all duration-300 transform ${
          isOpen ? "translate-y-0 opacity-100" : "-translate-y-10 opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex flex-col p-6 gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`text-lg font-medium border-b border-gray-100 pb-2 ${
                location.pathname === link.path ? "text-primary" : "text-gray-600"
              }`}
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/contact"
            className="bg-primary text-white text-center py-3 rounded-xl font-bold mt-4"
            onClick={() => setIsOpen(false)}
          >
            Send Inquiry
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;