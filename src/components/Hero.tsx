
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Hero = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative h-screen overflow-hidden">
      <div
        className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1482938289607-e9573fc25ebb')] bg-cover bg-center"
        style={{
          transform: `translateY(${scrollY * 0.5}px)`,
        }}
      >
        <div className="absolute inset-0 bg-black/30" />
      </div>
      
      <div className="relative h-full flex items-center justify-center text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <span className="inline-block bg-khoisan-terracotta/90 text-white px-4 py-1 rounded-full text-sm mb-6 backdrop-blur-sm">
            Experience the Wild With Luxury
          </span>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Discover Ancient Wisdom in Modern Adventure
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join us for an unforgettable journey through the Cederberg mountains,
            where traditional Khoisan culture meets luxury adventure travel.
          </p>
          <a
            href="/tours"
            className="inline-block bg-khoisan-terracotta hover:bg-khoisan-brown text-white px-8 py-3 rounded-full transition-colors duration-300 text-lg"
          >
            Explore Tours
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
