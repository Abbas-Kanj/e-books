export interface Book {
  _id: string;
  title: string;
  author: string;
  isbn: string;
  price: number;
  isFree: boolean;
  genre: string[];
  averageRating: number;
  publisherDescription: string;
  detailedSummary: string;
  length: string;
  awards: {
    title: string;
    year: number;
  };
  publishedDate: Date;
  imageUrl: string;
  pdfUrl: string;
  audioUrl: string;
  createdAt: Date;
  updatedAt: Date;
}
