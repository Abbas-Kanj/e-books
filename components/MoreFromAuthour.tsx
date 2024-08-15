"use client";
import React, { useEffect, useState } from "react";
import BookCard from "./BookCard";
import Spinner from "./Spinner";
import { fetchBooksByAuthor } from "@/utils/requests";

type Props = {
  book: Book;
};

const MoreFromAuthour = ({ book }: Props) => {
  const { author } = book;
  const [loading, setLoading] = useState(true);
  const [booksByAuthor, setBooksByAuthor] = useState([]);

  useEffect(() => {
    const fetchBooksByAuthorData = async (author: string) => {
      try {
        const res = await fetchBooksByAuthor(author);
        setBooksByAuthor(res);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    fetchBooksByAuthorData(author);
  }, [author]);

  return (
    <section className="container flex flex-col gap-3 p-4 min-h-56">
      <h1 className="text-2xl font-semibold mb-4">
        More from <span className="italic font-light">{author}</span>
      </h1>
      {loading && <Spinner loading={loading} />}
      {!loading && booksByAuthor.length === 0 ? (
        <h2 className="text-center">No books available at this time</h2>
      ) : (
        <div className="flex justify-between px-2 w-full">
          {booksByAuthor.map((book: Book, index: number) => (
            <div key={book._id} className="flex items-center">
              <BookCard book={book} />
              {/* Rendering seperators */}
              {index < booksByAuthor.length - 1 && (
                <div className="rounded-full w-1 h-56 self-center bg-current ml-8"></div>
              )}
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default MoreFromAuthour;
