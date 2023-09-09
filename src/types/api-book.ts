export interface ImageLinks {
  smallThumbnail: string;
  thumbnail: string;
}

interface VolumeInfo {
  title: string;
  authors?: string[];
  categories?: string[];
  imageLinks?: ImageLinks;
  description?: string;
}

export interface ApiBook {
  id: string;
  volumeInfo: VolumeInfo;
}
