"use client";
import { apiDomain } from "@/utils/requests";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";

type Props = {};

const Progress = (props: Props) => {
  const { id } = useParams();

  // States
  const [ratings, setRatings] = useState([]);
  const [fiveStarsProgressValue, setFiveStarsProgressValue] = useState(0);
  const [fourStarsProgressValue, setFourStarsProgressValue] = useState(0);
  const [threeStarsProgressValue, setThreeStarsProgressValue] = useState(0);
  const [twoStarsProgressValue, setTwoStarsProgressValue] = useState(0);
  const [oneStarsProgressValue, setOneStarProgressValue] = useState(0);

  useEffect(() => {
    const fetchRatings = async () => {
      try {
        const res = await fetch(`${apiDomain}/books/ratings/${id}`);

        if (res.ok) {
          const data = await res.json();
          setRatings(data.ratings);
        }
      } catch (error) {
        console.error(error);
      }
    };
    fetchRatings();
  }, [id]);

  useEffect(() => {
    if (ratings.length !== 0) {
      const counts = [0, 0, 0, 0, 0];

      for (const rating of ratings) {
        counts[rating - 1]++;
      }

      setOneStarProgressValue(counts[0]);
      setTwoStarsProgressValue(counts[1]);
      setThreeStarsProgressValue(counts[2]);
      setFourStarsProgressValue(counts[3]);
      setFiveStarsProgressValue(counts[4]);
    }
  }, [ratings]);

  return (
    <div className="flex flex-col items-center p-1 gap-6">
      <progress
        className="progress w-96"
        value={fiveStarsProgressValue}
        max="100"
      ></progress>
      <progress
        className="progress w-96"
        value={fourStarsProgressValue}
        max="100"
      ></progress>
      <progress
        className="progress w-96"
        value={threeStarsProgressValue}
        max="100"
      ></progress>
      <progress
        className="progress w-96"
        value={twoStarsProgressValue}
        max="100"
      ></progress>
      <progress
        className="progress w-96"
        value={oneStarsProgressValue}
        max="100"
      ></progress>
    </div>
  );
};

export default Progress;
