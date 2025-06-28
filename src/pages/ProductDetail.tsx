import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Star, Package, TrendingUp, Users } from 'lucide-react';

// Extended product data with more details
const products = [
  {
    id: 1,
    name: 'iPhone 15 Pro',
    category: 'Electronics',
    price: '$999',
    unitsSold: 145,
    rating: 4.8,
    image: 'https://imgs.search.brave.com/B9nw2m5R21HilWZ2C0kDKcIU19huHNs7zjcvfGPGmxs/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93aXJl/bGVzc3pvbmUuY29t/L3dwLWNvbnRlbnQv/dXBsb2Fkcy8yMDIz/LzA5L2lQaG9uZTE1/UHJvLTc3NngxMDI0/LnBuZw',
    description: 'The latest iPhone with advanced camera system, A17 Pro chip, and titanium design. Features include ProRAW photography, 4K ProRes video recording, and all-day battery life.',
    specifications: {
      'Display': '6.1-inch Super Retina XDR display',
      'Processor': 'A17 Pro chip',
      'Storage': '128GB, 256GB, 512GB, 1TB',
      'Camera': '48MP Main, 12MP Ultra Wide, 12MP Telephoto',
      'Battery': 'Up to 23 hours video playback',
      'Connectivity': '5G, Wi-Fi 6E, Bluetooth 5.3'
    },
    stock: 45,
    revenue: '$144,855',
    reviews: 89
  },
  {
    id: 2,
    name: 'Nike Air Max',
    category: 'Fashion',
    price: '$129',
    unitsSold: 89,
    rating: 4.6,
    image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=400&fit=crop',
    description: 'Classic Nike Air Max sneakers with superior comfort and style. Features Air-Sole unit for lightweight cushioning and breathable mesh upper.',
    specifications: {
      'Material': 'Mesh and synthetic upper',
      'Sole': 'Rubber outsole with Air-Sole unit',
      'Closure': 'Lace-up',
      'Weight': 'Approximately 300g',
      'Colors': 'Multiple colorways available',
      'Care': 'Machine washable'
    },
    stock: 67,
    revenue: '$11,481',
    reviews: 156
  },
  {
    id: 3,
    name: 'Coffee Maker',
    category: 'Home',
    price: '$199',
    unitsSold: 67,
    rating: 4.4,
    image: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=400&h=400&fit=crop',
    description: 'Programmable coffee maker with 12-cup capacity, auto-shutoff, and brew strength control. Perfect for coffee enthusiasts who want convenience and quality.',
    specifications: {
      'Capacity': '12 cups',
      'Power': '900W',
      'Timer': '24-hour programmable',
      'Filter': 'Permanent gold-tone filter',
      'Auto-shutoff': 'Yes, after 2 hours',
      'Warranty': '1 year limited'
    },
    stock: 23,
    revenue: '$13,333',
    reviews: 78
  },
  {
    id: 4,
    name: 'Gaming Chair',
    category: 'Furniture',
    price: '$299',
    unitsSold: 34,
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=400&fit=crop',
    description: 'Ergonomic gaming chair with lumbar support, adjustable armrests, and premium materials. Designed for extended gaming sessions and office work.',
    specifications: {
      'Material': 'PU leather and mesh',
      'Weight Capacity': '300 lbs',
      'Adjustments': 'Height, tilt, armrests',
      'Features': 'Lumbar support, headrest',
      'Assembly': 'Required, tools included',
      'Dimensions': '27.5" W x 27.5" D x 47.5" H'
    },
    stock: 12,
    revenue: '$10,166',
    reviews: 45
  },
  {
    id: 5,
    name: 'Fitness Tracker',
    category: 'Sports',
    price: '$79',
    unitsSold: 156,
    rating: 4.3,
    image: 'https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?w=400&h=400&fit=crop',
    description: 'Advanced fitness tracker with heart rate monitoring, sleep tracking, and 7-day battery life. Tracks steps, calories, and various workout modes.',
    specifications: {
      'Display': '1.4-inch color touchscreen',
      'Battery': 'Up to 7 days',
      'Water Resistance': '5ATM (swim-proof)',
      'Sensors': 'Heart rate, accelerometer, gyroscope',
      'Connectivity': 'Bluetooth 4.0',
      'Compatibility': 'iOS 12.0+, Android 6.0+'
    },
    stock: 89,
    revenue: '$12,324',
    reviews: 234
  }
];

const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const product = products.find(p => p.id === parseInt(id || '0'));

  if (!product) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[400px]">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Product Not Found</h2>
        <Link to="/products" className="text-[color:var(--theme-600)] hover:underline">
          Back to Products
        </Link>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center space-x-4">
        <Link 
          to="/products" 
          className="p-2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
        </Link>
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">{product.name}</h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Product Image */}
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-96 object-cover rounded-lg"
          />
        </div>

        {/* Product Info */}
        <div className="space-y-6">
          {/* Basic Info */}
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">{product.name}</h2>
              <span className="text-3xl font-bold text-[color:var(--theme-600)]">{product.price}</span>
            </div>
            
            <div className="flex items-center space-x-4 mb-4">
              <div className="flex items-center space-x-1">
                <span className="text-sm font-medium text-gray-900 dark:text-white">{product.rating}</span>
                <div className="flex text-yellow-400">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'fill-current' : ''}`} />
                  ))}
                </div>
                <span className="text-sm text-gray-500 dark:text-gray-400">({product.reviews} reviews)</span>
              </div>
              <span className="px-2 py-1 text-xs font-medium bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full">
                {product.category}
              </span>
            </div>

            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              {product.description}
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white dark:bg-gray-800 rounded-xl p-4 border border-gray-200 dark:border-gray-700">
              <div className="flex items-center space-x-2 mb-2">
                <TrendingUp className="w-5 h-5 text-[color:var(--theme-600)]" />
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Units Sold</span>
              </div>
              <p className="text-2xl font-bold text-gray-900 dark:text-white">{product.unitsSold}</p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 rounded-xl p-4 border border-gray-200 dark:border-gray-700">
              <div className="flex items-center space-x-2 mb-2">
                <Package className="w-5 h-5 text-[color:var(--theme-600)]" />
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">In Stock</span>
              </div>
              <p className="text-2xl font-bold text-gray-900 dark:text-white">{product.stock}</p>
            </div>
          </div>

          {/* Revenue */}
          <div className="bg-white dark:bg-gray-800 rounded-xl p-4 border border-gray-200 dark:border-gray-700">
            <div className="flex items-center space-x-2 mb-2">
              <Users className="w-5 h-5 text-[color:var(--theme-600)]" />
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Total Revenue</span>
            </div>
            <p className="text-2xl font-bold text-gray-900 dark:text-white">{product.revenue}</p>
          </div>
        </div>
      </div>

      {/* Specifications */}
      <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Specifications</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {Object.entries(product.specifications).map(([key, value]) => (
            <div key={key} className="flex justify-between py-2 border-b border-gray-200 dark:border-gray-700">
              <span className="font-medium text-gray-700 dark:text-gray-300">{key}</span>
              <span className="text-gray-900 dark:text-white">{value}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductDetail; 