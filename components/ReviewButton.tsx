"use client";
import React, { useEffect, useRef, useState } from "react";
import RateButton from "./RateButton";
import { apiDomain } from "@/utils/requests";
import { toast } from "react-toastify";
import { useParams } from "next/navigation";
import { getProviders, useSession } from "next-auth/react";
import RegisterModal from "./RegisterModal";

const ReviewButton = () => {
  const { id } = useParams();
  const { data: session } = useSession();

  // Refs
  const myReviewModelRef = useRef<HTMLDialogElement>(null);
  const myRegisterModelRef = useRef<HTMLDialogElement>(null);

  // States
  const [text, setText] = useState("");
  const [rating, setRating] = useState(1);
  const [providers, setProviders] = useState(null);

  // Handle review submit function
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (text === "") {
      toast.error("Review Cannot be empty");
      return;
    }
    try {
      const res = await fetch(`${apiDomain}/reviews`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          text: text,
          rating: rating,
          bookId: id,
        }),
      });
      const { message, status } = await res.json();

      if (status === 201) {
        toast.success(message);
        myReviewModelRef.current?.close();
      }
    } catch (error) {
      toast.error("Error adding review");
    }
  };

  // Handle user signin
  useEffect(() => {
    const setAuthProviders = async () => {
      const res = await getProviders();
      setProviders(res);
    };
    setAuthProviders();
  }, []);

  return (
    <>
      <button
        className="btn btn-accent"
        onClick={() =>
          session == null
            ? myRegisterModelRef.current?.showModal()
            : myReviewModelRef.current?.showModal()
        }
      >
        Write a Review
      </button>
      <RegisterModal
        myRegisterModelRef={myRegisterModelRef}
        session={session}
        providers={providers}
      />
      <dialog id="my_modal_3" ref={myReviewModelRef} className="modal">
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
