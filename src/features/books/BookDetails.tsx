import { type FC } from 'react';
import { useAppSelector } from '@/store/appHooks';
import { selectBookById } from './books-selectors';
import defaultImage from '@/assets/images/defaultImage.png';

interface BookDetailsProps {
  id: string | undefined;
}

export const BookDetails: FC<BookDetailsProps> = ({ id = '' }) => {
  const book = useAppSelector((state) => selectBookById(state, id));

  if (!book) return null;

  const { imageLinks, categories, title, description, authors } = book;

  return (
    <div className="grid grid-cols-1 items-center justify-center gap-[70px] py-10 lg:grid-cols-2">
      <div className="flex h-full items-center justify-center bg-gray-100">
        <img
          src={imageLinks?.thumbnail ?? defaultImage}
          alt={book.title}
          className="mx-6 my-6 aspect-[4/5] min-w-[50%] rounded-sm object-cover object-center shadow-shadow"
        />
      </div>
      <div className="flex flex-col">
        <h3 className="font-light text-gray-500">{(categories || []).join(' / ')}</h3>
        <h1 className="mt-6 font-medium">{title}</h1>
        <h4 className="mt-2 text-sm text-gray-500 underline">{(authors || []).join(', ')}</h4>
        <p className="mt-4 min-h-[50%] border border-gray-100 px-4 py-4">{description}</p>
      </div>
    </div>
  );
};
