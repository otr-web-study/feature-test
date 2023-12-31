import { CategoryFilter, SortVariants } from './types';

export interface SearchParams {
  search: string;
  category: CategoryFilter;
  sortVariant: SortVariants;
  page: number;
}

const BASE_URL = 'https://www.googleapis.com/books/v1';
export const BOOKS_PER_PAGE = 30;

export const searchBooks = ({ search, category, sortVariant, page }: SearchParams) =>
  `${BASE_URL}/volumes?q=${search}${
    category === 'All' ? '' : '+subject:' + category.toLowerCase()
  }&orderBy=${sortVariant}&startIndex=${page * BOOKS_PER_PAGE}&maxResults=${BOOKS_PER_PAGE}${
    import.meta.env.VITE_KEY ? '&key=' + import.meta.env.VITE_KEY : ''
  }`;
