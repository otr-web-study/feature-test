import { type FC } from 'react';

interface CloseOutlinedProps {
  className: string;
}
export const CloseOutlined: FC<CloseOutlinedProps> = ({ className }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 512 512">
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="32"
        d="M368 368L144 144M368 144L144 368"
      />
    </svg>
  );
};
