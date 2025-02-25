
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

  const tours = [
    {
      id: 1,
      title: "Full-Day Khoisan Experience",
      description: "An immersive journey through authentic Khoisan culture in the Cederberg wilderness. From traditional bushcraft and rock art to gourmet bush cuisine and stargazing, this exclusive experience offers a unique blend of cultural heritage and luxury adventure.",
      duration: "Full Day",
      price: 9900,
      image: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb",
      inclusions: [
        "Welcome Rooibos ceremony",
        "Traditional bush breakfast & lunch",
        "Gourmet Khoisan-inspired dinner",
        "Guided bushwalk & hunting demonstration",
        "Rock art exploration",
        "Herbal medicine workshop",
        "Trance dance performance",
        "Stargazing session",
        "All meals and refreshments",
        "Traditional gifts to take home"
      ],
      itinerary: [
        {
          time: "07:00",
          title: "Welcome & Rooibos Sunrise Ceremony",
          description: "Start your day with a traditional welcome ceremony and rooibos tea served in calabash cups while watching the sunrise over the Cederberg mountains."
        },
        {
          time: "08:00",
          title: "Authentic Bush Breakfast",
          description: "Enjoy a luxurious bush breakfast cooked over open coals, featuring traditional Khoisan ingredients and cooking methods."
        },
        {
          time: "09:00",
          title: "Guided Bushwalk & Hunting Demonstration",
          description: "Learn traditional tracking, foraging, and hunting techniques during a 3-hour guided experience."
        },
        {
          time: "12:30",
          title: "Luxury Khoisan-Inspired Lunch",
          description: "Experience gourmet wilderness dining in an ancient rock shelter, featuring traditional ingredients with a modern twist."
        },
        {
          time: "14:00",
          title: "Rock Art Exploration",
          description: "Visit hidden rock art sites and learn about their spiritual significance through traditional storytelling."
        },
        {
          time: "15:30",
          title: "Herbal Medicine Workshop",
          description: "Discover traditional Khoisan healing methods and sample indigenous herbal remedies."
        },
        {
          time: "17:00",
          title: "Trance Dance & Music Workshop",
          description: "Experience authentic Khoisan music and dance, including hands-on participation in traditional instruments."
        },
        {
          time: "19:00",
          title: "Gourmet Bush Dinner",
          description: "End your day with an exclusive candlelit dinner under the stars, featuring Khoisan-inspired cuisine."
        },
        {
          time: "21:00",
          title: "Closing Ceremony & Stargazing",
          description: "Final gathering around the fire with traditional stargazing and farewell gifts."
        }
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

    toast.success("Booking request received! We'll contact you soon.");
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <div className="pt-24 pb-16 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
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
            className="mb-12"
          >
            <h2 className="text-2xl font-bold text-khoisan-brown mb-6">
              Detailed Itinerary
            </h2>
            <div className="space-y-6">
              {tour.itinerary.map((item, index) => (
                <div key={index} className="flex gap-4 items-start">
                  <div className="min-w-[80px] text-khoisan-brown font-semibold">
                    {item.time}
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-khoisan-brown">
                      {item.title}
                    </h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-white rounded-lg shadow-lg p-6"
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
