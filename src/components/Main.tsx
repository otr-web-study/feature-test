import { type FC } from 'react';
import { Container } from '@/components/Container';

interface MainProps {
  children: React.ReactNode;
}
export const Main: FC<MainProps> = ({ children }) => {
  return (
    <main className="py-5">
      <Container>{children}</Container>
    </main>
  );
};
