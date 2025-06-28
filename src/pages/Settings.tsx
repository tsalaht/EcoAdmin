
import React from 'react';
import { useTheme, ThemeColor } from '@/contexts/ThemeContext';

const Settings: React.FC = () => {
  const { themeColor, darkMode, setThemeColor, toggleDarkMode } = useTheme();

  const themes: { name: string; value: ThemeColor; color: string }[] = [
    { name: 'Blue', value: 'blue', color: '#3B82F6' },
    { name: 'Green', value: 'green', color: '#22C55E' },
    { name: 'Purple', value: 'purple', color: '#A855F7' },
    { name: 'Orange', value: 'orange', color: '#F97316' },
    { name: 'Pink', value: 'pink', color: '#EC4899' },
    { name: 'Red', value: 'red', color: '#EF4444' },
  ];

  return (
    <div className="max-w-4xl space-y-6">
      {/* Theme Settings */}
      <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">Appearance</h2>
        
        {/* Dark Mode Toggle */}
        <div className="mb-8">
          <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">Theme Mode</h3>
          <div className="flex items-center space-x-4">
            <button
              onClick={toggleDarkMode}
              className={`
                relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-[color:var(--theme-500)] focus:ring-offset-2
                ${darkMode === 'dark' ? 'bg-[color:var(--theme-600)]' : 'bg-gray-200'}
              `}
            >
              <span
                className={`
                  inline-block h-4 w-4 transform rounded-full bg-white transition-transform
                  ${darkMode === 'dark' ? 'translate-x-6' : 'translate-x-1'}
                `}
              />
            </button>
            <span className="text-sm font-medium text-gray-900 dark:text-white">
              {darkMode === 'dark' ? 'Dark Mode' : 'Light Mode'}
            </span>
          </div>
        </div>

        {/* Color Theme Selection */}
        <div>
          <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">Color Theme</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {themes.map((theme) => (
              <button
                key={theme.value}
                onClick={() => setThemeColor(theme.value)}
                className={`
                  flex flex-col items-center p-4 rounded-lg border-2 transition-all hover:shadow-md
                  ${themeColor === theme.value 
                    ? 'border-[color:var(--theme-500)] bg-[color:var(--theme-50)] dark:bg-[color:var(--theme-900)]' 
                    : 'border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600'
                  }
                `}
              >
                <div
                  className="w-8 h-8 rounded-full mb-2"
                  style={{ backgroundColor: theme.color }}
                />
                <span className={`
                  text-sm font-medium
                  ${themeColor === theme.value 
                    ? 'text-[color:var(--theme-700)] dark:text-[color:var(--theme-300)]' 
                    : 'text-gray-700 dark:text-gray-300'
                  }
                `}>
                  {theme.name}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Notification Preferences */}
      <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">Notification Preferences</h2>
        
        <div className="space-y-4">
          {[
            { id: 'orders', label: 'New Orders', description: 'Get notified when new orders are placed' },
            { id: 'customers', label: 'New Customers', description: 'Receive alerts for new customer registrations' },
            { id: 'inventory', label: 'Low Inventory', description: 'Alerts when products are running low' },
            { id: 'reviews', label: 'Product Reviews', description: 'Notifications for new product reviews' },
          ].map((item) => (
            <div key={item.id} className="flex items-center justify-between p-4 rounded-lg border border-gray-200 dark:border-gray-700">
              <div>
                <h4 className="text-sm font-medium text-gray-900 dark:text-white">{item.label}</h4>
                <p className="text-sm text-gray-500 dark:text-gray-400">{item.description}</p>
              </div>
              <input
                type="checkbox"
                defaultChecked
                className="h-4 w-4 text-[color:var(--theme-600)] focus:ring-[color:var(--theme-500)] border-gray-300 rounded"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Language Selector */}
      <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">Language & Region</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Language
            </label>
            <select className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-[color:var(--theme-500)] focus:border-transparent">
              <option>English (US)</option>
              <option>Spanish</option>
              <option>French</option>
              <option>German</option>
              <option>Italian</option>
            </select>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Time Zone
            </label>
            <select className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-[color:var(--theme-500)] focus:border-transparent">
              <option>UTC-8 (Pacific Time)</option>
              <option>UTC-5 (Eastern Time)</option>
              <option>UTC+0 (GMT)</option>
              <option>UTC+1 (Central European Time)</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
