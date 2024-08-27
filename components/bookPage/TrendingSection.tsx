import React, { Suspense } from "react";
import { fetchBooks } from "@/utils/requests";
import { Book } from "@/types/book";
import Spinner from "../Spinner";
import BookCard from "../BookCard";

const TrendingSection = async () => {
  const books = await fetchBooks();

  const recentBooks = books
    ?.sort(() => Math.random() - Math.random())
    .slice(0, 6);

  return (
    <section className="flex flex-col w-full gap-8 md:gap-5">
      <h1 className="text-2xl font-semibold mt-4 md:mt-0 w-fit text-primary">
        Trending Books 🔥
      </h1>
      <Suspense fallback={<Spinner loading={true} />}>
        <div className="flex flex-col md:flex-row md:justify-between px-2 w-full">
          {recentBooks.map((book: Book, index: number) => (
            <div
              key={book._id}
              className="flex flex-col md:flex-row gap-1 items-center"
            >
              <BookCard book={book} />
              {/* Rendering seperators */}
              {index < recentBooks.length - 1 && (
                <div className="rounded-full h-1 w-56 md:w-1 md:h-56 self-center bg-current md:mb-0 md:ml-8 mt-4 mb-4"></div>
              )}
            </div>
          ))}
        </div>
      </Suspense>
    </section>
  );
};

export default TrendingSection;
