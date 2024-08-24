import { fetchBookById } from "@/utils/requests";
import Image from "next/image";
import React, { Suspense } from "react";
import PurchaseCard from "@/components/PurchaseCard";
import BookDetails from "@/components/BookDetails";
import MoreFromAuthour from "@/components/MoreFromAuthour";
import RatingsAndReviewsSection from "@/components/RatingsAndReviewsSection";
import bookCover from "@/assets/Images/bookCover.jpg";
import Spinner from "@/components/Spinner";

const BookPage = async ({ params }: { params: { id: string } }) => {
  const book = await fetchBookById(params.id);

  return (
    <>
      <section className="flex justify-evenly w-full p-2 gap-2">
        <Suspense fallback={<Spinner loading={true} />}>
          <Image
            src={book.image || bookCover}
            alt="Book-Cover"
            className="w-64 h-fit rounded-lg"
            sizes="100vw"
            width={0}
            height={0}
            quality={100}
            priority={true}
          />
        </Suspense>
        <Suspense fallback={<Spinner loading={true} />}>
          <BookDetails book={book} />
        </Suspense>
        <Suspense fallback={<Spinner loading={true} />}>
          <PurchaseCard book={book} />
        </Suspense>
      </section>
      <Suspense fallback={<Spinner loading={true} />}>
        <MoreFromAuthour book={book} />
      </Suspense>
      <Suspense fallback={<Spinner loading={true} />}>
        <RatingsAndReviewsSection book={book} />
      </Suspense>
    </>
  );
};

export default BookPage;
