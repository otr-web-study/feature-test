import { RootState } from '@/store/store';
import { booksAdapter } from './books-slice';

export const { selectById: selectBookById, selectIds: selectBookIds } = booksAdapter.getSelectors(
  (state: RootState) => state.books,
);

export const selectStatus = (state: RootState) => state.books.status;
export const selectError = (state: RootState) => state.books.error;
export const selectQty = (state: RootState) => state.books.qty;
