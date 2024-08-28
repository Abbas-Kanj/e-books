"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { Suspense } from "react";
import BookmarkButton from "./BookmarkButton";
import Spinner from "./Spinner";
import { Book } from "@/types/book";

type Props = {
  book: Book;
};

const BookCard = ({ book }: Props) => {
  const router = useRouter();

  const { imageUrl, title, _id } = book;

  return (
    <Suspense fallback={<Spinner loading={true} />}>
      <div className="flex flex-col gap-2 relative text-start w-40">
        <BookmarkButton book={book} />
        <div className="aspect-[2/3] relative w-full">
          <Image
            src={imageUrl}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority={true}
            alt="Book-Cover"
            className="rounded-lg hover:opacity-20 cursor-pointer"
            onClick={() => router.push(`/books/${_id}`)}
          />
        </div>

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
