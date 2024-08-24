"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { Suspense } from "react";
import BookmarkButton from "./BookmarkButton";
import bookCover from "@/assets/Images/bookCover.jpg";
import Spinner from "./Spinner";
import { Book } from "@/types/book";

type Props = {
  book: Book;
};

const BookCard = ({ book }: Props) => {
  const router = useRouter();

  const { image, title, _id } = book;

  return (
    <Suspense fallback={<Spinner loading={true} />}>
      <div className="flex flex-col gap-2 relative text-start w-40">
        <BookmarkButton book={book} />
        <Image
          src={image || bookCover}
          sizes="100vw"
          priority={true}
          height={0}
          width={0}
          alt="Book-Cover"
          className="xl:min-w-44 lg:min-w-36 md:w-28 sm:min-w-14 rounded-lg hover:opacity-20 cursor-pointer"
          onClick={() => router.push(`/books/${_id}`)}
        />
        {title && (
          <h2 className="font-medium xl:text-base lg:text-base truncate">
            {title}
          </h2>
        )}
      </div>
    </Suspense>
  );
};

export default BookCard;
