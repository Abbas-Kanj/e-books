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
    <section className="flex flex-col w-full gap-5">
      <h1 className="text-2xl font-semibold w-fit text-primary">
        Trending Books 🔥
      </h1>
      <Suspense fallback={<Spinner loading={true} />}>
        <div className="flex justify-between px-2 w-full">
          {recentBooks.map((book: Book, index: number) => (
            <div key={book._id} className="flex gap-1 items-center">
              <BookCard book={book} />
              {/* Rendering seperators */}
              {index < recentBooks.length - 1 && (
                <div className="rounded-full w-1 h-56 self-center bg-current ml-8"></div>
              )}
            </div>
          ))}
        </div>
      </Suspense>
    </section>
  );
};

export default TrendingSection;
