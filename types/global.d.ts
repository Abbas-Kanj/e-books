interface Book {
  _id: string;
  title: string;
  author: string;
  isbn: string;
  price: number;
  isFree: boolean;
  genre: Array;
  averageRating: number;
  publisherDescription: string;
  detailedSummary: string;
  length: string;
  awards: object;
  publishedDate: Date;
  imageUrl: string;
  audioUrl: string;
}

interface Review {
  _id: string;
  rating: number;
  text: string;
  userId: {
    username: string;
    image: string;
  };
}
