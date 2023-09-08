import { createSlice, createEntityAdapter } from '@reduxjs/toolkit';
import type { Book, Status } from '@/types';

export interface BooksSlice {
  status: Status;
  error: string | null;
  qty: number;
}

export const booksAdapter = createEntityAdapter<Book>();
const initialState = booksAdapter.getInitialState<BooksSlice>({
  status: 'idle',
  error: null,
  qty: 0,
});

const booksSlice = createSlice({
  name: '@@books',
  initialState,
  reducers: {
    clearBooks: (state) => {
      booksAdapter.removeAll(state);
      state.qty = 0;
    },
  },
});

export const booksReducer = booksSlice.reducer;
export const { clearBooks } = booksSlice.actions;
