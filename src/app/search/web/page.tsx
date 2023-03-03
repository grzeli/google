export const dynamic = 'force-dynamic';

import SearchResults from '@/components/SearchResults';
import { Params } from 'next/dist/shared/lib/router/utils/route-matcher';
import Link from 'next/link';
import React from 'react';
import { GoogleResponseT } from './types';

export default async function WebSearchPage({ searchParams }: Params) {
  const startIndex = searchParams.start || 1;
  const response = await fetch(`https://www.googleapis.com/customsearch/v1?key=
    ${process.env.GOOGLE_API_KEY}&cx=${process.env.GOOGLE_CX_KEY}&q=${searchParams.searchTerm}&start=${startIndex}`);

  if (!response.ok) {
    throw new Error('Ups...Something went wrong. Please try again');
  }

  const data: GoogleResponseT = await response.json();

  if (!data?.items) {
    return (
      <div className='flex flex-col justify-center items-center pt-10'>
        <h1 className='text-3xl mb-4'>
          {startIndex !== 1 ? 'No more results found' : 'No results found'}
        </h1>
        {startIndex === 1 && (
          <p className='text-lg '>Try searching something else or check your spelling</p>
        )}
        <Link className='text-blue-500 pt-8' href='/'>
          Go to home page
        </Link>
      </div>
    );
  }

  return (
    <>
      <SearchResults data={data} />
    </>
  );
}
