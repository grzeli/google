import { Params } from 'next/dist/shared/lib/router/utils/route-matcher';
import React from 'react';
import { GoogleResponseT, GoogleResultObjectT } from './types';

export default async function WebSearchPage({ searchParams }: Params) {
  const response = await fetch(`https://www.googleapis.com/customsearch/v1?key=
    ${process.env.GOOGLE_API_KEY}&cx=${process.env.GOOGLE_CX_KEY}&q=${searchParams.searchTerm}`);
  const data: GoogleResponseT = await response.json();

  return (
    <>
      {data &&
        data.items &&
        data.items.map((result: GoogleResultObjectT) => (
          <h1 key={result.formattedUrl}>{result.title}</h1>
        ))}
    </>
  );
}
