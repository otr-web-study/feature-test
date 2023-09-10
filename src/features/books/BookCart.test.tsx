import React, { PropsWithChildren } from 'react';
import { render, screen } from '@testing-library/react';
import type { RenderOptions } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import type { PreloadedState } from '@reduxjs/toolkit';
import { BookCard } from './BookCard';
import { RootState, AppStore } from '@/store/store';
import { booksReducer } from './books-slice';
import { controlsReducer } from '../controls/controls-slice';
import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router-dom';

interface ExtendedRenderOptions extends Omit<RenderOptions, 'queries'> {
  preloadedState?: PreloadedState<RootState>;
  store?: AppStore;
}

function renderWithProviders(
  ui: React.ReactElement,
  {
    preloadedState = {},
    store = configureStore({
      reducer: { books: booksReducer, controls: controlsReducer },
      preloadedState,
    }),
    ...renderOptions
  }: ExtendedRenderOptions = {},
) {
  function Wrapper({ children }: PropsWithChildren<NonNullable<unknown>>): JSX.Element {
    return <Provider store={store}>{children}</Provider>;
  }

  return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) };
}

const bookData = {
  id: '1',
  title: 'Fluent React',
  authors: ['Tejas Kumar'],
  categories: ['computers'],
  imageLinks: {
    smallThumbnail:
      'http://books.google.com/books/content?id=0WZczwEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api',
    thumbnail:
      'http://books.google.com/books/content?id=0WZczwEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api',
  },
};

const preloadedControls: ReturnType<typeof controlsReducer> = {
  search: '',
  category: 'All',
  sort: 'Relevance',
  page: 0,
};

const preloadedBooks: ReturnType<typeof booksReducer> = {
  status: 'received',
  error: null,
  qty: 1,
  ids: ['1'],
  entities: { '1': bookData },
};

describe("Character's card component", () => {
  it('Card renders', () => {
    renderWithProviders(
      <MemoryRouter>
        <BookCard id={1} />
      </MemoryRouter>,
      {
        preloadedState: {
          books: preloadedBooks,
          controls: preloadedControls,
        },
      },
    );

    expect(screen.getByText(/Fluent React/i)).toBeInTheDocument();
    expect(screen.getByText(/Tejas Kumar/i)).toBeInTheDocument();
    expect(screen.getByText(/computers/i)).toBeInTheDocument();
  });

  it('Card renders without categories', () => {
    renderWithProviders(
      <MemoryRouter>
        <BookCard id={1} />
      </MemoryRouter>,
      {
        preloadedState: {
          books: { ...preloadedBooks, entities: { '1': { ...bookData, categories: undefined } } },
          controls: preloadedControls,
        },
      },
    );

    expect(screen.getByText(/Fluent React/i)).toBeInTheDocument();
    expect(screen.getByText(/Tejas Kumar/i)).toBeInTheDocument();
  });

  it('Card renders 1 categorie of many', () => {
    renderWithProviders(
      <MemoryRouter>
        <BookCard id={1} />
      </MemoryRouter>,
      {
        preloadedState: {
          books: {
            ...preloadedBooks,
            entities: { '1': { ...bookData, categories: ['computers', 'art'] } },
          },
          controls: preloadedControls,
        },
      },
    );

    expect(screen.getByText(/computers/i)).not.toMatch(/art/);
  });

  it('Card renders without authors', () => {
    renderWithProviders(
      <MemoryRouter>
        <BookCard id={1} />
      </MemoryRouter>,
      {
        preloadedState: {
          books: { ...preloadedBooks, entities: { '1': { ...bookData, authors: undefined } } },
          controls: preloadedControls,
        },
      },
    );

    expect(screen.getByText(/Fluent React/i)).toBeInTheDocument();
    expect(screen.getByText(/computers/i)).toBeInTheDocument();
  });
});
