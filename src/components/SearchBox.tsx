'use client';

import React, { useState } from 'react';
import { RxCross2 } from 'react-icons/rx';
import { BsFillMicFill } from 'react-icons/bs';
import { AiOutlineSearch } from 'react-icons/ai';
import { useRouter, useSearchParams } from 'next/navigation';

export default function SearchBox() {
  const searchParams = useSearchParams();
  const searchTerm = searchParams.get('searchTerm');
  const [term, setTerm] = useState<string>(searchTerm || '');
  const router = useRouter();

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setTerm(event.target.value);

  const handleOnClear = () => setTerm('');

  const handleOnSubmit = (event: React.FormEvent<HTMLFormElement> | React.MouseEvent) => {
    event.preventDefault();

    if (!term || !term.trim()) {
      return;
    }

    router.push(`/search/web?searchTerm=${term}`);
  };

  return (
    <form
      className='flex border border-gray-200 rounded-full shadow-lg px-6 py-3 items-center sm:ml-10 sm:mr-5 flex-grow max-w-full sm:max-w-3xl'
      onSubmit={handleOnSubmit}
    >
      <input
        type='text'
        className='w-full focus:outline-none'
        value={term}
        onChange={handleOnChange}
      />
      <RxCross2 className='text-2xl text-gray-500 cursor-pointer sm:mr-2' onClick={handleOnClear} />
      <BsFillMicFill className='hidden sm:inline-flex text-4xl text-blue-500 pl-4 border-l-2 border-gray-300 mr-3 cursor-pointer' />
      <AiOutlineSearch
        className='text-2xl hidden sm:inline-flex text-blue-500 cursor-pointer'
        onClick={handleOnSubmit}
      />
    </form>
  );
}
