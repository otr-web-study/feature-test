import { useAppSelector } from '@/store/appHooks';
import { selectQty } from './books-selectors';

export const TotalCountFound = () => {
  const qty = useAppSelector(selectQty);

  return qty ? <h4 className="text-center font-semibold">Found {qty} results</h4> : null;
};
