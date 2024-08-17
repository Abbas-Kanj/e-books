"use client";
import React from "react";
import Image from "next/image";
import { useSession } from "next-auth/react";
import userImage from "@/assets/Images/userImage.webp";
import ReviewButton from "./ReviewButton";

const WriteAReviewSection = () => {
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
        <ReviewButton />
      </div>
    </section>
  );
};

export default WriteAReviewSection;
