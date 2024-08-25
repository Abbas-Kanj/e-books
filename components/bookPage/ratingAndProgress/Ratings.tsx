import React from "react";

type Props = {};

const Ratings = (props: Props) => {
  return (
    <div className="flex flex-col gap-2">
      {/* 5 stars */}
      <div className="rating rating-md">
        <input
          disabled
          type="radio"
          name="rating-5"
          className="mask mask-star-2 bg-yellow-400 cursor-default"
        />
        <input
          disabled
          type="radio"
          name="rating-5"
          className="mask mask-star-2 bg-yellow-400 cursor-default"
        />
        <input
          disabled
          type="radio"
          name="rating-5"
          className="mask mask-star-2 bg-yellow-400 cursor-default"
        />
        <input
          disabled
          type="radio"
          name="rating-5"
          className="mask mask-star-2 bg-yellow-400 cursor-default"
        />
        <input
          disabled
          type="radio"
          name="rating-5"
          className="mask mask-star-2 bg-yellow-400 cursor-default"
          defaultChecked
        />
      </div>
      {/* 4 stars */}
      <div className="rating rating-md">
        <input
          disabled
          type="radio"
          name="rating-4"
          className="mask mask-star-2 bg-yellow-400 cursor-default"
        />
        <input
          disabled
          type="radio"
          name="rating-4"
          className="mask mask-star-2 bg-yellow-400 cursor-default"
        />
        <input
          disabled
          type="radio"
          name="rating-4"
          className="mask mask-star-2 bg-yellow-400 cursor-default"
        />
        <input
          disabled
          type="radio"
          name="rating-4"
          className="mask mask-star-2 bg-yellow-400 cursor-default"
          defaultChecked
        />
        <input
          disabled
          type="radio"
          name="rating-4"
          className="mask mask-star-2 bg-yellow-400 cursor-default"
        />
      </div>
      {/* 3 stars */}
      <div className="rating rating-md">
        <input
          disabled
          type="radio"
          name="rating-3"
          className="mask mask-star-2 bg-yellow-400 cursor-default"
        />
        <input
          disabled
          type="radio"
          name="rating-3"
          className="mask mask-star-2 bg-yellow-400 cursor-default"
        />
        <input
          disabled
          type="radio"
          name="rating-3"
          className="mask mask-star-2 bg-yellow-400 cursor-default"
          defaultChecked
        />
        <input
          disabled
          type="radio"
          name="rating-3"
          className="mask mask-star-2 bg-yellow-400 cursor-default"
        />
        <input
          disabled
          type="radio"
          name="rating-3"
          className="mask mask-star-2 bg-yellow-400 cursor-default"
        />
      </div>
      {/* 2 stars */}
      <div className="rating rating-md">
        <input
          disabled
          type="radio"
          name="rating-2"
          className="mask mask-star-2 bg-yellow-400 cursor-default"
        />
        <input
          disabled
          type="radio"
          name="rating-2"
          className="mask mask-star-2 bg-yellow-400 cursor-default"
          defaultChecked
        />
        <input
          disabled
          type="radio"
          name="rating-2"
          className="mask mask-star-2 bg-yellow-400 cursor-default"
        />
        <input
          disabled
          type="radio"
          name="rating-2"
          className="mask mask-star-2 bg-yellow-400 cursor-default"
        />
        <input
          disabled
          type="radio"
          name="rating-2"
          className="mask mask-star-2 bg-yellow-400 cursor-default"
        />
      </div>
      {/* 1 star */}
      <div className="rating rating-md">
        <input
          disabled
          type="radio"
          name="rating-1"
          className="mask mask-star-2 bg-yellow-400 cursor-default"
          defaultChecked
        />
        <input
          disabled
          type="radio"
          name="rating-1"
          className="mask mask-star-2 bg-yellow-400 cursor-default"
        />
        <input
          disabled
          type="radio"
          name="rating-1"
          className="mask mask-star-2 bg-yellow-400 cursor-default"
        />
        <input
          disabled
          type="radio"
          name="rating-1"
          className="mask mask-star-2 bg-yellow-400 cursor-default"
        />
        <input
          disabled
          type="radio"
          name="rating-1"
          className="mask mask-star-2 bg-yellow-400 cursor-default"
        />
      </div>
    </div>
  );
};

export default Ratings;
