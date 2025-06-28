import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { month: 'Jan', current: 65000, previous: 48000 },
  { month: 'Feb', current: 59000, previous: 52000 },
  { month: 'Mar', current: 80000, previous: 61000 },
  { month: 'Apr', current: 81000, previous: 73000 },
  { month: 'May', current: 56000, previous: 69000 },
  { month: 'Jun', current: 95000, previous: 78000 },
  { month: 'Jul', current: 88000, previous: 82000 },
  { month: 'Aug', current: 102000, previous: 89000 },
  { month: 'Sep', current: 91000, previous: 85000 },
  { month: 'Oct', current: 108000, previous: 95000 },
  { month: 'Nov', current: 115000, previous: 98000 },
  { month: 'Dec', current: 128000, previous: 110000 },
];

export const RevenueChart: React.FC = () => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl p-4 sm:p-6 shadow-sm border border-gray-200 dark:border-gray-700">
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Monthly Revenue Comparison</h3>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data} barGap={10}>
          <CartesianGrid strokeDasharray="3 3" stroke="#374151" opacity={0.3} />
          <XAxis 
            dataKey="month" 
            stroke="#6B7280"
            fontSize={12}
          />
          <YAxis 
            stroke="#6B7280"
            fontSize={12}
            tickFormatter={(value) => `$${value / 1000}k`}
          />
          <Tooltip 
            contentStyle={{
              backgroundColor: 'rgba(17, 24, 39, 0.95)',
              border: 'none',
              borderRadius: '8px',
              color: '#fff'
            }}
            formatter={(value) => [`$${value.toLocaleString()}`, '']}
          />
          <Bar 
            dataKey="current" 
            fill="var(--theme-500)" 
            radius={[4, 4, 0, 0]}
            name="2024"
          />
          <Bar 
            dataKey="previous" 
            fill="#9CA3AF" 
            radius={[4, 4, 0, 0]}
            name="2023"
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};
