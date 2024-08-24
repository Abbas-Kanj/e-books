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
  if (!showFullText) {
    description = description.substring(0, 490) + "...";
  }
  return (
    <div className="container justify-evenly flex gap-2 p-1">
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
          <button
            className="text-base-content text-sm"
            onClick={() => setShowFullText((prevState) => !prevState)}
          >
            {showFullText ? "Show less" : "Show more"}
          </button>
        </p>
      </div>
    </div>
  );
};

export default ReviewCard;
