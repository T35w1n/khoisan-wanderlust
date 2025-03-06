
import { motion } from "framer-motion";
import { Star, ShoppingBag } from "lucide-react";
import { Button } from "./ui/button";

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

interface ProductCardProps {
  product: StoreProduct;
  onAddToCart: (product: StoreProduct) => void;
}

const ProductCard = ({ product, onAddToCart }: ProductCardProps) => {
  const renderRatingStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;

    for (let i = 0; i < fullStars; i++) {
      stars.push(<Star key={`full-${i}`} className="w-4 h-4 fill-khoisan-brown text-khoisan-brown" />);
    }

    if (hasHalfStar) {
      stars.push(
        <span key="half" className="relative">
          <Star className="w-4 h-4 text-khoisan-brown" />
          <Star className="w-4 h-4 fill-khoisan-brown text-khoisan-brown absolute top-0 left-0" style={{ clipPath: 'inset(0 50% 0 0)' }} />
        </span>
      );
    }

    const emptyStars = 5 - stars.length;
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<Star key={`empty-${i}`} className="w-4 h-4 text-khoisan-brown" />);
    }

    return stars;
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
    >
      <div className="relative h-60">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-0 right-0 bg-khoisan-terracotta text-white text-xs font-bold px-2 py-1 m-2 rounded">
          {product.category}
        </div>
        {!product.inStock && (
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
            <p className="text-white font-bold text-lg">Out of Stock</p>
          </div>
        )}
      </div>
      
      <div className="p-6">
        <div className="flex items-center mb-2">
          {renderRatingStars(product.rating)}
          <span className="text-sm text-gray-600 ml-1">({product.rating})</span>
        </div>
        
        <h3 className="text-xl font-semibold text-khoisan-brown mb-2">
          {product.name}
        </h3>
        
        <p className="text-gray-600 mb-4 line-clamp-2">
          {product.description}
        </p>
        
        <div className="flex justify-between items-center">
          <span className="text-2xl font-bold text-khoisan-brown">
            R{product.price}
          </span>
          <Button
            onClick={() => product.inStock && onAddToCart(product)}
            disabled={!product.inStock}
            className={`flex items-center gap-2 ${
              product.inStock 
                ? "bg-khoisan-terracotta hover:bg-khoisan-brown" 
                : "bg-gray-300"
            } text-white`}
          >
            <ShoppingBag className="h-4 w-4" />
            Add to Cart
          </Button>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;
