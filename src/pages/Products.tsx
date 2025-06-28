import React from 'react';
import { Link } from 'react-router-dom';
import { ProductsTable } from '@/components/ProductsTable';

const Products: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Products Management</h1>
        <Link 
          to="/products/add"
          className="px-4 py-2 bg-[color:var(--theme-600)] text-white rounded-lg hover:bg-[color:var(--theme-700)] transition-colors"
        >
          Add Product
        </Link>
      </div>
      
      <ProductsTable />
    </div>
  );
};

export default Products;
