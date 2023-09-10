import { useAppSelector } from '@/store/appHooks';
import { selectBookIds, selectError, selectStatus } from './books-selectors';
import { Error } from '@/components/Error';
import { Preloader } from '@/components/Preloader';
import { BookCard } from './BookCard';
import { NextPage } from '../controls/NextPage';

export const BooksList = () => {
  const ids = useAppSelector(selectBookIds);
  const status = useAppSelector(selectStatus);
  const error = useAppSelector(selectError);

  if (status === 'rejected') {
    return <Error>{error}</Error>;
  }

  const content = ids.map((id) => <BookCard id={id} key={id} />);

  return (
    <section className="flex flex-col items-center gap-7 pb-10">
      <ul className="grid grid-cols-[min(100%,250px)] justify-center gap-[50px] py-6 sm:grid-cols-2 grid-3:grid-cols-3 grid-4:grid-cols-4">
        {content}
      </ul>
      {status === 'loading' ? <Preloader /> : null}
      <NextPage />
    </section>
  );
};
