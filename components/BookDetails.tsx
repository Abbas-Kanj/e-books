"use client";
import React, { useState } from "react";

type Props = {
  book: Book;
};

const BookDetails = ({ book }: Props) => {
  const [showFullDescription, setShowFullDescription] = useState(false);

  let description = book.detailedSummary;

  if (!showFullDescription) {
    description = description.substring(0, 320) + "...";
  }

  return (
    <section className="flex flex-col gap-2 w-[600px]">
      <h1 className="text-5xl font-bold">Rich Dad Poor Dad</h1>
      <h4 className="text-sm italic">Robert T. Kiyoski</h4>
      <p className="text-primary text-pretty">
        Rich Dad Poor Dad is a personal finance book written by Robert T. 1
        Kiyosaki and Sharon Lechter. 2 Published in 1997, it has become a global
        bestseller, translated into dozens of languages. 3 The book challenges
        conventional wisdom about money and investing, offering practical advice
        on building wealth and financial independence
      </p>
      <h3 className="text-xl font-semibold">PUBLISHER DESCRIPTION</h3>
      <p className="text-primary text-pretty">
        {description}{" "}
        <button
          className="text-base-content text-sm"
          onClick={() => setShowFullDescription((prevState) => !prevState)}
        >
          {showFullDescription ? "Show less" : "Show more"}
        </button>
      </p>

      <h4 className="text-sm">
        Release Date: <span className="text-primary"> April 22nd 2021</span>
      </h4>
      <h4 className="text-sm">
        Length: <span className="text-primary"> 300 pages</span>
      </h4>
    </section>
  );
};

export default BookDetails;
