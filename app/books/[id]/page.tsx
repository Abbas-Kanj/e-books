"use client";
import { fetchBookById } from "@/utils/requests";
import Image from "next/image";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import PurchaseCard from "@/components/PurchaseCard";
import BookDetails from "@/components/BookDetails";
import MoreFromAuthour from "@/components/MoreFromAuthour";
import Spinner from "@/components/Spinner";
import RatingsAndReviewsSection from "@/components/RatingsAndReviewsSection";
import bookCover from "@/assets/Images/bookCover.jpg";

const BookPage = () => {
  const { id } = useParams();
  const [book, setBook] = useState<Book | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBookData = async () => {
      if (!id) return;
      try {
        const res = await fetchBookById(id);
        setBook(res);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    if (book === null) {
      fetchBookData();
    }
  }, [id, book]);

  return (
    <>
      {loading && <Spinner loading={loading} />}
      {!loading && book && (
        <>
          <section className="flex justify-evenly w-full p-2 gap-2">
            <Image
              src={book.imageUrl || bookCover}
              alt="Book-Cover"
              className="w-64 h-fit rounded-lg"
              sizes="100vw"
              width={0}
              height={0}
              quality={100}
              priority={true}
            />
            <BookDetails book={book} />
            <PurchaseCard book={book} />
          </section>
          <MoreFromAuthour book={book} />
          <RatingsAndReviewsSection book={book} />
        </>
      )}
    </>
  );
};

export default BookPage;
