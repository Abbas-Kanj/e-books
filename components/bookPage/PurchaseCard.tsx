"use client";
import React, { useEffect, useRef, useState } from "react";
import { Book } from "@/types/book";
import ShareButtons from "../ShareButtons";
import { useRouter } from "next/navigation";
import {
  ClientSafeProvider,
  getProviders,
  LiteralUnion,
  useSession,
} from "next-auth/react";
import { BuiltInProviderType } from "next-auth/providers/index";
import RegisterModal from "../RegisterModal";
import { downloadPdf } from "@/utils/downloadPdf";
import { toast } from "react-toastify";

type Props = {
  book: Book;
};

type Providers = Record<
  LiteralUnion<BuiltInProviderType, string>,
  ClientSafeProvider
> | null;

const PurchaseCard = ({ book }: Props) => {
  const { data: session } = useSession();
  const [isDownloading, setIsDownloading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [providers, setProviders] = useState<Providers>(null);
  const myRegisterModelRef = useRef<HTMLDialogElement>(null);
  const router = useRouter();
  const { isFree, price, pdfUrl } = { ...book };

  // Handle user signin
  useEffect(() => {
    const setAuthProviders = async () => {
      const res = await getProviders();
      setProviders(res);
    };
    setAuthProviders();
  }, []);

  useEffect(() => {
    if (error) {
      toast.error("Error downloading...");
    }
  }, [error]);

  return (
    <div className="flex flex-col gap-2 h-[568px]">
      {isFree ? (
        <div className="card bg-primary text-primary-content h-fit w-80 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">
              Free! <s>${price}</s>
            </h2>
            <p className="text-sm">Available for a limited time</p>
            <div className="card-actions justify-end mt-2">
              <button
                className="btn btn-secondary btn-wide font-bold"
                onClick={() =>
                  session == null && myRegisterModelRef.current?.showModal()
                }
              >
                Add to my collection
              </button>

              <button
                className="btn btn-primary border-secondary border-1 border-solid btn-wide font-bold"
                onClick={() =>
                  session == null
                    ? myRegisterModelRef.current?.showModal()
                    : downloadPdf({ pdfUrl, setIsDownloading, setError })
                }
                disabled={isDownloading}
              >
                {isDownloading ? (
                  <>
                    <h1>Downloading...</h1>
                    <span className="loading loading-spinner"></span>
                  </>
                ) : (
                  <h1>Download book</h1>
                )}
              </button>

              <button
                onClick={() =>
                  session == null
                    ? myRegisterModelRef.current?.showModal()
                    : router.push(`${book._id}/read`)
                }
                className="btn btn-primary border-secondary border-1 border-solid btn-wide font-bold"
              >
                Start reading
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="card h-fit bg-primary text-primary-content w-80 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">
              Only for <span className="text-green-500">${price}</span>{" "}
            </h2>
            <div className="card-actions justify-end mt-3">
              <button
                onClick={() =>
                  session == null && myRegisterModelRef.current?.showModal()
                }
                className="btn btn-secondary btn-wide"
                disabled
              >
                Add to cart
              </button>
            </div>
          </div>
        </div>
      )}

      <RegisterModal
        myRegisterModelRef={myRegisterModelRef}
        session={session}
        providers={providers}
        title="Login for full experience 😃"
      />

      <ShareButtons book={book} />
    </div>
  );
};

export default PurchaseCard;
