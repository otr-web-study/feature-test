import { configureStore, combineReducers, PreloadedState } from '@reduxjs/toolkit';
import ky from 'ky';
import { controlsReducer } from '@/features/controls/controls-slice';
import { booksReducer } from '@/features/books/books-slice';
import * as api from '@/api';

const rootReducer = combineReducers({
  controls: controlsReducer,
  books: booksReducer,
});

export function setupStore(preloadedState?: PreloadedState<RootState>) {
  return configureStore({
    reducer: rootReducer,
    preloadedState,
    devTools: true,
    middleware: (getDefaultMiddlware) =>
      getDefaultMiddlware({
        thunk: {
          extraArgument: {
            client: ky.extend({
              headers: {
                Accept: '*/*',
              },
            }),
            api,
          },
        },
        serializableCheck: false,
      }),
  });
}

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
