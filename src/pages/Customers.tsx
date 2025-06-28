
import React from 'react';
import { TopCustomers } from '@/components/TopCustomers';

const Customers: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Customer Management</h1>
        <button className="px-4 py-2 bg-[color:var(--theme-600)] text-white rounded-lg hover:bg-[color:var(--theme-700)] transition-colors">
          Export Customers
        </button>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <TopCustomers />
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Customer Insights</h3>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-gray-600 dark:text-gray-400">Total Customers</span>
              <span className="text-2xl font-bold text-gray-900 dark:text-white">2,847</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600 dark:text-gray-400">New This Month</span>
              <span className="text-2xl font-bold text-green-600">+156</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600 dark:text-gray-400">Average Lifetime Value</span>
              <span className="text-2xl font-bold text-gray-900 dark:text-white">$1,340</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Customers;
