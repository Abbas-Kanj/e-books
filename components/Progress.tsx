"use client";
import { apiDomain } from "@/utils/requests";
import { useParams } from "next/navigation";
import React, { useEffect } from "react";

type Props = {};

const Progress = (props: Props) => {
  const { id } = useParams();

  useEffect(() => {
    const fetchAverageRating = async () => {
      try {
        const res = await fetch(`${apiDomain}/books/average/${id}`);

        if (res.ok) {
          const data = await res.json();
          console.log(data);
        }
      } catch (error) {
        console.error(error);
      }
    };
    fetchAverageRating();
  }, [id]);

  return (
    <div className="flex flex-col items-center p-1 gap-6">
      <progress className="progress w-96" value={0} max="100"></progress>
      <progress className="progress w-96" value="10" max="100"></progress>
      <progress className="progress w-96" value="40" max="100"></progress>
      <progress className="progress w-96" value="70" max="100"></progress>
      <progress className="progress w-96" value="100" max="100"></progress>
    </div>
  );
};

export default Progress;
