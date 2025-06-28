
import React from 'react';
import { LucideIcon } from 'lucide-react';
import { SparklineChart } from './charts/SparklineChart';

interface OverviewCardProps {
  title: string;
  value: string;
  change: number;
  icon: LucideIcon;
  sparklineData: number[];
}

export const OverviewCard: React.FC<OverviewCardProps> = ({
  title,
  value,
  change,
  icon: Icon,
  sparklineData,
}) => {
  const isPositive = change >= 0;

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700 hover:shadow-md transition-shadow duration-200">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-3">
          <div className="p-2 bg-[color:var(--theme-50)] dark:bg-[color:var(--theme-900)] rounded-lg">
            <Icon className="w-6 h-6 text-[color:var(--theme-600)]" />
          </div>
          <div>
            <p className="text-sm font-medium text-gray-600 dark:text-gray-400">{title}</p>
            <p className="text-2xl font-bold text-gray-900 dark:text-white">{value}</p>
          </div>
        </div>
        <div className="w-24">
          <SparklineChart data={sparklineData} />
        </div>
      </div>
      
      <div className="flex items-center justify-between">
        <div className={`
          flex items-center space-x-1 text-sm font-medium
          ${isPositive ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'}
        `}>
          <span>{isPositive ? '↗' : '↘'}</span>
          <span>{Math.abs(change)}%</span>
        </div>
        <p className="text-xs text-gray-500 dark:text-gray-400">vs last month</p>
      </div>
    </div>
  );
};
