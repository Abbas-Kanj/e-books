"use client";
import PdfReader from "@/components/PdfReader";
import React from "react";
import { pdfjs } from "react-pdf";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url
).toString();

const BookmarksPage = () => {
  // useEffect(() => {
  //   const fetchUserBookmarks = async () => {
  //     try {
  //       const res = await fetch(`${apiDomain}/bookmarks`);
  //       if (res.ok) {
  //         const data = await res.json();
  //         console.log(data.bookmarks);
  //       }
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };
  //   fetchUserBookmarks();
  // }, []);

  return (
    <div>
      <PdfReader />
    </div>
  );
};

export default BookmarksPage;
