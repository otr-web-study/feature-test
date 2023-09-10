import { type FC } from 'react';
import { useNextPage } from './useNextPage';

interface NextPageProps {}
export const NextPage: FC<NextPageProps> = () => {
  const { hasNextPage, handleNextPage } = useNextPage();

  if (!hasNextPage) return null;

  return (
    <button
      className="flex items-center rounded-radii px-20 py-1 shadow-shadow transition-colors duration-300 hover:text-focused"
      onClick={handleNextPage}
    >
      More...
    </button>
  );
};
