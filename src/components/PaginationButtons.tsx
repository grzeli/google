'use client';

import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';
import React, { useEffect } from 'react';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';

export default function PaginationButtons() {
  const pathName = usePathname();
  const searchParams = useSearchParams();
  const searchTerm = searchParams.get('searchTerm');
  const startIndex = +(searchParams.get('start') || 1);
  const isBrowser = () => typeof window !== 'undefined';

  const scrollToTop = () => {
    if (!isBrowser()) return;

    window.document.body.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToTop();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchTerm, startIndex]);

  return (
    <div className='text-blue-700 flex px-10 pb-4 justify-between sm:justify-start space-x-4 sm:space-x-44 sm:px-0'>
      {startIndex >= 10 && (
        <Link href={`${pathName}?searchTerm=${searchTerm}&start=${startIndex - 10}`}>
          <div className='flex flex-col sm:flex-row sm:space-x-2 cursor-pointer items-center hover:underline underline-offset-4'>
            <BsChevronLeft className='h-5 ' />
            <p>Previous Page</p>
          </div>
        </Link>
      )}

      {startIndex <= 90 && (
        <Link href={`${pathName}?searchTerm=${searchTerm}&start=${startIndex + 10}`}>
          <div className='flex flex-col sm:flex-row-reverse cursor-pointer items-center hover:underline underline-offset-4'>
            <BsChevronRight className='h-5 ' />
            <p className='sm:mr-2 leading-5'>Next Page</p>
          </div>
        </Link>
      )}
    </div>
  );
}
