import { type FC } from 'react';
import Select from 'react-select';
import { useSortingBy } from './useSortingBy';

interface SortingBySelectProps {
  className?: string;
}

export const SortingBySelect: FC<SortingBySelectProps> = ({ className = '' }) => {
  const { sort, options, handleSelect } = useSortingBy();

  return (
    <div className="flex items-center gap-2">
      <h3 className="whitespace-nowrap">Sorting by</h3>
      <Select
        className={`w-full rounded-radii text-black ${className}`}
        options={options}
        value={sort}
        isClearable={false}
        isSearchable={false}
        hideSelectedOptions={true}
        onChange={handleSelect}
      />
    </div>
  );
};
