import { Routes, Route } from 'react-router-dom';
import { HomePage, Details, NotFound } from '@/pages';

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/book/:id" element={<Details />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
