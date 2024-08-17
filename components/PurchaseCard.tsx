"use client";
import React from "react";
import ShareButtons from "./ShareButtons";

type Props = {
  book: Book;
};

const PurchaseCard = ({ book }: Props) => {
  return (
    <div className="flex flex-col gap-2">
      <div className="card bg-primary text-primary-content h-fit w-80 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">
            Free! <s>$5.99</s>
          </h2>
          <p className="text-sm">Available for a limited time</p>
          <div className="card-actions justify-end mt-2">
            <button className="btn btn-secondary btn-wide font-bold">
              Add to my collection
            </button>
            <button className="btn btn-primary shadow-none btn-wide font-bold">
              Start reading
            </button>
          </div>
        </div>
      </div>
      <div className="card h-fit bg-primary text-primary-content w-80 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">
            Only for <span className="text-green-500">$5.99</span>{" "}
          </h2>
          <div className="card-actions justify-end mt-3">
            <button className="btn btn-secondary btn-wide">Add to cart</button>
          </div>
        </div>
      </div>
      <ShareButtons book={book} />
    </div>
  );
};

export default PurchaseCard;
