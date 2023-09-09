import { type FC, ReactNode } from 'react';

interface ErrorProps {
  children: ReactNode;
}
export const Error: FC<ErrorProps> = ({ children }) => {
  return <h2 className="pt-14 text-center text-xl">{children}</h2>;
};
