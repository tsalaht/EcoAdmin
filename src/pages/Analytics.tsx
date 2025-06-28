
import React from 'react';
import { SalesChart } from '@/components/charts/SalesChart';
import { CategoriesChart } from '@/components/charts/CategoriesChart';
import { RevenueChart } from '@/components/charts/RevenueChart';

const Analytics: React.FC = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Analytics Dashboard</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        <SalesChart />
        <CategoriesChart />
        <RevenueChart />
      </div>
    </div>
  );
};

export default Analytics;
