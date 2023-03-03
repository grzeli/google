import { GoogleResponseT, GoogleResultObjectT } from '@/app/search/web/types';
import Link from 'next/link';
import React from 'react';
import Parser from 'html-react-parser';

export default function SearchResults({ data }: { data: GoogleResponseT }) {
  return (
    <div className='w-full mx-auto px-3 pb-24 sm:pl-6 lg:pl-52'>
      <p className='text-gray-500 text-sm mb-5 mt-3'>
        About {data.searchInformation?.formattedTotalResults} results (
        {data.searchInformation?.formattedSearchTime}) seconds
      </p>
      {data.items?.map((result: GoogleResultObjectT) => (
        <div key={result.link} className='mb-8 max-w-xl'>
          <div className='group flex flex-col'>
            <Link href={result.link} className='text-sm truncate'>
              {result.formattedUrl}
            </Link>
            <Link
              href={result.link}
              className='group-hover:underline decoration-blue-600 underline-offset-4 text-xl truncate font-medium text-blue-700'
            >
              {result.title}
            </Link>
          </div>
          <p className='text-gray-600'>{Parser(result.htmlSnippet)}</p>
        </div>
      ))}
    </div>
  );
}
