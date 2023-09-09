import { createSlice, createEntityAdapter } from '@reduxjs/toolkit';
import { searchBooks } from './books-actions';
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
  extraReducers(builder) {
    builder
      .addCase(searchBooks.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(searchBooks.rejected, (state, action) => {
        state.status = 'rejected';
        state.error = action.payload || 'Unknown error';
      })
      .addCase(searchBooks.fulfilled, (state, action) => {
        state.status = 'received';
        state.qty = action.payload.totalItems;
        booksAdapter.addMany(state, action.payload.items);
      });
  },
});

export const booksReducer = booksSlice.reducer;
export const { clearBooks } = booksSlice.actions;
