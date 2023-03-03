'use client';

import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { BsFillMicFill } from 'react-icons/bs';

export default function HomeSearch() {
  const [inputValue, setInputValue] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement> | React.MouseEvent) => {
    e.preventDefault();

    if (!inputValue.trim()) {
      return;
    }

    router.push(`/search/web?searchTerm=${inputValue}`);
  };

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleRandomSearch = async () => {
    setIsLoading(true);
    const response = await fetch(`https://random-word-api.herokuapp.com/word`)
      .then((data) => data.json())
      .then((data: string[]) => data[0]);

    if (!response) {
      setIsLoading(false);
      return;
    }

    router.push(`/search/web?searchTerm=${response}`);
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className='flex w-full mt-8 mx-auto max-w-[90%] border border-gray-200 px-5 py-3 rounded-full items-center hover:shadow-md transition duration-250 focus-within:shadow-md sm:max-w-xl lg:max-w-2xl xl:max-w-4xl'
      >
        <AiOutlineSearch className='text-xl text-gray-500 mr-2 cursor-pointer' />
        <input
          type={'text'}
          className={'flex-grow focus:outline-none '}
          onChange={handleOnChange}
        />
        <BsFillMicFill className='text-lg text-gray-500 cursor-pointer' />
      </form>

      <div className='flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4 mt-8'>
        <button className='btn' onClick={handleSubmit}>
          Google Search
        </button>
        <button
          className='btn flex items-center justify-center disabled:opacity-50'
          onClick={handleRandomSearch}
          disabled={!!isLoading}
        >
          {isLoading ? (
            <img src={'spinner.svg'} alt='loader' className='h-6 text-center ' />
          ) : (
            'I am Feeling LUCKY'
          )}
        </button>
      </div>
    </>
  );
}
