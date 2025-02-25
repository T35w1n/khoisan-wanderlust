
import { useEffect } from "react";
import Navigation from "../components/Navigation";

const Tours = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
              No tours are currently available. Please check back later.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tours;
