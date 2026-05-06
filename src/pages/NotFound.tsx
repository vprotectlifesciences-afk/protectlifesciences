import { Link } from "react-router-dom";
import { Home, ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";

const NotFound = () => {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-6">
      <div className="max-w-md w-full text-center space-y-8">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="relative"
        >
          <h1 className="text-9xl font-black text-primary opacity-10">404</h1>
          <div className="absolute inset-0 flex items-center justify-center">
             <p className="text-2xl font-bold text-gray-800">Page Not Found</p>
          </div>
        </motion.div>
        
        <p className="text-gray-500">
          Oops! The page you are looking for doesn't exist or has been moved.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            to="/" 
            className="btn-primary flex items-center justify-center gap-2"
          >
            <Home size={18} /> Back to Home
          </Link>
          <button 
            onClick={() => window.history.back()}
            className="btn-outline flex items-center justify-center gap-2"
          >
            <ArrowLeft size={18} /> Go Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
