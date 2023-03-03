export const dynamic = 'force-dynamic';

import ImageSearchResults from '@/components/ImageSearchResults';
import Link from 'next/link';
import React from 'react';
import { GoogleImageResponseT } from './type';

export default async function ImageSearchPage({
  searchParams,
}: {
  searchParams: { start: number; searchTerm: string };
}) {
  const startIndex = searchParams.start || 1;
  const response = await fetch(`https://www.googleapis.com/customsearch/v1?key=
    ${process.env.GOOGLE_API_KEY}&cx=${process.env.GOOGLE_CX_KEY}&q=${searchParams.searchTerm}&searchType=image&start=${startIndex}`);

  if (!response.ok) {
    throw new Error('Ups...Something went wrong. Please try again');
  }

  const data: GoogleImageResponseT = await response.json();

  if (!data?.items) {
    return (
      <div className='flex flex-col justify-center items-center pt-10'>
        <h1 className='text-3xl mb-4'>No results found</h1>
        <p className='text-lg '>Try searching something else or check your spelling</p>
        <Link className='text-blue-500 pt-8' href='/'>
          Go to home page
        </Link>
      </div>
    );
  }

  return (
    <>
      <ImageSearchResults data={data} />
    </>
  );
}
