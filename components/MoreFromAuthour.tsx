import React from "react";
import BookCard from "./BookCard";
import { fetchBooksByAuthor } from "@/utils/requests";
import { Book } from "@/types/book";

type Props = {
  book: Book;
};

const MoreFromAuthour = async ({ book }: Props) => {
  const { author } = book;
  const booksByAuthor = await fetchBooksByAuthor(author);

  return (
    <section className="container flex flex-col gap-3 p-4 min-h-56">
      <h1 className="text-2xl font-semibold mb-4 text-primary">
        More from <span className="italic font-light">{author}</span>
      </h1>
      <div className="flex gap-10 px-2 w-full">
        {booksByAuthor.length === 0 ? (
          <h2 className="mx-auto">No books available at this time</h2>
        ) : (
          booksByAuthor.map((book: Book, index: number) => (
            <div key={book._id} className="flex items-center">
              <BookCard book={book} />
              {/* Rendering seperators */}
              {index < booksByAuthor.length - 1 && (
                <div className="rounded-full w-1 h-56 self-center bg-current ml-8"></div>
              )}
            </div>
          ))
        )}
      </div>
    </section>
  );
};

export default MoreFromAuthour;
