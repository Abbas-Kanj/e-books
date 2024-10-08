"use client";
import { Book } from "@/types/book";
import React, { useState } from "react";

type Props = {
  book: Book;
};

const BookDetails = ({ book }: Props) => {
  const {
    title,
    author,
    detailedSummary,
    publisherDescription,
    publishedDate,
  } = { ...book };
  const [showFullDescription, setShowFullDescription] = useState(false);
  let description = publisherDescription;
  if (!showFullDescription && publisherDescription.length > 320) {
    description = description.substring(0, 320) + "...";
  }

  const date = new Date(publishedDate);
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();

  const formattedDate = `${day}/${month.toString().padStart(2, "0")}/${year
    .toString()
    .padStart(2, "0")}`;

  return (
    <section className="flex flex-col gap-2 w-[600px]">
      <h1 className="text-5xl font-bold">{title}</h1>
      <h4 className="text-sm italic">{author}</h4>
      <p className="text-primary text-pretty">{detailedSummary}</p>
      <h3 className="text-xl font-semibold">PUBLISHER DESCRIPTION</h3>
      <p className="text-primary text-pretty">
        {description}{" "}
        {publisherDescription.length > 320 && (
          <button
            className="text-base-content text-sm"
            onClick={() => setShowFullDescription((prevState) => !prevState)}
          >
            {showFullDescription ? "Show less" : "Show more"}
          </button>
        )}
      </p>

      <h4 className="text-sm">
        Release Date: <span className="text-primary">{formattedDate}</span>
      </h4>
      <h4 className="text-sm">
        Length: <span className="text-primary">{book.length}</span>
      </h4>
    </section>
  );
};

export default BookDetails;
