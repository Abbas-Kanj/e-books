import PdfReader from "@/components/PdfReader";
import Spinner from "@/components/Spinner";
import { fetchPdfFileName } from "@/utils/requests";
import React, { Suspense } from "react";

const ReadBookPage = async ({ params }: { params: { id: string } }) => {
  const pdfFileName = await fetchPdfFileName(params.id);

  return (
    <>
      <Suspense fallback={<Spinner loading={true} />}>
        <PdfReader pdfFileName={pdfFileName.pdfUrl} />
      </Suspense>
    </>
  );
};

export default ReadBookPage;
