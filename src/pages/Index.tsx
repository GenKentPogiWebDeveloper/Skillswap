import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useTheme } from "@/components/theme-provider";
import { Menu, X, Moon, Sun } from "lucide-react";
import { useState } from "react";

const Index = () => {
  const navigate = useNavigate();
  const { theme, setTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="min-h-screen">
      {/* Navigation Bar */}
      <nav className="w-full bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm shadow-sm fixed top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-3">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2">
              <img 
                src="/lovable-uploads/ea644d86-55c5-485f-ac3c-7fcef4d19031.png" 
                alt="Skillswap Logo" 
                className="w-8 h-8"
              />
              <span className="text-xl font-bold bg-gradient-to-r from-violet-700 to-purple-900 bg-clip-text text-transparent dark:from-violet-400 dark:to-purple-600">
                SKILLSWAP
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-6">
              <Link to="/" className="text-gray-700 dark:text-gray-200 hover:text-violet-600 dark:hover:text-violet-400 transition-colors">HOME</Link>
              <Link to="/info" className="text-gray-700 dark:text-gray-200 hover:text-violet-600 dark:hover:text-violet-400 transition-colors">INFO</Link>
              <Link to="/contact" className="text-gray-700 dark:text-gray-200 hover:text-violet-600 dark:hover:text-violet-400 transition-colors">CONTACT</Link>
              <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              >
                {theme === "dark" ? (
                  <Sun className="w-5 h-5 text-yellow-500" />
                ) : (
                  <Moon className="w-5 h-5 text-gray-700" />
                )}
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={toggleMenu}
                className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              >
                {isMenuOpen ? (
                  <X className="w-6 h-6 text-gray-700 dark:text-gray-200" />
                ) : (
                  <Menu className="w-6 h-6 text-gray-700 dark:text-gray-200" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="md:hidden py-4 space-y-4"
            >
              <Link 
                to="/" 
                className="block text-gray-700 dark:text-gray-200 hover:text-violet-600 dark:hover:text-violet-400 transition-colors"
                onClick={toggleMenu}
              >
                HOME
              </Link>
              <Link 
                to="/info" 
                className="block text-gray-700 dark:text-gray-200 hover:text-violet-600 dark:hover:text-violet-400 transition-colors"
                onClick={toggleMenu}
              >
                INFO
              </Link>
              <Link 
                to="/contact" 
                className="block text-gray-700 dark:text-gray-200 hover:text-violet-600 dark:hover:text-violet-400 transition-colors"
                onClick={toggleMenu}
              >
                CONTACT
              </Link>
              <button
                onClick={() => {
                  setTheme(theme === "dark" ? "light" : "dark");
                  toggleMenu();
                }}
                className="w-full text-left flex items-center space-x-2 text-gray-700 dark:text-gray-200 hover:text-violet-600 dark:hover:text-violet-400 transition-colors"
              >
                {theme === "dark" ? (
                  <>
                    <Sun className="w-5 h-5 text-yellow-500" />
                    <span>Light Mode</span>
                  </>
                ) : (
                  <>
                    <Moon className="w-5 h-5" />
                    <span>Dark Mode</span>
                  </>
                )}
              </button>
            </motion.div>
          )}
        </div>
      </nav>

      {/* Main Content */}
      <div className="min-h-screen flex flex-col items-center justify-center p-4 pt-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center space-y-12 max-w-2xl"
      >
        <div className="space-y-6">
          <div className="flex items-center justify-center space-x-3">
            <img 
              src="/lovable-uploads/ea644d86-55c5-485f-ac3c-7fcef4d19031.png"
              alt="Skillswap Logo" 
              className="w-12 h-12 animate-float"
            />
            <h1 className="text-4xl font-bold bg-gradient-to-r from-violet-700 to-purple-900 bg-clip-text text-transparent">
              SKILLSWAP
            </h1>
          </div>
          
          <p className="text-violet-800 text-lg">
            Connect, learn, and grow with skilled professionals
          </p>
        </div>

        <div className="space-y-4">
          <button 
            className="glow-button w-full sm:w-auto"
            onClick={() => navigate('/services')}
          >
            FIND A SERVICE PROVIDER
          </button>
          
          <button className="glow-button w-full sm:w-auto">
            BECOME A SERVICE PROVIDER
          </button>
        </div>
      </motion.div>
      </div>
    </div>
  );
};

export default Index;
