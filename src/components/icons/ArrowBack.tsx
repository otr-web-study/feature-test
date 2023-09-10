import { type FC } from 'react';

interface ArrowBackProps {
  className: string;
}

export const ArrowBack: FC<ArrowBackProps> = ({ className }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 512 512">
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="48"
        d="M244 400L100 256l144-144M120 256h292"
      />
    </svg>
  );
};
