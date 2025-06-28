
import React, { createContext, useContext, useState, useEffect } from 'react';

export type ThemeColor = 'blue' | 'green' | 'purple' | 'orange' | 'pink' | 'red';
export type DarkMode = 'light' | 'dark';

interface ThemeContextType {
  themeColor: ThemeColor;
  darkMode: DarkMode;
  setThemeColor: (color: ThemeColor) => void;
  setDarkMode: (mode: DarkMode) => void;
  toggleDarkMode: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

const themes = {
  blue: {
    50: '#eff6ff',
    100: '#dbeafe',
    500: '#3b82f6',
    600: '#2563eb',
    700: '#1d4ed8',
  },
  green: {
    50: '#f0fdf4',
    100: '#dcfce7',
    500: '#22c55e',
    600: '#16a34a',
    700: '#15803d',
  },
  purple: {
    50: '#faf5ff',
    100: '#f3e8ff',
    500: '#a855f7',
    600: '#9333ea',
    700: '#7c3aed',
  },
  orange: {
    50: '#fff7ed',
    100: '#ffedd5',
    500: '#f97316',
    600: '#ea580c',
    700: '#c2410c',
  },
  pink: {
    50: '#fdf2f8',
    100: '#fce7f3',
    500: '#ec4899',
    600: '#db2777',
    700: '#be185d',
  },
  red: {
    50: '#fef2f2',
    100: '#fee2e2',
    500: '#ef4444',
    600: '#dc2626',
    700: '#b91c1c',
  },
};

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [themeColor, setThemeColor] = useState<ThemeColor>('blue');
  const [darkMode, setDarkMode] = useState<DarkMode>('light');

  const toggleDarkMode = () => {
    setDarkMode(prev => prev === 'light' ? 'dark' : 'light');
  };

  useEffect(() => {
    const root = document.documentElement;
    const theme = themes[themeColor];
    
    // Set CSS custom properties for the current theme
    root.style.setProperty('--theme-50', theme[50]);
    root.style.setProperty('--theme-100', theme[100]);
    root.style.setProperty('--theme-500', theme[500]);
    root.style.setProperty('--theme-600', theme[600]);
    root.style.setProperty('--theme-700', theme[700]);
    
    // Toggle dark class
    if (darkMode === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [themeColor, darkMode]);

  return (
    <ThemeContext.Provider value={{
      themeColor,
      darkMode,
      setThemeColor,
      setDarkMode,
      toggleDarkMode,
    }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
