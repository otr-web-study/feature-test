import { useNavigate, useParams } from 'react-router-dom';
import { ArrowBack } from '@/components/icons/ArrowBack';

import { BookDetails } from '@/features/books/BookDetails';

export const Details = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  return (
    <div className="pt-4">
      <button
        className="flex items-center gap-2 rounded-radii px-5 py-1 shadow-shadow transition-colors duration-300 hover:text-focused"
        onClick={() => navigate(-1)}
      >
        <ArrowBack className="w-4" /> Back
      </button>
      <BookDetails id={id} />
    </div>
  );
};
