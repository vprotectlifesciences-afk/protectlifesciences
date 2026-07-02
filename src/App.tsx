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
  const isMaintenanceMode = true; // Set to false to bring the site back online

  if (isMaintenanceMode) {
    return (
      <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center p-6 text-center">
        <img
          src="/logo.png"
          alt="Protect Life Sciences"
          className="h-24 w-auto object-contain brightness-0 invert mb-8"
        />
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-green-400">Under Maintenance</h1>
        <p className="text-gray-400 max-w-lg text-lg mb-8 leading-relaxed">
          We are currently updating our website to bring you an enhanced experience. We will be back online shortly. Thank you for your patience!
        </p>
        <div className="flex flex-col items-center gap-4 bg-gray-800 p-6 rounded-xl shadow-2xl border border-gray-700">
          <p className="text-gray-300">For urgent inquiries, please reach out to us:</p>
          <a
            href="https://wa.me/919168304010"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-[#25D366] text-white px-6 py-3 rounded-full hover:bg-[#1ebd57] transition font-medium"
          >
            <WhatsAppIcon size={24} />
            Chat on WhatsApp
          </a>
        </div>
      </div>
    );
  }

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