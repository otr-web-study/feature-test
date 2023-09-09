import type { ImageLinks } from '.';

export interface Book {
  id: string;
  title: string;
  authors?: string[];
  categories?: string[];
  imageLinks?: ImageLinks;
  description?: string;
}
