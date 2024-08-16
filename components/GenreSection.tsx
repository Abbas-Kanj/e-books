import React from "react";
import BookCard from "./BookCard";
import { fetchBooksByGenre } from "@/utils/requests";
import Link from "next/link";

type Props = {
  genre: string;
};

const GenreSection = async ({ genre }: Props) => {
  const books = await fetchBooksByGenre(genre);

  return (
    <div className="flex flex-col gap-5 items-start">
      <h1 className="text-xl font-bold">{genre}</h1>
      <div className="flex gap-10 w-full">
        {books.map((book: any) => (
          <BookCard key={book._id} book={book} />
        ))}
      </div>
      <Link
        href={`/explore/${genre}`}
        className="text-secondary-content self-end font-semibold hover:opacity-70 cursor-pointer"
      >
        More {genre}...
      </Link>
    </div>
  );
};

export default GenreSection;
