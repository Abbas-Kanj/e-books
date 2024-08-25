import { useState } from "react";
import { Document, Page } from "react-pdf";

export default function PdfReader() {
  const pdfUrl = "/mdlb.pdf";
  const [numPages, setNumPages] = useState<number>();
  const [pageNumber, setPageNumber] = useState<number>(1);

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
          width={window.innerWidth < 640 ? window.innerWidth * 0.9 : 600}
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
}
