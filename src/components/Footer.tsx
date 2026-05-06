import { Link } from "react-router-dom";
import {
  Phone,
  Mail,
  MapPin,
  Linkedin,
  Facebook,
  Twitter,
  ShieldCheck,
} from "lucide-react";
import WhatsAppIcon from "./WhatsAppIcon";

const Footer = () => {
  const certLogos = [
    {
      img: "/ISoimg.jpg",
      pdf: "/certificates/iso.pdf",
      name: "ISO Certified",
    },
    {
      img: "/fadimg.jpg",
      pdf: "/certificates/fda.pdf",
      name: "FDA Approved",
    },
    {
      img: "/halalimg.jpg",
      pdf: "/certificates/halal.pdf",
      name: "Halal Certified",
    },
    {
      img: "/Haccpimg.jpg",
      pdf: "/certificates/haccp.pdf",
      name: "HACCP Certified",
    },
    {
      img: "/who.jpg",
      pdf: "/certificates/who.pdf",
      name: "WHO-GMP",
    },
    {
      img: "/certificates/startup.jpg",
      pdf: "/certificates/gmp_cert.jpg",
      name: "Startup India / GMP",
    },
    {
      img: "/certificates/fssai.jpeg",
      pdf: "/certificates/food_license.pdf",
      name: "fssai ",
    },
  ];

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">

      {/* TOP GRID */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">

        {/* Company Info */}
        <div className="space-y-6">
          <div>
            <img
              src="/logo.png"
              alt="Protect Life Sciences"
              className="h-16 w-auto object-contain brightness-0 invert"
            />
          </div>

          <p className="text-gray-400 text-sm leading-relaxed">
            A leading pharmaceutical company in Pune, India, specializing in high-quality sterile injections and third-party manufacturing solutions.
          </p>

          <div className="flex items-center gap-4">
            <ShieldCheck className="text-green-400" size={40} />
            <div>
              <p className="text-xs font-bold uppercase tracking-widest">WHO-GMP</p>
              <p className="text-[10px] text-gray-500">Certified Facility</p>
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-bold mb-6 border-b border-green-400 w-fit pb-1">
            Quick Links
          </h4>
          <ul className="space-y-4 text-sm text-gray-400">
            <li><Link to="/about" className="hover:text-white">About Us</Link></li>
            <li><Link to="/products" className="hover:text-white">Products Range</Link></li>
            <li><Link to="/manufacturing" className="hover:text-white">Third-Party Manufacturing</Link></li>
            <li><Link to="/exports" className="hover:text-white">Global Exports</Link></li>
            <li><Link to="/quality" className="hover:text-white">Quality Control</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-lg font-bold mb-6 border-b border-green-400 w-fit pb-1">
            Contact Us
          </h4>
          <ul className="space-y-4 text-sm text-gray-400">
            <li className="flex items-start gap-3">
              <MapPin size={18} className="text-green-400" />
              <span>Pune, Maharashtra, India</span>
            </li>

            <li className="flex items-center gap-3">
              <Phone size={18} className="text-green-400" />
              <span>+91 9168304010 / 7385060011</span>
            </li>

            <li className="flex items-center gap-3">
              <Mail size={18} className="text-green-400" />
              <a
                href="mailto:sales@protectlifesciences.com"
                className="hover:text-white"
              >
                sales@protectlifesciences.com
              </a>
            </li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h4 className="text-lg font-bold mb-6 border-b border-green-400 w-fit pb-1">
            Follow Us
          </h4>
          <p className="text-sm text-gray-400 mb-6">
            Stay updated with our latest pharmaceutical innovations.
          </p>

          <div className="flex gap-4">
            <a href="#" className="bg-gray-800 p-3 rounded-full hover:bg-green-400 hover:text-black transition">
              <Linkedin size={20} />
            </a>
            <a href="#" className="bg-gray-800 p-3 rounded-full hover:bg-green-400 hover:text-black transition">
              <Facebook size={20} />
            </a>
            <a href="#" className="bg-gray-800 p-3 rounded-full hover:bg-green-400 hover:text-black transition">
              <Twitter size={20} />
            </a>
            <a href="https://wa.me/919168304010" target="_blank" rel="noopener noreferrer" className="bg-gray-800 p-3 rounded-full hover:bg-green-400 hover:text-black transition">
              <WhatsAppIcon size={20} />
            </a>
          </div>
        </div>
      </div>

      {/* CERTIFICATIONS */}
      <div className="max-w-7xl mx-auto px-6 mb-10">
        <h4 className="text-lg font-bold mb-6 text-white">
          Global Certifications
        </h4>

        <div className="flex overflow-x-auto gap-4 pb-2" style={{ scrollbarWidth: "thin", scrollbarColor: "#4ade80 transparent" }}>
          {certLogos.map((logo, index) => (
            <a
              key={index}
              href={logo.pdf}
              target="_blank"
              rel="noopener noreferrer"
              title={logo.name}
              className="flex-shrink-0 bg-white p-2 rounded shadow hover:scale-105 transition"
            >
              <img
                src={logo.img}
                alt={logo.name}
                className="w-20 h-20 object-contain"
              />
            </a>
          ))}
        </div>
      </div>

      {/* BOTTOM */}
      <div className="max-w-7xl mx-auto px-6 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 gap-4">
        <p>© 2026 Protect Life Sciences Pvt Ltd. All rights reserved.</p>

        <div className="flex gap-6">
          <Link to="/privacy" className="hover:text-white">Privacy Policy</Link>
          <Link to="/terms" className="hover:text-white">Terms of Service</Link>
        </div>
      </div>

    </footer>
  );
};

export default Footer;