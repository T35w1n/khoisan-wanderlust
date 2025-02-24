
import { useEffect } from "react";
import Navigation from "../components/Navigation";
import TourCard from "../components/TourCard";
import { Mountain, Sun, Tent } from "lucide-react";

const Tours = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const tours = [
    {
      id: 1,
      title: "Cederberg Heritage Trail",
      description: "A 3-day journey through ancient rock art sites and traditional settlements",
      duration: "3 Days",
      price: 2499,
      image: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb",
      icon: Mountain,
    },
    {
      id: 2,
      title: "Desert Stars Experience",
      description: "2-day camping adventure under the clearest night skies",
      duration: "2 Days",
      price: 1899,
      image: "https://images.unsplash.com/photo-1466721591366-2d5fba72006d",
      icon: Sun,
    },
    {
      id: 3,
      title: "Bush Survival Skills",
      description: "Learn traditional survival techniques in a 4-day immersive experience",
      duration: "4 Days",
      price: 2999,
      image: "https://images.unsplash.com/photo-1472396961693-142e6e269027",
      icon: Tent,
    },
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
