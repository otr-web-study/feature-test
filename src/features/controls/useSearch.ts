import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@/store/appHooks';
import { selectSearchParams } from './controls-selectors';
import { searchBooks } from '@/features/books/books-actions';

export const useSearch = () => {
  const dispatch = useAppDispatch();
  const searchParams = useAppSelector(selectSearchParams);

  useEffect(() => {
    if (searchParams.search) {
      dispatch(searchBooks(searchParams));
    }
  }, [searchParams, dispatch]);
};
