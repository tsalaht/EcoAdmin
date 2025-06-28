import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import me from '../images/me.jpg'; 
import { 
  Settings,
  Package,
  ShoppingCart,
  User,
  ChartBar,
  List,
  X
} from 'lucide-react';

interface SidebarProps {
  collapsed: boolean;
  onClose: () => void;
}

const navigation = [
  { name: 'Dashboard', href: '/', icon: ChartBar },
  { name: 'Orders', href: '/orders', icon: ShoppingCart },
  { name: 'Products', href: '/products', icon: Package },
  { name: 'Categories', href: '/categories', icon: List },
  { name: 'Customers', href: '/customers', icon: User },
  { name: 'Analytics', href: '/analytics', icon: ChartBar },
  { name: 'Settings', href: '/settings', icon: Settings },
];

export const Sidebar: React.FC<SidebarProps> = ({ collapsed, onClose }) => {
  const navigate = useNavigate();

  return (
    <div className={`
      h-full bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 
      flex flex-col transition-all duration-300 ${collapsed ? 'w-16' : 'w-64'}
    `}>
      {/* Logo */}
      <div className={`p-4 border-b border-gray-200 dark:border-gray-700 flex items-center ${collapsed ? 'justify-center' : 'justify-between'}`}>
        {!collapsed && (
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-[color:var(--theme-500)] to-[color:var(--theme-600)] rounded-lg flex items-center justify-center">
              <ShoppingCart className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-gray-900 dark:text-white">EcoAdmin</span>
          </div>
        )}
        {collapsed && (
          <div className="w-8 h-8 bg-gradient-to-br from-[color:var(--theme-500)] to-[color:var(--theme-600)] rounded-lg flex items-center justify-center">
            <ShoppingCart className="w-5 h-5 text-white" />
          </div>
        )}
        <button
          onClick={onClose}
          className="p-1 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 lg:hidden"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-2">
        {navigation.map((item) => (
          <NavLink
            key={item.name}
            to={item.href}
            className={({ isActive }) => `
              flex items-center ${collapsed ? 'justify-center' : 'space-x-3'} 
              px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200
              ${isActive 
                ? 'bg-[color:var(--theme-50)] dark:bg-[color:var(--theme-900)] text-[color:var(--theme-700)] dark:text-[color:var(--theme-300)] border-r-2 border-[color:var(--theme-500)]' 
                : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-white'
              }
            `}
          >
            <item.icon className="w-5 h-5 flex-shrink-0" />
            {!collapsed && <span>{item.name}</span>}
          </NavLink>
        ))}
      </nav>

      {/* User info at bottom */}
      {!collapsed && (
        <div className="p-4 border-t border-gray-200 dark:border-gray-700">
          <div className="flex items-center space-x-3 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 p-2 rounded-lg transition-colors" onClick={() => navigate('/profile')}>
            <img
              src={me}
              alt="User"
              className="w-10 h-10 rounded-full"
            />
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-gray-900 dark:text-white truncate">Salah Tabet</p>
              <p className="text-xs text-gray-500 dark:text-gray-400 truncate">salaheddinetabet05@gmail.com</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
