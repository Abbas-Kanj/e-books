import React from "react";
import Ratings from "./ratingAndProgress/Ratings";
import Progress from "./ratingAndProgress/Progress";
import Reviews from "./ratingAndProgress/Reviews";
import { Book } from "@/types/book";
import WriteAReviewSection from "./WriteAReviewSection";

type Props = {
  book: Book;
};

const RatingsAndReviewsSection = ({ book }: Props) => {
  return (
    <section className="container p-4">
      <h1 className="text-2xl font-semibold mb-4">
        Ratings & Reviews{" "}
        <span className="text-lg ml-48">
          Avg. Rating: {Math.round(book.averageRating)}
        </span>
      </h1>
      <div className="flex gap-5">
        <div className="flex gap-4 pl-4">
          <Ratings />
          <Progress />
        </div>
        <WriteAReviewSection />
      </div>
      <Reviews book={book} />
    </section>
  );
};

export default RatingsAndReviewsSection;
