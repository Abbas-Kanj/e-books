interface Book {
  _id: string;
  title: string;
  author: string;
  isbn: string;
  price: number;
  isFree: boolean;
  category: string;
  publisherDescription: string;
  detailedSummary: string;
  length: string;
  awards: object;
  publishedDate: Date;
  imageUrl: string;
  audioUrl: string;
}
