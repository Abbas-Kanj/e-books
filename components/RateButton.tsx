"use client";
import React, { Dispatch, SetStateAction } from "react";

type Props = {
  setRating: Dispatch<SetStateAction<number>>;
};

const RateButton = ({ setRating }: Props) => {
  return (
    <div className="rating rating-md">
      <input
        type="radio"
        name="rating-7"
        className="mask mask-star-2 bg-orange-400"
        value={1}
        onChange={(e) => setRating(Number(e.target.value))}
        defaultChecked
      />
      <input
        type="radio"
        name="rating-7"
        className="mask mask-star-2 bg-orange-400"
        value={2}
        onChange={(e) => setRating(Number(e.target.value))}
      />
      <input
        type="radio"
        name="rating-7"
        className="mask mask-star-2 bg-orange-400"
        value={3}
        onChange={(e) => setRating(Number(e.target.value))}
      />
      <input
        type="radio"
        name="rating-7"
        className="mask mask-star-2 bg-orange-400"
        value={4}
        onChange={(e) => setRating(Number(e.target.value))}
      />
      <input
        type="radio"
        name="rating-7"
        className="mask mask-star-2 bg-orange-400"
        value={5}
        onChange={(e) => setRating(Number(e.target.value))}
      />
    </div>
  );
};

export default RateButton;
