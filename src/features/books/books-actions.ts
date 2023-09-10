import { createAsyncThunk } from '@reduxjs/toolkit';

import type { Book, Extra, ApiBook } from '@/types';
import type { SearchParams } from '@/api';
import type { BooksSlice } from './books-slice';

interface SearchBooksResponse {
  items: ApiBook[];
  totalItems: number;
}

interface LocalSearchBooksResponse {
  items: Book[];
  totalItems: number;
}

export const searchBooks = createAsyncThunk<
  LocalSearchBooksResponse,
  SearchParams,
  {
    state: { books: BooksSlice };
    extra: Extra;
    rejectValue: string;
  }
>(
  '@@books/search-books',
  async (params, { extra: { client, api }, rejectWithValue }) => {
    if (!params.search) return rejectWithValue('Search string is required!');

    try {
      const { totalItems, items }: SearchBooksResponse = await client
        .get(api.searchBooks(params), { mode: 'cors' })
        .json();

      const res: LocalSearchBooksResponse = {
        totalItems,
        items: items.map((book) => ({
          id: book.id,
          title: book.volumeInfo.title,
          authors: book.volumeInfo.authors,
          categories: book.volumeInfo.categories,
          imageLinks: book.volumeInfo.imageLinks,
          description: book.volumeInfo.description,
        })),
      };

      return res;
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
