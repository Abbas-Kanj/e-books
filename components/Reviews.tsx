"use client";
import { apiDomain } from "@/utils/requests";
import { useParams } from "next/navigation";
import React, { useEffect } from "react";

type Props = {
  book: Book;
};

const Reviews = ({ book }: Props) => {
  const { id } = useParams();
  useEffect(() => {
    const fetchBookReviews = async (id) => {
      try {
        // handle the case where the domain is not available yet
        if (!apiDomain) {
          return [];
        }
        const res = await fetch(`${apiDomain}/reviews/${id}`);
        if (res.ok) {
          const data = await res.json();
          console.log(data);
        }
      } catch (error) {
        console.error(error);
      }
    };
    fetchBookReviews(id);
  }, [book, id]);

  return <div>Reviews</div>;
};

export default Reviews;
