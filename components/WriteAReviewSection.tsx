"use client";
import React from "react";
import RateButton from "./RateButton";
import Image from "next/image";
import { useSession } from "next-auth/react";
import userImage from "@/assets/Images/userImage.webp";
import ReviewButton from "./ReviewButton";

type Props = {
  book: Book;
};

const WriteAReviewSection = ({ book }: Props) => {
  const { data: session } = useSession();

  const profileImage = session?.user?.image;
  return (
    <section className="flex flex-col items-center w-full">
      <Image
        src={profileImage || userImage}
        alt="profile Image"
        width={50}
        height={50}
        priority={true}
        className="rounded-full mb-4"
      />
      <h1 className="text-2xl font-semibold mb-4">What do you think?</h1>
      <div>
        <ReviewButton book={book} />
      </div>
    </section>
  );
};

export default WriteAReviewSection;
