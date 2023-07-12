'use client';
import React, { useCallback, useEffect } from 'react';
import { TextField } from 'reshaped';
import { useState } from 'react';
import { useSearchParams, usePathname, useRouter } from 'next/navigation';
import { debounce } from 'radash';
import SearchIcon from '../Icons/SearchIcon';

const MAX_LENGTH = 5;
const BASE_WIDTH = 90;

const SearchField = () => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();
  const [inputWidth, setInputWidth] = useState(BASE_WIDTH);
  const [searchValue, setSearchValue] = useState('');

  const handleChange = useCallback(
    debounce({ delay: 500 }, (event: any) => {
      router.push(pathname + '?' + createQueryString('search', event.value));
    }),
    [pathname]
  );

  const handleTextFieldWidthChange = (inputValue: string) => {
    setSearchValue(inputValue);
    const inputLength = inputValue.length;
    const newWidth =
      inputLength > MAX_LENGTH
        ? BASE_WIDTH + (inputLength - MAX_LENGTH) * 7
        : BASE_WIDTH;

    setInputWidth(newWidth);
  };

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams as unknown as string);
      params.set(name, value);

      return params.toString();
    },
    [searchParams]
  );

  useEffect(() => {
    setSearchValue('');
    router.replace(pathname);
  }, [pathname]);

  return (
    <TextField
      value={searchValue}
      name='Search'
      placeholder='Search'
      onChange={(event) => {
        handleChange(event);
        handleTextFieldWidthChange(event.value);
      }}
      icon={<SearchIcon />}
      attributes={{ style: { width: inputWidth, borderRadius: '20px' } }}
      inputAttributes={{ style: { fontWeight: 600 } }}
    />
  );
};

export default SearchField;
