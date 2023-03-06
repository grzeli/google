import React from 'react';
import CountryBar from './CountryBar';

export default function Footer() {
  return (
    <footer className='absolute bottom-0 left-0 right-0 text-sm text-gray-500 bg-[#f2f2f2] w-full'>
      <div className='border-b px-8 py-3'>
        <CountryBar />
      </div>
      <div className='flex flex-col sm:flex-row justify-between items-center px-8 py-3 space-y-3 sm:space-y-0'>
        <ul className='flex items-center space-x-6'>
          <li className='link'>About</li>
          <li className='link'>Advertising</li>
          <li className='link'>Business</li>
          <li className='link truncate w-[30px] sm:w-auto'>How Search works</li>
        </ul>
        <ul className='flex items-center space-x-6'>
          <li className='link'>Privacy</li>
          <li className='link'>Terms</li>
          <li className='link'>Settings</li>
        </ul>
      </div>
    </footer>
  );
}
