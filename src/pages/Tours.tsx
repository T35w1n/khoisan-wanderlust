
import { useEffect } from "react";
import Navigation from "../components/Navigation";
import TourCard from "../components/TourCard";
import { Sun } from "lucide-react";

const Tours = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const tours = [
    {
      id: 1,
      title: "Full-Day Khoisan Experience",
      description: "An immersive journey into authentic Khoisan culture and traditions in the Cederberg wilderness",
      duration: "Full Day",
      price: 9900,
      image: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb",
      icon: Sun,
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <div className="pt-24 pb-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-khoisan-brown mb-4">
              Our Guided Tours
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Immerse yourself in the rich heritage of the Khoisan people while
              exploring the breathtaking landscapes of the Cederberg mountains.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tours.map((tour) => (
              <TourCard key={tour.id} tour={tour} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tours;
