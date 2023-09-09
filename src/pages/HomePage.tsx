import { TotalCountFound } from '@/features/books/TotalCountFound';
import { BooksList } from '@/features/books/BooksList';

export const HomePage = () => {
  return (
    <>
      <TotalCountFound />
      <BooksList />
    </>
  );
};
