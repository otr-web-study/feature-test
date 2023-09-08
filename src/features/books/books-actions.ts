import { createAsyncThunk } from '@reduxjs/toolkit';

import type { Book, Extra } from '@/types';
import type { SearchParams } from '@/api';
import type { BooksSlice } from './books-slice';

interface SearchBooksResponse {
  items: Book[];
  totalItems: number;
}

export const searchBooks = createAsyncThunk<
  Promise<SearchBooksResponse>,
  SearchParams,
  {
    state: { books: BooksSlice };
    extra: Extra;
    rejectValue: string;
  }
>(
  '@@countries/load-countries',
  async (params, { extra: { client, api }, rejectWithValue }) => {
    try {
      const data = await client.get(api.searchBooks(params)).json();
      return data;
    } catch (error) {
      if (error instanceof Error) {
        return rejectWithValue(error.message);
      }
      return rejectWithValue('Unknown error.');
    }
  },
  {
    condition: (_, { getState }) => {
      const {
        books: { status },
      } = getState();

      if (status === 'loading') {
        return false;
      }
    },
  },
);
