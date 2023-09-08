import { type FC } from 'react';

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}
export const Container: FC<ContainerProps> = ({ children, className = '' }) => {
  return <div className={`mx-auto max-w-[1240px] px-6 ${className}`}>{children}</div>;
};
