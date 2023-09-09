import { SearchOutlined } from '@/components/icons/SearchOutlined';
import { CloseOutlined } from '@/components/icons/CloseOutlined';
import { useSearchForm } from './useSearchForm';

export const SearchForm = () => {
  const { search, handleSearch, handleSearchChange, handleClear } = useSearchForm();

  return (
    <form className="w-full max-w-[600px]" onSubmit={handleSearch}>
      <label
        htmlFor="search"
        className="flex w-full shrink-[1] items-center gap-6 rounded-radii bg-white px-5 py-[10px] text-black shadow-shadow focus-within:outline focus-within:outline-2 focus-within:outline-focused"
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
          <span onClick={handleClear}>
            <span className="sr-only">clear</span>
            <CloseOutlined className="h-4 w-4" />
          </span>
        ) : null}
        <button type="submit">
          <span className="sr-only">search</span>
          <SearchOutlined className="h-5 w-5" />
        </button>
      </label>
    </form>
  );
};
