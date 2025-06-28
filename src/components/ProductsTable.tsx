import React from 'react';
import { Link } from 'react-router-dom';

const products = [
  {
    id: 1,
    name: 'iPhone 15 Pro',
    category: 'Electronics',
    price: '$999',
    unitsSold: 145,
    rating: 4.8,
    image: 'https://imgs.search.brave.com/B9nw2m5R21HilWZ2C0kDKcIU19huHNs7zjcvfGPGmxs/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93aXJl/bGVzc3pvbmUuY29t/L3dwLWNvbnRlbnQv/dXBsb2Fkcy8yMDIz/LzA5L2lQaG9uZTE1/UHJvLTc3NngxMDI0/LnBuZw',
  },
  {
    id: 2,
    name: 'Nike Air Max',
    category: 'Fashion',
    price: '$129',
    unitsSold: 89,
    rating: 4.6,
    image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=64&h=64&fit=crop',
  },
  {
    id: 3,
    name: 'Coffee Maker',
    category: 'Home',
    price: '$199',
    unitsSold: 67,
    rating: 4.4,
    image: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=64&h=64&fit=crop',
  },
  {
    id: 4,
    name: 'Gaming Chair',
    category: 'Furniture',
    price: '$299',
    unitsSold: 34,
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=64&h=64&fit=crop',
  },
  {
    id: 5,
    name: 'Fitness Tracker',
    category: 'Sports',
    price: '$79',
    unitsSold: 156,
    rating: 4.3,
    image: 'https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?w=64&h=64&fit=crop',
  },
];

export const ProductsTable: React.FC = () => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden">
      <div className="px-6 py-4 border-b border-gray-200 dark:border-gray-700">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Top Products</h3>
      </div>
      
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50 dark:bg-gray-700">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                Product
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                Category
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                Price
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                Units Sold
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                Rating
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
            {products.map((product) => (
              <tr key={product.id} className="hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center space-x-3">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-10 h-10 rounded-lg object-cover"
                    />
                    <div>
                      <Link 
                        to={`/products/${product.id}`}
                        className="text-sm font-medium text-gray-900 dark:text-white hover:text-[color:var(--theme-600)] transition-colors cursor-pointer"
                      >
                        {product.name}
                      </Link>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 dark:text-gray-300">
                  {product.category}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">
                  {product.price}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 dark:text-gray-300">
                  {product.unitsSold}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center space-x-1">
                    <span className="text-sm font-medium text-gray-900 dark:text-white">
                      {product.rating}
                    </span>
                    <div className="flex text-yellow-400">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <span key={i} className={i < Math.floor(product.rating) ? 'text-yellow-400' : 'text-gray-300'}>
                          ★
                        </span>
                      ))}
                    </div>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
