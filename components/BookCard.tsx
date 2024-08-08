"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import {
  MdBookmarkAdd,
  MdBookmarkAdded,
  MdBookmarkBorder,
  MdBookmarkRemove,
} from "react-icons/md";

type Props = {
  book: Book;
};

const BookCard = ({ book }: Props) => {
  const router = useRouter();
  const { imageUrl, title, _id } = book;
  return (
    <>
      <div className="flex flex-col gap-2 relative text-start">
        <MdBookmarkAdd className="absolute top-0 left-0 size-7 z-20 bg-base-100 rounded-btn p-1 cursor-pointer hover:opacity-60" />
        <Image
          src={imageUrl}
          sizes="100vw"
          height={0}
          width={0}
          alt="Book-Cover"
          className="xl:w-44 lg:w-36 md:w-28 rounded-lg hover:opacity-20 cursor-pointer"
          onClick={() => router.push(`books/${_id}`)}
        />
        <h2 className="font-medium xl:text-base lg:text-base">{title}</h2>
      </div>
      <div className="rounded-full w-1 h-56 self-center bg-current"></div>
    </>
  );
};

export default BookCard;
