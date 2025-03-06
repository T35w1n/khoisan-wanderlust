import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ShoppingCart, Star, X, Trash } from "lucide-react";
import { toast } from "sonner";
import Navigation from "../components/Navigation";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import ProductCard from "../components/ProductCard";

const Store = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [cart, setCart] = useState<StoreProduct[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const products: StoreProduct[] = [
    {
      id: 1,
      name: "Traditional Khoisan Bow & Arrow Set",
      description: "Handcrafted bow with arrows, made using traditional Khoisan techniques",
      price: 1200,
      image: "https://images.unsplash.com/photo-1585258554545-f37e8790a3e3?q=80&w=600&h=400&auto=format&fit=crop",
      category: "Crafts",
      rating: 4.8,
      inStock: true
    },
    {
      id: 2,
      name: "Premium Rooibos Tea Gift Set",
      description: "Organic Cederberg rooibos tea with handmade clay cups in a gift box",
      price: 450,
      image: "https://images.unsplash.com/photo-1576092768241-dec231879fc3?q=80&w=600&h=400&auto=format&fit=crop",
      category: "Food & Drink",
      rating: 5.0,
      inStock: true
    },
    {
      id: 3,
      name: "Khoisan Rock Art Print",
      description: "Limited edition print of ancient Khoisan rock paintings from the Cederberg",
      price: 850,
      image: "https://images.unsplash.com/photo-1580707205517-4d2b0082e940?q=80&w=600&h=400&auto=format&fit=crop",
      category: "Art",
      rating: 4.7,
      inStock: true
    },
    {
      id: 4,
      name: "Beaded Leather Bracelet",
      description: "Handmade leather bracelet with traditional Khoisan beaded patterns",
      price: 320,
      image: "https://images.unsplash.com/photo-1611591321753-6512a4c4f5be?q=80&w=600&h=400&auto=format&fit=crop",
      category: "Jewelry",
      rating: 4.6,
      inStock: true
    },
    {
      id: 5,
      name: "Bushman's Cookbook",
      description: "Traditional and modern Khoisan recipes with stories from the Cederberg",
      price: 380,
      image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?q=80&w=600&h=400&auto=format&fit=crop",
      category: "Books",
      rating: 4.9,
      inStock: true
    },
    {
      id: 6,
      name: "Handwoven Grass Basket",
      description: "Traditional basket woven from local grasses using ancient techniques",
      price: 580,
      image: "https://images.unsplash.com/photo-1606293926249-d1e4e438e05c?q=80&w=600&h=400&auto=format&fit=crop",
      category: "Home",
      rating: 4.5,
      inStock: false
    }
  ];

  const filteredProducts = products.filter((product) => 
    product.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
    product.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const addToCart = (product: StoreProduct) => {
    setCart([...cart, product]);
    toast.success(`${product.name} added to cart`);
  };

  const removeFromCart = (productId: number) => {
    const productIndex = cart.findIndex(item => item.id === productId);
    if (productIndex !== -1) {
      const newCart = [...cart];
      newCart.splice(productIndex, 1);
      setCart(newCart);
      toast.info("Item removed from cart");
    }
  };

  const calculateTotal = () => {
    return cart.reduce((total, product) => total + product.price, 0);
  };

  const checkout = () => {
    if (cart.length === 0) {
      toast.error("Your cart is empty");
      return;
    }
    toast.success("Thank you for your order! We'll contact you soon.");
    setCart([]);
    setIsCartOpen(false);
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <div className="pt-24 pb-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-khoisan-brown mb-4">
              Khoisan Store
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Take home a piece of Khoisan heritage with our authentic handcrafted items,
              from traditional art to premium rooibos tea.
            </p>
          </div>

          <div className="flex justify-between items-center mb-8">
            <div className="relative w-full max-w-md">
              <Input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-4 pr-10 py-2 border-khoisan-sand focus:border-khoisan-terracotta"
              />
            </div>
            <Button
              onClick={() => setIsCartOpen(true)}
              className="flex items-center gap-2 bg-khoisan-terracotta hover:bg-khoisan-brown text-white relative"
            >
              <ShoppingCart className="h-5 w-5" />
              <span>Cart</span>
              {cart.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-khoisan-brown text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                  {cart.length}
                </span>
              )}
            </Button>
          </div>

          {filteredProducts.length === 0 ? (
            <div className="text-center py-10">
              <p className="text-lg text-gray-600">No products found matching "{searchQuery}"</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProducts.map((product) => (
                <ProductCard 
                  key={product.id} 
                  product={product} 
                  onAddToCart={addToCart} 
                />
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Shopping Cart Sidebar */}
      {isCartOpen && (
        <>
          <div 
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
            onClick={() => setIsCartOpen(false)}
          ></div>
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.3 }}
            className="fixed top-0 right-0 h-full w-full max-w-md bg-white shadow-xl z-50 overflow-y-auto"
          >
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-khoisan-brown">Your Cart</h2>
                <button 
                  onClick={() => setIsCartOpen(false)}
                  className="text-gray-500 hover:text-khoisan-brown"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>

              {cart.length === 0 ? (
                <div className="text-center py-10">
                  <p className="text-lg text-gray-600">Your cart is empty</p>
                </div>
              ) : (
                <>
                  <div className="space-y-4 mb-6">
                    {cart.map((item) => (
                      <div key={`${item.id}-${Math.random()}`} className="flex gap-4 border-b pb-4">
                        <img 
                          src={item.image} 
                          alt={item.name} 
                          className="w-20 h-20 object-cover rounded-md"
                        />
                        <div className="flex-1">
                          <h3 className="font-medium text-khoisan-brown">{item.name}</h3>
                          <p className="text-khoisan-terracotta font-bold">R{item.price}</p>
                        </div>
                        <button 
                          onClick={() => removeFromCart(item.id)}
                          className="text-gray-500 hover:text-red-500"
                        >
                          <Trash className="h-5 w-5" />
                        </button>
                      </div>
                    ))}
                  </div>

                  <div className="border-t pt-4 mb-6">
                    <div className="flex justify-between text-lg font-bold">
                      <span>Total:</span>
                      <span className="text-khoisan-brown">R{calculateTotal()}</span>
                    </div>
                  </div>

                  <Button
                    onClick={checkout}
                    className="w-full bg-khoisan-terracotta hover:bg-khoisan-brown text-white py-3"
                  >
                    Checkout
                  </Button>
                </>
              )}
            </div>
          </motion.div>
        </>
      )}
    </div>
  );
};

export default Store;

// Types
interface StoreProduct {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  rating: number;
  inStock: boolean;
}
