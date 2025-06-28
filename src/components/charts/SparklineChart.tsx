
import React from 'react';

interface SparklineChartProps {
  data: number[];
  color?: string;
  height?: number;
}

export const SparklineChart: React.FC<SparklineChartProps> = ({ 
  data, 
  color = 'var(--theme-500)', 
  height = 40 
}) => {
  const max = Math.max(...data);
  const min = Math.min(...data);
  const range = max - min || 1;

  const points = data.map((value, index) => {
    const x = (index / (data.length - 1)) * 100;
    const y = ((max - value) / range) * 100;
    return `${x},${y}`;
  }).join(' ');

  return (
    <svg width="100%" height={height} className="overflow-visible">
      <polyline
        fill="none"
        stroke={color}
        strokeWidth="2"
        points={points}
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  );
};
