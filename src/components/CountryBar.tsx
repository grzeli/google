'use client';

import React, { useEffect, useRef, useState } from 'react';

export default function CountryBar() {
  const [country, setCountry] = useState<string>('Polski Bantustan');
  const dupa = useRef(false);

  useEffect(() => {
    if (dupa.current) {
      return;
    }

    dupa.current = true;
    try {
      fetch(`https://ipapi.co/json`)
        .then((data) => data.json())
        .then((response) => setCountry(response.country_name || response.country || ''));
    } catch {
      throw new Error('ups something went wrong');
    }
  }, []);

  return <div>{country}</div>;
}
