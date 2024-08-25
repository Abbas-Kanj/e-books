"use client";
import PdfReader from "@/components/PdfReader";
import React, { useEffect } from "react";
import { pdfjs } from "react-pdf";

const BookmarksPage = () => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      pdfjs.GlobalWorkerOptions.workerSrc = new URL(
        "pdfjs-dist/build/pdf.worker.min.mjs",
        import.meta.url
      ).toString();
    }
  }, []); // Runs once on mount
  return (
    <div>
      <PdfReader />
    </div>
  );
};

export default BookmarksPage;
