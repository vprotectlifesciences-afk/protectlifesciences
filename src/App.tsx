import { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import WhatsAppIcon from "./components/WhatsAppIcon";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Products from "./pages/Products";
import Manufacturing from "./pages/Manufacturing";
import Exports from "./pages/Exports";
import Quality from "./pages/Quality";
import Blog from "./pages/Blog";
import NotFound from "./pages/NotFound";

// Component to scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow pt-24 md:pt-28">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/products" element={<Products />} />
            <Route path="/manufacturing" element={<Manufacturing />} />
            <Route path="/exports" element={<Exports />} />
            <Route path="/quality" element={<Quality />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
        
        {/* WhatsApp Floating Button */}
        <a
          href="https://wa.me/919168304010"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:bg-[#1ebd57] hover:scale-110 transition-transform z-50 flex items-center justify-center"
          aria-label="Chat with us on WhatsApp"
        >
          <WhatsAppIcon size={32} />
        </a>
      </div>
    </BrowserRouter>
  );
}

export default App;