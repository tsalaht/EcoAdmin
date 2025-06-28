import React, { useState, useRef, useEffect } from 'react';
import { Bell, X, Check, AlertCircle, Info, Package, ShoppingCart, User, TrendingUp } from 'lucide-react';

interface Notification {
  id: string;
  type: 'order' | 'product' | 'customer' | 'system' | 'alert';
  title: string;
  message: string;
  time: string;
  read: boolean;
  action?: string;
}

const notifications: Notification[] = [
  {
    id: '1',
    type: 'order',
    title: 'New Order Received',
    message: 'Order #ORD-006 has been placed by Sarah Wilson for $299.99',
    time: '2 minutes ago',
    read: false,
    action: 'View Order'
  },
  {
    id: '2',
    type: 'product',
    title: 'Low Stock Alert',
    message: 'iPhone 15 Pro is running low on stock (5 units remaining)',
    time: '15 minutes ago',
    read: false,
    action: 'Update Stock'
  },
  {
    id: '3',
    type: 'customer',
    title: 'New Customer Registration',
    message: 'Michael Brown has registered as a new customer',
    time: '1 hour ago',
    read: true,
    action: 'View Profile'
  },
  {
    id: '4',
    type: 'system',
    title: 'System Update',
    message: 'Dashboard has been updated to version 2.1.0',
    time: '2 hours ago',
    read: true
  },
  {
    id: '5',
    type: 'alert',
    title: 'Payment Failed',
    message: 'Payment for Order #ORD-005 has failed. Please review.',
    time: '3 hours ago',
    read: false,
    action: 'Review Payment'
  },
  {
    id: '6',
    type: 'order',
    title: 'Order Shipped',
    message: 'Order #ORD-004 has been shipped to David Wilson',
    time: '4 hours ago',
    read: true,
    action: 'Track Order'
  },
  {
    id: '7',
    type: 'product',
    title: 'Product Review',
    message: 'New 5-star review received for Nike Air Max',
    time: '5 hours ago',
    read: true,
    action: 'View Review'
  },
  {
    id: '8',
    type: 'system',
    title: 'Backup Completed',
    message: 'Daily database backup has been completed successfully',
    time: '6 hours ago',
    read: true
  }
];

const getNotificationIcon = (type: string) => {
  switch (type) {
    case 'order':
      return <ShoppingCart className="w-5 h-5 text-blue-500" />;
    case 'product':
      return <Package className="w-5 h-5 text-green-500" />;
    case 'customer':
      return <User className="w-5 h-5 text-purple-500" />;
    case 'system':
      return <Info className="w-5 h-5 text-gray-500" />;
    case 'alert':
      return <AlertCircle className="w-5 h-5 text-red-500" />;
    default:
      return <Bell className="w-5 h-5 text-gray-500" />;
  }
};

const getNotificationColor = (type: string) => {
  switch (type) {
    case 'order':
      return 'border-l-blue-500';
    case 'product':
      return 'border-l-green-500';
    case 'customer':
      return 'border-l-purple-500';
    case 'system':
      return 'border-l-gray-500';
    case 'alert':
      return 'border-l-red-500';
    default:
      return 'border-l-gray-500';
  }
};

interface NotificationDropdownProps {
  isOpen: boolean;
  onClose: () => void;
}

export const NotificationDropdown: React.FC<NotificationDropdownProps> = ({ isOpen, onClose }) => {
  const [notificationsList, setNotificationsList] = useState<Notification[]>(notifications);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, onClose]);

  const markAsRead = (id: string) => {
    setNotificationsList(prev => 
      prev.map(notification => 
        notification.id === id ? { ...notification, read: true } : notification
      )
    );
  };

  const markAllAsRead = () => {
    setNotificationsList(prev => 
      prev.map(notification => ({ ...notification, read: true }))
    );
  };

  const unreadCount = notificationsList.filter(n => !n.read).length;

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 lg:relative">
      <div className="absolute right-0 top-12 lg:top-14 w-80 lg:w-96 bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden" ref={dropdownRef}>
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700">
          <div className="flex items-center space-x-2">
            <Bell className="w-5 h-5 text-gray-500" />
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Notifications</h3>
            {unreadCount > 0 && (
              <span className="px-2 py-1 text-xs font-medium bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300 rounded-full">
                {unreadCount}
              </span>
            )}
          </div>
          <div className="flex items-center space-x-2">
            {unreadCount > 0 && (
              <button
                onClick={markAllAsRead}
                className="text-sm text-[color:var(--theme-600)] hover:text-[color:var(--theme-700)] transition-colors"
              >
                Mark all read
              </button>
            )}
            <button
              onClick={onClose}
              className="p-1 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Notifications List */}
        <div className="max-h-96 overflow-y-auto">
          {notificationsList.length === 0 ? (
            <div className="p-8 text-center">
              <Bell className="w-12 h-12 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-500 dark:text-gray-400">No notifications</p>
            </div>
          ) : (
            <div className="divide-y divide-gray-200 dark:divide-gray-700">
              {notificationsList.map((notification) => (
                <div
                  key={notification.id}
                  className={`p-4 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors cursor-pointer border-l-4 ${getNotificationColor(notification.type)} ${
                    !notification.read ? 'bg-blue-50 dark:bg-blue-900/20' : ''
                  }`}
                  onClick={() => markAsRead(notification.id)}
                >
                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0 mt-0.5">
                      {getNotificationIcon(notification.type)}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <p className={`text-sm font-medium ${!notification.read ? 'text-gray-900 dark:text-white' : 'text-gray-700 dark:text-gray-300'}`}>
                          {notification.title}
                        </p>
                        {!notification.read && (
                          <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        )}
                      </div>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                        {notification.message}
                      </p>
                      <div className="flex items-center justify-between mt-2">
                        <span className="text-xs text-gray-500 dark:text-gray-400">
                          {notification.time}
                        </span>
                        {notification.action && (
                          <button className="text-xs text-[color:var(--theme-600)] hover:text-[color:var(--theme-700)] transition-colors">
                            {notification.action}
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {notificationsList.length > 0 && (
          <div className="p-4 border-t border-gray-200 dark:border-gray-700">
            <button className="w-full text-sm text-[color:var(--theme-600)] hover:text-[color:var(--theme-700)] transition-colors">
              View all notifications
            </button>
          </div>
        )}
      </div>
    </div>
  );
}; 