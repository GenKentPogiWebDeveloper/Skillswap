import { motion } from "framer-motion";
import { ServiceProfile } from "@/components/ServiceProfile";

const sampleProfiles = [
  {
    name: "Chris Parker",
    age: 30,
    recentProjects: [
      "Brand Identity Design",
      "Social Media Graphics",
      "Website UI Design"
    ],
    imageUrl: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d"
  },
  {
    name: "Maria Garcia",
    age: 28,
    recentProjects: [
      "Logo Design Collection",
      "Marketing Materials",
      "Digital Illustrations"
    ],
    imageUrl: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7"
  }
];

const GraphicDesign = () => {
  return (
    <div className="min-h-screen dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-violet-700 to-purple-900 bg-clip-text text-transparent dark:from-violet-400 dark:to-purple-600 dark:text-glow">
            GRAPHIC DESIGNERS
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
  );
};

export default GraphicDesign;