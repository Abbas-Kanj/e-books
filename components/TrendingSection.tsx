import React from "react";
import BookCard from "./BookCard";
import { fetchBooks } from "@/utils/requests";
import Spinner from "./Spinner";

type Props = {};

const TrendingSection = async (props: Props) => {
  const books = await fetchBooks();

  const recentBooks = books
    ?.sort(() => Math.random() - Math.random())
    .slice(0, 6);

  return (
    <section className="flex flex-col w-full gap-5">
      <h1 className="text-2xl font-semibold w-fit text-primary">
        Trending Books 🔥
      </h1>
      <div className="flex justify-around">
        {recentBooks.length === 0 ? (
          <Spinner loading={true} />
        ) : (
          recentBooks.map((book: Book) => (
            <BookCard key={book._id} book={book} />
          ))
        )}
      </div>
    </section>
  );
};

export default TrendingSection;
