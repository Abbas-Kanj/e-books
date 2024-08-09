import React from "react";

type Props = {};

const PurchaseCard = (props: Props) => {
  return (
    <div className="card bg-base-300 h-fit w-96 shadow-xl">
      <div className="card-body">
        <h2 className="card-title">Card title!</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default PurchaseCard;
