import React from "react";

type Props = {
  rating: number;
};

const Rating = ({ rating }: Props) => {
  const stars = Array.from({ length: 5 }, (_, index) => (
    <input
      key={index}
      type="radio"
      name="rating"
      className={`mask mask-star-2 bg-yellow-400 ${
        index < rating ? "" : "bg-opacity-30"
      }`}
      disabled
    />
  ));

  return <div className="rating rating-md">{stars}</div>;
};

export default Rating;
