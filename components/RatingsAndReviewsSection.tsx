import React from "react";
import Ratings from "./Ratings";
import Progress from "./Progress";
import WriteAReviewSection from "./WriteAReviewSection";
import Reviews from "./Reviews";

type Props = {
  book: Book;
};

const RatingsAndReviewsSection = ({ book }: Props) => {
  return (
    <section className="container p-4">
      <h1 className="text-2xl font-semibold mb-4">Ratings & Reviews</h1>
      <div className="flex gap-5">
        <div className="flex gap-4 pl-4">
          <Ratings />
          <Progress />
        </div>
        <WriteAReviewSection book={book} />
      </div>
      <Reviews book={book} />
    </section>
  );
};

export default RatingsAndReviewsSection;
