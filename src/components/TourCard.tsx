
import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface TourCardProps {
  tour: {
    id: number;
    title: string;
    description: string;
    duration: string;
    price: number;
    image: string;
    icon: LucideIcon;
  };
}

const TourCard = ({ tour }: TourCardProps) => {
  const Icon = tour.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
    >
      <div className="relative h-48">
        <img
          src={tour.image}
          alt={tour.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/20" />
      </div>
      
      <div className="p-6">
        <div className="flex items-center gap-2 mb-3">
          <Icon className="w-5 h-5 text-khoisan-terracotta" />
          <span className="text-sm font-medium text-khoisan-terracotta">
            {tour.duration}
          </span>
        </div>
        
        <h3 className="text-xl font-semibold text-khoisan-brown mb-2">
          {tour.title}
        </h3>
        
        <p className="text-gray-600 mb-4">
          {tour.description}
        </p>
        
        <div className="flex justify-between items-center">
          <span className="text-2xl font-bold text-khoisan-brown">
            R{tour.price}
          </span>
          <button
            className="bg-khoisan-terracotta hover:bg-khoisan-brown text-white px-4 py-2 rounded-full transition-colors duration-300"
            onClick={() => window.location.href = `/tour/${tour.id}`}
          >
            Book Now
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default TourCard;
