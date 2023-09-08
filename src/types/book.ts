interface ImageLinks {
  smallThumbnail: string;
  thumbnail: string;
}

export interface Book {
  id: string;
  title: string;
  authors: string[];
  categories?: string[];
  imageLinks: ImageLinks;
  description?: string;
}
