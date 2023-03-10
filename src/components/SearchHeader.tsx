import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import SearchBox from './SearchBox';
import { RiSettings3Line } from 'react-icons/ri';
import { TbGridDots } from 'react-icons/tb';
import SearchHeaderOptions from './SearchHeaderOptions';

export default function SearchHeader() {
  return (
    <header className='sticky top-0 bg-white'>
      <div className='flex flex-col space-y-4 sm:space-y-0 sm:flex-row w-full p-6 items-center justify-between'>
        <Link href={'/'}>
          <Image
            width='120'
            height='40'
            src='/logo.png'
            alt='home'
            className='rounded-xl shadow-lg'
            priority
          />
        </Link>
        <div className='flex-1 w-full sm:w-auto'>
          <SearchBox />
        </div>
        <div className='hidden md:inline-flex space-x-2 mr-2'>
          <RiSettings3Line className='header-icon' />
          <TbGridDots className='header-icon' />
        </div>
        <button className='bg-blue-500 text-white rounded-lg px-6 py-2 font-medium hover:brightness-110 hover:shadow-md transition-shadow hidden sm:block'>
          Sign in
        </button>
      </div>
      <SearchHeaderOptions />
    </header>
  );
}
