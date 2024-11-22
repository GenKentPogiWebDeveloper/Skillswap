import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
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
  );
};

export default Index;