import { type FC } from 'react';
import { Link } from 'react-router-dom';
import { useAppSelector } from '@/store/appHooks';
import { selectBookById } from './books-selectors';
import defaultImage from '@/assets/images/defaultImage.png';

interface BookCardProps {
  id: string | number;
}
export const BookCard: FC<BookCardProps> = ({ id }) => {
  const book = useAppSelector((state) => selectBookById(state, id));

  if (!book) return null;

  const category = book?.categories && book.categories.length ? book.categories[0] : '';

  return (
    <article className="group h-full overflow-hidden rounded-radii bg-white shadow-shadow">
      <Link to={`/book/${id}`} className="flex h-full flex-col items-center px-4 py-6">
        <img
          src={book.imageLinks?.smallThumbnail ?? defaultImage}
          className="h-48 object-contain shadow-shadow transition-transform duration-300 group-hover:-translate-y-[3px] group-hover:translate-x-[3px] group-hover:shadow-2xl"
        />
        <h3 className="mt-6 min-h-[24px] w-full font-light text-gray-500 underline">{category}</h3>
        <h2 className="mt-3 w-full flex-grow font-medium">{book.title}</h2>
        <p className="mt-2 w-full text-sm text-gray-500">{(book.authors || []).join(', ')}</p>
      </Link>
    </article>
  );
};
