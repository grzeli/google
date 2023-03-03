'use client';

import { ThemeProvider } from 'next-themes';
import React, { useEffect } from 'react';

type PropsT = {
  children: React.ReactNode;
};

const Providers: React.FC<PropsT> = ({ children }) => {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.theme = 'light';
    }
  }, []);

  return (
    <ThemeProvider>
      <div className='text-gray-700 min-h-screen select-none'>{children}</div>
    </ThemeProvider>
  );
};

export default Providers;
