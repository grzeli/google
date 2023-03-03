'use client';

import { ThemeProvider } from 'next-themes';
import React from 'react';

type PropsT = {
  children: React.ReactNode;
};

const Providers: React.FC<PropsT> = ({ children }) => {
  return (
    <ThemeProvider attribute={'class'}>
      <div className='dark:bg-gray-700 dark:text-gray-200 text-gray-700 transition-colors duration-300 min-h-screen select-none'>
        {children}
      </div>
    </ThemeProvider>
  );
};

export default Providers;
