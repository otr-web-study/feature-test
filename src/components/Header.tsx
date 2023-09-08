import { Container } from '@/components/Container';
import { Search } from '@/features/controls/Search';
import { CategorySelect } from '@/features/controls/CategorySelect';
import { SortingBySelect } from '@/features/controls/SortingBySelect';

export const Header = () => {
  return (
    <header className="relative py-6 text-white shadow-shadow before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:bg-header-bg before:bg-cover before:bg-[center_center] before:content-[''] after:absolute after:left-0 after:top-0 after:-z-10 after:h-full after:w-full after:bg-black/50 after:content-['']">
      <Container className="flex flex-col items-center gap-4">
        <h1 className="text-center text-4xl font-bold">Search for books</h1>
        <Search className="max-w-[600px]" />
        <div className="grid w-full max-w-[600px] grid-cols-1 gap-4 md:grid-cols-2 md:place-items-stretch">
          <CategorySelect />
          <SortingBySelect />
        </div>
      </Container>
    </header>
  );
};
