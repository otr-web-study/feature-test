import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { CategoryFilter, SortVariants } from '@/types';

interface ControlsSlice {
  search: string;
  category: CategoryFilter;
  sort: SortVariants;
  page: number;
}

const initialState: ControlsSlice = {
  search: '',
  category: 'All',
  sort: 'Relevance',
  page: 0,
};

const controlsSlice = createSlice({
  name: '@@controls',
  initialState,
  reducers: {
    setSearch: (state, action: PayloadAction<string>) => {
      state.search = action.payload;
      state.page = 0;
    },
    setCategory: (state, action: PayloadAction<CategoryFilter>) => {
      state.category = action.payload;
    },
    setSort: (state, action: PayloadAction<SortVariants>) => {
      state.sort = action.payload;
    },
    setPage: (state, action: PayloadAction<number>) => {
      state.page = action.payload;
    },
  },
});

export const { setSearch, setCategory, setSort, setPage } = controlsSlice.actions;
export const controlsReducer = controlsSlice.reducer;
