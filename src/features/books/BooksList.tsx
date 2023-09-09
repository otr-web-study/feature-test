import { useAppSelector } from '@/store/appHooks';
import { selectBookIds, selectError, selectStatus } from './books-selectors';
import { Error } from '@/components/Error';
import { Preloader } from '@/components/Preloader';
import { BookCard } from './BookCard';

export const BooksList = () => {
  const ids = useAppSelector(selectBookIds);
  const status = useAppSelector(selectStatus);
  const error = useAppSelector(selectError);

  if (status === 'rejected') {
    console.log(error);
    return <Error>Couldn't fetch data.</Error>;
  }

  const content = ids.map((id) => <BookCard id={id} key={id} />);

  return (
    <>
      <ul className="grid-3:grid-cols-3 grid-4:grid-cols-4 grid grid-cols-[min(100%,250px)] justify-center gap-[50px] py-6 sm:grid-cols-2">
        {content}
      </ul>
      {status === 'loading' ? <Preloader /> : null}
    </>
  );
};
