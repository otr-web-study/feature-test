import { useAppDispatch, useAppSelector } from '@/store/appHooks';
import { selectPage } from './controls-selectors';
import { selectQty } from '../books/books-selectors';
import { setPage } from './controls-slice';

import { BOOKS_PER_PAGE } from '@/api';

export const useNextPage = () => {
  const dispatch = useAppDispatch();
  const page = useAppSelector(selectPage);
  const qty = useAppSelector(selectQty);

  const handleNextPage = () => dispatch(setPage(page + 1));

  const hasNextPage = page * BOOKS_PER_PAGE + BOOKS_PER_PAGE < qty;

  return { hasNextPage, handleNextPage };
};
