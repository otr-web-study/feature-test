import { FormEventHandler } from 'react';
import { useAppDispatch, useAppSelector } from '@/store/appHooks';
import { selectSearch } from './controls-selectors';
import { setSearch } from './controls-slice';
import { clearBooks } from '../books/books-slice';
import { useHandleSearch } from './useHandleSearch';

export const useSearchForm = () => {
  const dispatch = useAppDispatch();
  const search = useAppSelector(selectSearch);
  const handleSearch = useHandleSearch();

  const handleSearchChange = (val: string) => dispatch(setSearch(val));

  const onSearchSubmit: FormEventHandler = (evt) => {
    evt.preventDefault();
    dispatch(clearBooks());
    handleSearch();
  };

  const handleClear = () => dispatch(setSearch(''));

  return { search, handleSearchChange, handleSearch: onSearchSubmit, handleClear };
};
