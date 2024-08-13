"use client";
import React, { useEffect, useRef, useState } from "react";
import RateButton from "./RateButton";
import { apiDomain } from "@/utils/requests";
import { toast } from "react-toastify";
import { useParams } from "next/navigation";
import { getProviders, signIn, useSession } from "next-auth/react";
import { FaGoogle } from "react-icons/fa";

type Props = {};

const ReviewButton = (props: Props) => {
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
        method: "POST",
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
      <dialog id="my_modal_2" ref={myRegisterModelRef} className="modal">
        <div className="modal-box flex flex-col items-center gap-10 w-fit p-10">
          <h3 className="text-center text-lg">Login to write a review 😃</h3>
          {!session &&
            providers &&
            Object.values(providers).map((provider: any, index) => (
              <button
                onClick={() => signIn(provider.id)}
                key={index}
                className="flex items-center bg-base-300 hover:base-200 hover:text-white rounded-md px-3 py-2"
              >
                <FaGoogle className="size-5 mr-2" />
                <span>Login or Register</span>
              </button>
            ))}
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
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
