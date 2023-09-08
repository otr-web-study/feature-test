import { RootState } from '@/store/store';

export const selectSearch = (state: RootState) => state.controls.search;
export const selectCategory = (state: RootState) => state.controls.category;
export const selectSort = (state: RootState) => state.controls.sort;
export const selectPage = (state: RootState) => state.controls.page;
