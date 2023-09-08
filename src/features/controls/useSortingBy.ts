import { type SingleValue } from 'react-select';
import { useAppDispatch, useAppSelector } from '@/store/appHooks';
import { selectSort } from './controls-selectors';
import { setSort } from './controls-slice';
import { SortVariants } from '@/types';

interface SortSelectOptions {
  label: SortVariants;
  value: SortVariants;
}

type SortOption = {
  [RegKey in SortVariants]: { value: RegKey; label: RegKey };
};

const optionsMap: SortOption = {
  Relevance: { value: 'Relevance', label: 'Relevance' },
  Newest: { value: 'Newest', label: 'Newest' },
};

const options = Object.values(optionsMap);

export const useSortingBy = () => {
  const dispatch = useAppDispatch();
  const sort = useAppSelector(selectSort);

  const handleSelect = (sortOpt: SingleValue<SortSelectOptions>) =>
    dispatch(setSort(sortOpt?.value ?? 'Relevance'));

  return { sort: optionsMap[sort], options, handleSelect };
};
