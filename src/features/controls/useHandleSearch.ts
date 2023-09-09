import { useNavigate, useLocation } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '@/store/appHooks';
import { selectSearchParams } from './controls-selectors';
import { searchBooks } from '@/features/books/books-actions';

export const useHandleSearch = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const searchParams = useAppSelector(selectSearchParams);

  const handleSearch = () => {
    dispatch(searchBooks(searchParams));
    if (location.pathname !== '/') {
      navigate('/');
    }
  };

  return handleSearch;
};
