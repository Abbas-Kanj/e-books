export interface Review {
  _id: string;
  rating: number;
  text: string;
  userId: {
    username: string;
    image: string;
  };
}
