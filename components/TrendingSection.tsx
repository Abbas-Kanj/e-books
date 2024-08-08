"use client";
import React, { useEffect, useState } from "react";
import BookCard from "./BookCard";
import { fetchBooks } from "@/utils/requests";
import Spinner from "./Spinner";

type Props = {};

const TrendingSection = async (props: Props) => {
  const [loading, setLoading] = useState(true);
  const [recentBooks, setRecentBooks] = useState([]);

  useEffect(() => {
    const fetchBooksApi = async () => {
      try {
        const books = await fetchBooks();

        setRecentBooks(
          books.sort(() => Math.random() - Math.random()).slice(0, 6)
        );
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetchBooksApi();
  }, []);

  return (
    <section className="flex flex-col w-full gap-5">
      <h1 className="text-2xl font-semibold w-fit text-primary">
        Trending Books 🔥
      </h1>
      <div className="flex justify-around">
        {loading ? (
          <Spinner loading={loading} />
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
