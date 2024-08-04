"use client";
import Image from "next/image";
import React from "react";
import cover from "@/assets/Images/rdpd.jpg";
import {
  MdBookmarkAdd,
  MdBookmarkAdded,
  MdBookmarkBorder,
  MdBookmarkRemove,
} from "react-icons/md";
type Props = {};

function BookCard({}: Props) {
  return (
    <div className="flex flex-col gap-2 relative text-start">
      <MdBookmarkAdd className="absolute top-0 left-0 size-7 z-20 bg-base-100 rounded-btn p-1 cursor-pointer hover:opacity-60" />
      <Image
        src={cover}
        alt="Book-Cover"
        className="xl:w-44 lg:w-36 md:w-28 rounded-lg hover:opacity-20 cursor-pointer"
      />
      <h2 className="font-medium xl:text-base lg:text-base">
        Rich Dad Poor Dad
      </h2>
    </div>
  );
}

export default BookCard;
