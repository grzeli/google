'use client';

import React, { useEffect, useState } from 'react';

export default function CountryBar() {
  const [country, setCountry] = useState<string>('Polski Bantustan');

  useEffect(() => {
    fetch(`https://ipapi.co/json`)
      .then((data) => data.json())
      .then((response) => setCountry(response.country_name || response.country || ''))
      .catch(() => {
        throw new Error('Ups...something went wrong');
      });
  }, []);

  return <div>{country}</div>;
}
