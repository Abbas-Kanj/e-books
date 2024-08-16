import React from "react";
import BookCard from "./BookCard";
import { fetchBooksByGenre } from "@/utils/requests";

type Props = {
  genre: string;
};

const GenreSection = async ({ genre }: Props) => {
  const books = await fetchBooksByGenre(genre);

  return (
    <div className="flex flex-col gap-5 items-start">
      <h1 className="text-xl">{genre}</h1>
      <div className="flex gap-10 w-full">
        {books.map((book: any) => (
          <BookCard key={book._id} book={book} />
        ))}
      </div>
    </div>
  );
};

export default GenreSection;
