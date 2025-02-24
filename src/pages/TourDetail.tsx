
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navigation from "../components/Navigation";
import { Button } from "../components/ui/button";
import { Calendar } from "../components/ui/calendar";
import { toast } from "sonner";
import { motion } from "framer-motion";

const TourDetail = () => {
  const { id } = useParams();
  const [selectedDate, setSelectedDate] = useState<Date>();
  const [participants, setParticipants] = useState(1);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Find the tour from our data
  // Note: In a real app, this would come from an API/database
  const tours = [
    {
      id: 1,
      title: "Cederberg Heritage Trail",
      description: "A 3-day journey through ancient rock art sites and traditional settlements. Experience the rich history of the Khoisan people while hiking through breathtaking landscapes. Our expert guides will share stories and knowledge passed down through generations.",
      duration: "3 Days",
      price: 2499,
      image: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb",
      inclusions: [
        "Professional guide",
        "All meals and refreshments",
        "Camping equipment",
        "Traditional storytelling sessions",
        "Rock art site visits",
        "Safety equipment"
      ]
    },
    {
      id: 2,
      title: "Desert Stars Experience",
      description: "2-day camping adventure under the clearest night skies. Learn about traditional Khoisan astronomy and their connection to the stars. Experience the magic of the desert at night with expert guides.",
      duration: "2 Days",
      price: 1899,
      image: "https://images.unsplash.com/photo-1466721591366-2d5fba72006d",
      inclusions: [
        "Stargazing equipment",
        "Traditional astronomy lessons",
        "All meals and drinks",
        "Camping gear",
        "Night photography workshop",
        "Transport from base camp"
      ]
    },
    {
      id: 3,
      title: "Bush Survival Skills",
      description: "Learn traditional survival techniques in a 4-day immersive experience. Master the ancient skills of the Khoisan people, from tracking to finding water sources.",
      duration: "4 Days",
      price: 2999,
      image: "https://images.unsplash.com/photo-1472396961693-142e6e269027",
      inclusions: [
        "Survival training materials",
        "Traditional tool making workshop",
        "All meals and water",
        "Camping equipment",
        "First aid supplies",
        "Certificate of completion"
      ]
    }
  ];

  const tour = tours.find(t => t.id === Number(id));

  if (!tour) {
    return <div>Tour not found</div>;
  }

  const handleBooking = () => {
    if (!selectedDate) {
      toast.error("Please select a date");
      return;
    }

    // Here we would typically handle the booking process
    // For now, we'll just show a success message
    toast.success("Booking request received! We'll contact you soon.");
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <div className="pt-24 pb-16 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="relative h-[400px] rounded-lg overflow-hidden">
                <img
                  src={tour.image}
                  alt={tour.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/20" />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-6"
            >
              <h1 className="text-4xl font-bold text-khoisan-brown">
                {tour.title}
              </h1>
              <p className="text-lg text-gray-600">
                {tour.description}
              </p>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-khoisan-brown">
                  What's Included:
                </h3>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  {tour.inclusions.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
              <div className="text-2xl font-bold text-khoisan-brown">
                R{tour.price} per person
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-12 bg-white rounded-lg shadow-lg p-6"
          >
            <h2 className="text-2xl font-bold text-khoisan-brown mb-6">
              Book This Tour
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-4">Select Date</h3>
                <Calendar
                  mode="single"
                  selected={selectedDate}
                  onSelect={setSelectedDate}
                  className="rounded-md border"
                  disabled={(date) => date < new Date()}
                />
              </div>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-4">Number of Participants</h3>
                  <div className="flex items-center space-x-4">
                    <Button
                      variant="outline"
                      onClick={() => setParticipants(Math.max(1, participants - 1))}
                    >
                      -
                    </Button>
                    <span className="text-xl font-semibold">{participants}</span>
                    <Button
                      variant="outline"
                      onClick={() => setParticipants(Math.min(10, participants + 1))}
                    >
                      +
                    </Button>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-4">Total Price</h3>
                  <p className="text-2xl font-bold text-khoisan-brown">
                    R{tour.price * participants}
                  </p>
                </div>
                <Button
                  className="w-full bg-khoisan-terracotta hover:bg-khoisan-brown text-white"
                  size="lg"
                  onClick={handleBooking}
                >
                  Book Now
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default TourDetail;
