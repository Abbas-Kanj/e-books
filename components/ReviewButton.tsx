"use client";
import React, { useRef } from "react";
import RateButton from "./RateButton";

type Props = {};

const ReviewButton = (props: Props) => {
  const myModelRef = useRef<HTMLDialogElement>(null);

  return (
    <>
      <button
        className="btn btn-accent"
        onClick={() => myModelRef.current?.showModal()}
      >
        Write a Review
      </button>
      <dialog id="my_modal_3" ref={myModelRef} className="modal">
        <div className="modal-box">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <h3 className="font-bold text-lg mb-4">Write a Review</h3>
          <form action="" className="flex flex-col">
            <div className="flex flex-col gap-4">
              <textarea
                placeholder="Bio"
                className="textarea textarea-bordered textarea-md min-h-44 max-h-44 w-full"
              ></textarea>
              <RateButton />
            </div>
            <button type="submit" className="btn self-end">
              Submit
            </button>
          </form>
        </div>
      </dialog>
    </>
  );
};

export default ReviewButton;
