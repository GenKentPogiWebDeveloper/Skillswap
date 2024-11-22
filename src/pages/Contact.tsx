import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useTheme } from "@/components/theme-provider";
import { Menu, X, Moon, Sun } from "lucide-react";
import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Contact = () => {
  const { theme, setTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const contacts = [
    { name: "MIO CABREROS", image: "/placeholder.svg" },
    { name: "KENT CHAVEZ", image: "/placeholder.svg" },
    { name: "KARL GILMAR FANO", image: "/placeholder.svg" },
    { name: "GENKENT PAGNANAWON", image: "/placeholder.svg" }
  ];

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
              <Link to="/services" className="text-gray-700 dark:text-gray-200 hover:text-violet-600 dark:hover:text-violet-400 transition-colors">SERVICES</Link>
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
                to="/services" 
                className="block text-gray-700 dark:text-gray-200 hover:text-violet-600 dark:hover:text-violet-400 transition-colors"
                onClick={toggleMenu}
              >
                SERVICES
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
      <div className="min-h-screen dark:bg-gray-900 transition-colors duration-300">
        <div className="max-w-6xl mx-auto px-4 py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative z-10 bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg rounded-3xl p-8 shadow-xl"
          >
            {/* Decorative Elements */}
            <div className="absolute top-32 left-10 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob dark:bg-purple-600 dark:opacity-30"></div>
            <div className="absolute top-32 right-10 w-72 h-72 bg-violet-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000 dark:bg-violet-600 dark:opacity-30"></div>
            <div className="absolute top-64 left-1/2 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000 dark:bg-pink-600 dark:opacity-30"></div>

            <h1 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-violet-700 to-purple-900 bg-clip-text text-transparent dark:from-violet-400 dark:to-purple-600">
              CONTACT
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {contacts.map((contact, index) => (
                <motion.div
                  key={contact.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex flex-col items-center space-y-4 p-6 rounded-xl bg-white/50 dark:bg-gray-700/50 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                >
                  <Avatar className="w-24 h-24">
                    <AvatarImage src={contact.image} alt={contact.name} />
                    <AvatarFallback>{contact.name[0]}</AvatarFallback>
                  </Avatar>
                  <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                    {contact.name}
                  </h2>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;