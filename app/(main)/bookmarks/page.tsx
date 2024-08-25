"use client";
import PdfReader from "@/components/PdfReader";
import React from "react";
import { pdfjs } from "react-pdf";

if (typeof window !== "undefined") {
  pdfjs.GlobalWorkerOptions.workerSrc = new URL(
    "pdfjs-dist/build/pdf.worker.min.mjs",
    import.meta.url
  ).toString();
}

const BookmarksPage = () => {
  return (
    <div>
      <PdfReader />
    </div>
  );
};

export default BookmarksPage;
