"use client";
import { useEffect, useState } from "react";
import { pdfjs, Page, Document } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "react-pdf/dist/esm/Page/TextLayer.css";
import { apiDomain, fetchPdfFileName } from "@/utils/requests";
import { useParams, useRouter } from "next/navigation";
import type { PDFDocumentProxy } from "pdfjs-dist";
import Spinner from "@/components/Spinner";

const options = {
  cMapUrl: `https://unpkg.com/pdfjs-dist@${pdfjs.version}/cmaps/`,
};

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

const ReadBookPage = () => {
  const { id } = useParams<{ id: string }>();
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [numPages, setNumPages] = useState<number>();
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [pdfUrl, setPdfUrl] = useState<string | null>(null);

  useEffect(() => {
    const fetchPdf = async () => {
      const pdfFileName = await fetchPdfFileName(id);
      try {
        const response = await fetch(
          `${apiDomain}/download?fileName=${encodeURIComponent(
            pdfFileName.pdfUrl
          )}`
        );
        const blob = await response.blob();
        const url = window.URL.createObjectURL(blob);
        setPdfUrl(url);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    fetchPdf();
  }, []);

  function onDocumentLoadSuccess({ numPages }: PDFDocumentProxy): void {
    setNumPages(numPages);
  }

  const handlePageChange = (delta: number) => {
    setPageNumber((prev) => Math.max(1, Math.min(prev + delta, numPages ?? 1)));
  };

  return (
    <>
      {!pdfUrl && loading && <Spinner loading={loading} />}
      {pdfUrl && !loading && (
        <div className="flex flex-col gap-8">
          <Document
            options={options}
            file={pdfUrl}
            onLoadSuccess={onDocumentLoadSuccess}
            error={
              <div className="flex flex-col gap-5">
                <h1 className="text-2xl mx-auto mt-10 text-error">
                  Error loading pdf 😕
                </h1>
                <button
                  onClick={() => router.refresh()}
                  className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg p-1"
                >
                  Try again
                </button>
              </div>
            }
          >
            <Page
              pageNumber={pageNumber}
              renderTextLayer={false}
              renderAnnotationLayer={false}
              width={window.innerWidth < 640 ? 400 : 700}
            />
          </Document>
          {numPages && (
            <div className="join self-center">
              <button
                className="join-item btn"
                onClick={() => handlePageChange(-1)}
                disabled={pageNumber === 1}
              >
                «
              </button>
              <p className="join-item btn">
                Page {pageNumber} of {numPages}
              </p>
              <button
                className="join-item btn"
                onClick={() => handlePageChange(1)}
                disabled={pageNumber === numPages}
              >
                »
              </button>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default ReadBookPage;
