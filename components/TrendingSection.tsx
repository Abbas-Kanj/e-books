import React from "react";
import BookCard from "./BookCard";

type Props = {};

function TrendingSection({}: Props) {
  return (
    <section className="flex flex-col w-full gap-5">
      <h1 className="text-2xl font-semibold w-fit text-primary">
        Trending Books 🔥
      </h1>
      <div className="flex justify-around">
        <BookCard />
        <div className="rounded-full w-1 h-56 self-center bg-current"></div>
        <BookCard />
        <div className="rounded-full w-1 h-56 self-center bg-current"></div>
        <BookCard />
        <div className="rounded-full w-1 h-56 self-center bg-current"></div>
        <BookCard />
        <div className="rounded-full w-1 h-56 self-center bg-current"></div>
        <BookCard />
        <div className="rounded-full w-1 h-56 self-center bg-current"></div>
        <BookCard />
      </div>
    </section>
  );
}

export default TrendingSection;
