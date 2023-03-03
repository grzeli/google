import { GoogleImageResponseT, GoogleImageResultObjectT } from '@/app/search/image/type';
import Link from 'next/link';
import React from 'react';
import PaginationButtons from './PaginationButtons';

export default function ImageSearchResults({ data }: { data: GoogleImageResponseT }) {
  return (
    <div className='pb-40 sm:pb-32 mt-6'>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 px-6 gap-6 mb-8'>
        {data.items.map((result: GoogleImageResultObjectT) => (
          <div key={result.link} className='group'>
            <Link href={result.image.contextLink}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={result.link}
                alt={result.title}
                className={
                  'h-60 group-hover:shadow-xl group-hover:brightness-105 shadow-md w-full object-cover transition-shadow duration-300 rounded-xl mb-1'
                }
              />
            </Link>
            <Link href={result.image.contextLink}>
              <h2 className='group-hover:underline underline-offset-4 truncate text-xl'>
                {result.title}
              </h2>
            </Link>
            <Link href={result.image.contextLink}>
              <p className='group-hover:underline underline-offset-4 text-gray-600'>
                {result.displayLink}
              </p>
            </Link>
          </div>
        ))}
      </div>
      <div className='w-full flex justify-center items-center'>
        <PaginationButtons />
      </div>
    </div>
  );
}
