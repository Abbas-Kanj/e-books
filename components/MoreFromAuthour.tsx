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
    <section className="container flex flex-col gap-3 pl-4 min-h-56">
      <h1 className="text-xl font-semibold">More from the Author</h1>
      {loading && <Spinner loading={loading} />}
      {!loading && booksByAuthor.length === 0 ? (
        <h2 className="text-center">No books available at this time</h2>
      ) : (
        <div className="flex">
          {booksByAuthor.map((book: Book) => (
            <BookCard key={book._id} book={book} />
          ))}
        </div>
      )}
    </section>
  );
};

export default MoreFromAuthour;
