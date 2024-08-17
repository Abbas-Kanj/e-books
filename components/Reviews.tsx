"use client";
import { apiDomain } from "@/utils/requests";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import ReviewCard from "./ReviewCard";
import Spinner from "./Spinner";

type Props = {
  book: Book;
};

const Reviews = ({ book }: Props) => {
  const { id } = useParams();
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBookReviews = async (id: string) => {
      try {
        // handle the case where the domain is not available yet
        if (!apiDomain) {
          return [];
        }
        const res = await fetch(`${apiDomain}/reviews/${id}`);
        if (res.ok) {
          const data = await res.json();
          setReviews(data.reviews);
        }
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    if (typeof id === "string") {
      fetchBookReviews(id);
    } else {
      console.error("id must be a string");
    }
  }, [id, book]);

  return (
    <section className="container flex flex-col p-4 mt-4">
      <>
        {loading && <Spinner loading={loading} />}
        {!loading && reviews?.length === 0 ? (
          <h1 className="text-xl text-center">No reviews yet...</h1>
        ) : (
          <>
            <h1 className="text-xl font-semibold mb-4">Community Reviews</h1>
            {reviews.map((review, index: React.Key) => (
              <ReviewCard key={index} review={review} />
            ))}
          </>
        )}
      </>
    </section>
  );
};

export default Reviews;
