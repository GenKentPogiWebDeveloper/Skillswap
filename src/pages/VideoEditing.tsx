import { motion } from "framer-motion";
import { ServiceProfile } from "@/components/ServiceProfile";
import { Link } from "react-router-dom";
import { useTheme } from "@/components/theme-provider";
import { Menu, X, Moon, Sun } from "lucide-react";
import { useState } from "react";

const sampleProfiles = [
  {
    name: "John Doe",
    age: 28,
    recentProjects: [
      "Wedding Highlights Video",
      "Corporate Training Series",
      "Music Video Production"
    ],
    imageUrl: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7"
  },
  {
    name: "Jane Smith",
    age: 24,
    recentProjects: [
      "Short Film Editing",
      "YouTube Content Creation",
      "Commercial Advertisement"
    ],
    imageUrl: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
  }
];

const VideoEditing = () => {
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
      <div className="min-h-screen dark:bg-gray-900 transition-colors duration-300">
        <div className="max-w-6xl mx-auto px-4 py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Decorative Elements */}
            <div className="absolute top-32 left-10 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob dark:bg-purple-600 dark:opacity-30"></div>
            <div className="absolute top-32 right-10 w-72 h-72 bg-violet-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000 dark:bg-violet-600 dark:opacity-30"></div>
            <div className="absolute top-64 left-1/2 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000 dark:bg-pink-600 dark:opacity-30"></div>

            <h1 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-violet-700 to-purple-900 bg-clip-text text-transparent dark:from-violet-400 dark:to-purple-600 dark:text-glow relative z-10">
              VIDEO EDITORS
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
              {sampleProfiles.map((profile, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <ServiceProfile profile={profile} />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default VideoEditing;