import { motion } from "framer-motion";
import { Video, Utensils, BookOpen, Wrench, Users, PenTool, ShoppingCart, Plus } from "lucide-react";

const Services = () => {
  const services = [
    { icon: <Video className="w-12 h-12" />, name: "VIDEO EDITOR" },
    { icon: <Utensils className="w-12 h-12" />, name: "FOODS" },
    { icon: <BookOpen className="w-12 h-12" />, name: "TUTOR" },
    { icon: <Wrench className="w-12 h-12" />, name: "REPAIR" },
    { icon: <Users className="w-12 h-12" />, name: "RENT A BUDDY" },
    { icon: <PenTool className="w-12 h-12" />, name: "GRAPHIC DESIGNER" },
    { icon: <ShoppingCart className="w-12 h-12" />, name: "SELLING" },
    { icon: <Plus className="w-12 h-12" />, name: "MORE" },
  ];

  return (
    <div className="min-h-screen p-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-6xl mx-auto"
      >
        <h1 className="text-5xl font-bold text-center mb-12 bg-gradient-to-r from-violet-700 to-purple-900 bg-clip-text text-transparent">
          SERVICES
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.name}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="flex flex-col items-center justify-center p-6 bg-white/80 rounded-3xl shadow-lg hover:shadow-xl transition-all hover:scale-105 cursor-pointer"
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-sm font-semibold text-gray-800">{service.name}</h3>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Services;