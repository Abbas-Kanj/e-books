import { Dispatch, SetStateAction } from "react";

type downloadPdfProps = {
  pdfUrl: string;
  setIsDownloading: Dispatch<SetStateAction<boolean>>;
  setError: Dispatch<SetStateAction<boolean>>;
};

export async function downloadPdf({
  setIsDownloading,
  pdfUrl,
  setError,
}: downloadPdfProps) {
  setIsDownloading(true);

  try {
    const response = await fetch(
      `/api/download?fileName=${encodeURIComponent(pdfUrl)}`
    );
    if (!response.ok) throw new Error("Download failed");
    const blob = await response.blob();
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.style.display = "none";
    a.href = url;
    a.download = pdfUrl;
    document.body.appendChild(a);
    a.click();
    window.URL.revokeObjectURL(url);
  } catch (error) {
    console.error(error);
    setError(true);
  } finally {
    setIsDownloading(false);
  }
}
