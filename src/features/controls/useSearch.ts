import { useAppDispatch, useAppSelector } from '@/store/appHooks';
import { selectSearch } from './controls-selectors';
import { setSearch } from './controls-slice';

export const useSearch = () => {
  const dispatch = useAppDispatch();
  const search = useAppSelector(selectSearch);

  const handleSearchChange = (val: string) => dispatch(setSearch(val));

  const handleSearch = () => {
    console.log('search');
  };

  const handleClear = () => dispatch(setSearch(''));

  return { search, handleSearchChange, handleSearch, handleClear };
};
