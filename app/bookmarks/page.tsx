"use client";
import { apiDomain } from "@/utils/requests";
import React, { useEffect } from "react";

type Props = {};

function BookmarksPage({}: Props) {
  useEffect(() => {
    const fetchUserBookmarks = async () => {
      try {
        const res = await fetch(`${apiDomain}/bookmarks`);
        if (res.ok) {
          const data = await res.json();
          console.log(data.bookmarks);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchUserBookmarks();
  }, []);

  return <div>BookmarksPage</div>;
}

export default BookmarksPage;
