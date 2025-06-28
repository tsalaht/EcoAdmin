
import React from 'react';
import { 
  DollarSign, 
  ShoppingCart, 
  User, 
  TrendingUp, 
  RotateCcw, 
  CreditCard 
} from 'lucide-react';
import { OverviewCard } from '@/components/OverviewCard';
import { SalesChart } from '@/components/charts/SalesChart';
import { CategoriesChart } from '@/components/charts/CategoriesChart';
import { RevenueChart } from '@/components/charts/RevenueChart';
import { OrdersTable } from '@/components/OrdersTable';
import { ProductsTable } from '@/components/ProductsTable';
import { TopCustomers } from '@/components/TopCustomers';

const Dashboard: React.FC = () => {
  return (
    <div className="space-y-6">
      {/* Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6">
        <OverviewCard
          title="Total Sales"
          value="$124,563"
          change={12.5}
          icon={DollarSign}
          sparklineData={[20, 25, 30, 28, 35, 40, 45, 42, 48, 52]}
        />
        <OverviewCard
          title="Orders Today"
          value="156"
          change={8.2}
          icon={ShoppingCart}
          sparklineData={[10, 15, 12, 18, 20, 25, 22, 28, 30, 35]}
        />
        <OverviewCard
          title="Active Customers"
          value="2,847"
          change={5.7}
          icon={User}
          sparklineData={[100, 105, 110, 115, 120, 125, 130, 135, 140, 145]}
        />
        <OverviewCard
          title="Conversion Rate"
          value="3.24%"
          change={-2.1}
          icon={TrendingUp}
          sparklineData={[5, 4.8, 4.5, 4.2, 3.8, 3.5, 3.2, 3.0, 3.1, 3.24]}
        />
        <OverviewCard
          title="Refunds Issued"
          value="23"
          change={-15.3}
          icon={RotateCcw}
          sparklineData={[40, 35, 30, 28, 25, 22, 20, 18, 20, 23]}
        />
        <OverviewCard
          title="Avg Order Value"
          value="$89.50"
          change={7.8}
          icon={CreditCard}
          sparklineData={[75, 78, 80, 82, 85, 87, 88, 89, 90, 89.5]}
        />
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        <SalesChart />
        <CategoriesChart />
        <RevenueChart />
      </div>

      {/* Tables and Customer Info */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        <div className="xl:col-span-2 space-y-6">
          <OrdersTable />
          <ProductsTable />
        </div>
        <div>
          <TopCustomers />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
