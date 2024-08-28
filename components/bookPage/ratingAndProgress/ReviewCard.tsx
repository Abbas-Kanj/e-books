"use client";
import Image from "next/image";
import React, { useState } from "react";
import Rating from "./Rating";
import { Review } from "@/types/review";

type Props = {
  review: Review;
};

const ReviewCard = ({ review }: Props) => {
  const { userId, text, rating } = review;
  const [showFullText, setShowFullText] = useState(false);
  let description = text;
  if (!showFullText && description.length > 490) {
    description = description.substring(0, 490) + "...";
  }
  return (
    <div className="container flex mx-20 px-24 py-6 min-h-64 bg-neutral-content bg-opacity-10 p-4 rounded-lg">
      <div className="flex flex-col gap-2 w-1/3">
        <Image
          src={userId.image}
          alt="user Image"
          width={60}
          height={60}
          priority={false}
          className="rounded-full"
        />
        <h2 className="text-base text-primary">{userId.username}</h2>
      </div>
      <div className="flex flex-col w-2/3 gap-4">
        <Rating rating={rating} />
        <p className="text-primary text-pretty">
          {description}
          {description.length > 490 && (
            <button
              className="text-base-content text-sm"
              onClick={() => setShowFullText((prevState) => !prevState)}
            >
              {showFullText ? "Show less" : "Show more"}
            </button>
          )}
        </p>
      </div>
    </div>
  );
};

export default ReviewCard;
