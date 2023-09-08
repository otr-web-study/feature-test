import { type SingleValue } from 'react-select';
import { useAppDispatch, useAppSelector } from '@/store/appHooks';
import { selectCategory } from './controls-selectors';
import { setCategory } from './controls-slice';
import { CategoryFilter } from '@/types';

interface CategorySelectOptions {
  label: CategoryFilter;
  value: CategoryFilter;
}

type CategoryOption = {
  [RegKey in CategoryFilter]: { value: RegKey; label: RegKey };
};

const optionsMap: CategoryOption = {
  All: { value: 'All', label: 'All' },
  Art: { value: 'Art', label: 'Art' },
  Biography: { value: 'Biography', label: 'Biography' },
  Computers: { value: 'Computers', label: 'Computers' },
  History: { value: 'History', label: 'History' },
  Medical: { value: 'Medical', label: 'Medical' },
  Poetry: { value: 'Poetry', label: 'Poetry' },
};

const options = Object.values(optionsMap);

export const useCategoryFilter = () => {
  const dispatch = useAppDispatch();
  const category = useAppSelector(selectCategory);

  const handleSelect = (cat: SingleValue<CategorySelectOptions>) =>
    dispatch(setCategory(cat?.value ?? 'All'));

  return { category: optionsMap[category], options, handleSelect };
};
