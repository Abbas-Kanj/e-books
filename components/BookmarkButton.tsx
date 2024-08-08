"use client";
import { useSession } from "next-auth/react";
import React, { useEffect, useState } from "react";
import { MdBookmarkAdd, MdBookmarkRemove } from "react-icons/md";

type Props = {
  book: any;
};

const BookmarkButton = ({ book }: Props) => {
  const { data: session } = useSession();

  const userId = session?.user?.id;

  const handleClick = async () => {
    try {
      const res = await fetch("/api/bookmarks", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          bookId: book._id,
        }),
      });
      if (res.status === 200) {
        console.log("ok");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <MdBookmarkAdd
      className="absolute top-0 left-0 size-7 z-20 bg-base-100 rounded-btn p-1 cursor-pointer hover:opacity-60"
      onClick={handleClick}
    />
  );
};

export default BookmarkButton;
