
import React from 'react';
import { OrdersTable } from '@/components/OrdersTable';

const Orders: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Orders Management</h1>
        <button className="px-4 py-2 bg-[color:var(--theme-600)] text-white rounded-lg hover:bg-[color:var(--theme-700)] transition-colors">
          Export Orders
        </button>
      </div>
      
      <OrdersTable />
    </div>
  );
};

export default Orders;
