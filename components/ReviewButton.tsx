"use client";
import React, { useRef, useState } from "react";
import RateButton from "./RateButton";
import { apiDomain } from "@/utils/requests";
import { toast } from "react-toastify";

type Props = {
  book: Book;
};

const ReviewButton = ({ book }: Props) => {
  const myModelRef = useRef<HTMLDialogElement>(null);

  const [text, setText] = useState("");
  const [rating, setRating] = useState(1);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (text === "") {
      toast.error("Review Cannot be empty");
      return;
    }
    try {
      const res = await fetch(`${apiDomain}/reviews`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          text: text,
          rating: rating,
          bookId: book._id,
        }),
      });
      const { message, status } = await res.json();

      if (status === 201) {
        toast.success(message);
        myModelRef.current?.close();
      }
    } catch (error) {
      toast.error("Error adding review");
    }
  };

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
          <form onSubmit={handleSubmit} className="flex flex-col">
            <div className="flex flex-col gap-4">
              <textarea
                placeholder="I recommend this book!"
                className="textarea textarea-bordered textarea-md min-h-44 max-h-44 w-full"
                value={text}
                onChange={(e) => setText(e.target.value)}
              ></textarea>
              <RateButton setRating={setRating} />
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
