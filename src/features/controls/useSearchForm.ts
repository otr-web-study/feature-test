import { FormEventHandler, useState } from 'react';
import { useAppDispatch } from '@/store/appHooks';
import { setSearch } from './controls-slice';
import { clearBooks } from '../books/books-slice';
import { useSearch } from './useSearch';

export const useSearchForm = () => {
  const dispatch = useAppDispatch();
  const [searchString, setSearchString] = useState('');
  useSearch();

  const handleSearchChange = (val: string) => setSearchString(val);

  const startNewSearch = (search: string) => {
    dispatch(clearBooks());
    dispatch(setSearch(search));
  };

  const onSearchSubmit: FormEventHandler = (evt) => {
    evt.preventDefault();
    startNewSearch(searchString);
  };

  const handleClear = () => {
    setSearchString('');
    startNewSearch('');
  };

  return { search: searchString, handleSearchChange, handleSearch: onSearchSubmit, handleClear };
};
