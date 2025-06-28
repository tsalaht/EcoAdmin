
import React from 'react';

const customers = [
  {
    id: 1,
    name: 'Alice Johnson',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=40&h=40&fit=crop&crop=face',
    totalSpent: '$2,450',
    lastOrder: '2 days ago',
  },
  {
    id: 2,
    name: 'Bob Smith',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face',
    totalSpent: '$1,890',
    lastOrder: '5 days ago',
  },
  {
    id: 3,
    name: 'Carol Davis',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&h=40&fit=crop&crop=face',
    totalSpent: '$1,650',
    lastOrder: '1 week ago',
  },
  {
    id: 4,
    name: 'David Wilson',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face',
    totalSpent: '$1,340',
    lastOrder: '3 days ago',
  },
];

export const TopCustomers: React.FC = () => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700">
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Top Customers</h3>
      
      <div className="space-y-4">
        {customers.map((customer) => (
          <div key={customer.id} className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
            <div className="flex items-center space-x-3">
              <img
                src={customer.avatar}
                alt={customer.name}
                className="w-10 h-10 rounded-full"
              />
              <div>
                <p className="text-sm font-medium text-gray-900 dark:text-white">
                  {customer.name}
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  Last order: {customer.lastOrder}
                </p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-sm font-semibold text-gray-900 dark:text-white">
                {customer.totalSpent}
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                Total spent
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
