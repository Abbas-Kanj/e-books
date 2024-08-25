"use client";
import { useState, useEffect } from "react";
import { Document, Page } from "react-pdf";

const PdfReader = () => {
  const pdfUrl = "/mdlb.pdf";
  const [numPages, setNumPages] = useState<number>();
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [pageWidth, setPageWidth] = useState<number>(600); // Default to 600 for SSR

  useEffect(() => {
    // Ensure this runs only on the client-side
    if (typeof window !== "undefined") {
      const width = window.innerWidth < 640 ? window.innerWidth * 0.9 : 600;
      setPageWidth(width);
    }
  }, []);

  function onDocumentLoadSuccess({ numPages }: { numPages: number }): void {
    setNumPages(numPages);
  }

  return (
    <div className="max-w-full p-4">
      <Document
        file={pdfUrl}
        onLoadSuccess={onDocumentLoadSuccess}
        className="flex justify-center"
      >
        <Page
          pageNumber={pageNumber}
          renderTextLayer={false}
          renderAnnotationLayer={false}
          width={pageWidth}
        />
      </Document>
      <div className="text-center mt-4">
        <p className="text-sm sm:text-base">
          Page {pageNumber} of {numPages}
        </p>
        <button
          className="bg-blue-500 text-white py-1 px-3 rounded mt-2"
          onClick={() => setPageNumber(pageNumber + 1)}
        >
          Next page
        </button>
      </div>
    </div>
  );
};

export default PdfReader;
