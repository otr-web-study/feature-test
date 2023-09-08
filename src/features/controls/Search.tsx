import { type FC } from 'react';
import { SearchOutlined } from '@/components/icons/SearchOutlined';
import { CloseOutlined } from '@/components/icons/CloseOutlined';
import { useSearch } from './useSearch';

interface SearchProps {
  className?: string;
}
export const Search: FC<SearchProps> = ({ className = '' }) => {
  const { search, handleSearch, handleSearchChange, handleClear } = useSearch();

  return (
    <label
      htmlFor="search"
      className={`focus-within:outline-focused flex w-full shrink-[1] items-center gap-6 rounded-radii bg-white px-5 py-[10px] text-black shadow-shadow focus-within:outline focus-within:outline-2 ${className}`}
    >
      <input
        value={search}
        id="search"
        onChange={(e) => handleSearchChange(e.target.value)}
        placeholder="Search string"
        autoComplete="off"
        className="bg-ui min-w-[100px] flex-grow text-sm outline-none"
      />
      {search ? (
        <button onClick={handleClear}>
          <span className="sr-only">clear</span>
          <CloseOutlined className="h-4 w-4" />
        </button>
      ) : null}
      <button onClick={handleSearch}>
        <span className="sr-only">search</span>
        <SearchOutlined className="h-5 w-5" />
      </button>
    </label>
  );
};
