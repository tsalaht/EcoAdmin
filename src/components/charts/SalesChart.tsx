import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Jan', sales: 4000, lastYear: 2400 },
  { name: 'Feb', sales: 3000, lastYear: 1398 },
  { name: 'Mar', sales: 2000, lastYear: 9800 },
  { name: 'Apr', sales: 2780, lastYear: 3908 },
  { name: 'May', sales: 1890, lastYear: 4800 },
  { name: 'Jun', sales: 2390, lastYear: 3800 },
  { name: 'Jul', sales: 3490, lastYear: 4300 },
  { name: 'Aug', sales: 4200, lastYear: 3200 },
  { name: 'Sep', sales: 3800, lastYear: 2800 },
  { name: 'Oct', sales: 4100, lastYear: 3600 },
  { name: 'Nov', sales: 4500, lastYear: 4000 },
  { name: 'Dec', sales: 5200, lastYear: 4800 },
];

export const SalesChart: React.FC = () => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl p-4 sm:p-6 shadow-sm border border-gray-200 dark:border-gray-700">
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Sales Analytics</h3>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#374151" opacity={0.3} />
          <XAxis 
            dataKey="name" 
            stroke="#6B7280"
            fontSize={12}
          />
          <YAxis 
            stroke="#6B7280"
            fontSize={12}
          />
          <Tooltip 
            contentStyle={{
              backgroundColor: 'rgba(17, 24, 39, 0.95)',
              border: 'none',
              borderRadius: '8px',
              color: '#fff'
            }}
          />
          <Line 
            type="monotone" 
            dataKey="sales" 
            stroke="var(--theme-500)" 
            strokeWidth={3}
            dot={{ fill: 'var(--theme-500)', strokeWidth: 2, r: 4 }}
            activeDot={{ r: 6, stroke: 'var(--theme-500)', strokeWidth: 2 }}
          />
          <Line 
            type="monotone" 
            dataKey="lastYear" 
            stroke="#9CA3AF" 
            strokeWidth={2}
            strokeDasharray="5 5"
            dot={{ fill: '#9CA3AF', strokeWidth: 2, r: 3 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};
