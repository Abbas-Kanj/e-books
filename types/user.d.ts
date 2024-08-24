import { Review } from "./reviews";

export interface User {
  _id: string;
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  image: string;
  bookmarks: Array<TemplateStringsArray>;
  role: string;
  reviews: Review[];
  createdAt: Date;
  updatedAt: Date;
}
