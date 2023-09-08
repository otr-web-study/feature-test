import { type FC } from 'react';
import Select from 'react-select';
import { useCategoryFilter } from './useCategoryFilter';

interface CategorySelectProps {
  className?: string;
}

export const CategorySelect: FC<CategorySelectProps> = ({ className = '' }) => {
  const { category, options, handleSelect } = useCategoryFilter();

  return (
    <div className="flex items-center gap-2">
      <h3>Categories</h3>
      <Select
        className={`w-full rounded-radii text-black ${className}`}
        options={options}
        value={category}
        isClearable={false}
        isSearchable={false}
        hideSelectedOptions={true}
        onChange={handleSelect}
      />
    </div>
  );
};
