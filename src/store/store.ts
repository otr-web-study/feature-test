import { configureStore } from '@reduxjs/toolkit';
import ky from 'ky';
import { controlsReducer } from '@/features/controls/controls-slice';
import { booksReducer } from '@/features/books/books-slice';
import * as api from '@/api';

export const store = configureStore({
  reducer: {
    controls: controlsReducer,
    books: booksReducer,
  },
  devTools: true,
  middleware: (getDefaultMiddlware) =>
    getDefaultMiddlware({
      thunk: {
        extraArgument: {
          client: ky,
          api,
        },
      },
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
