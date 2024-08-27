import Image from "next/image";
import React from "react";
import cover from "@/assets/Images/rdpd.jpg";

const ContinueReadingBookCard = () => {
  return (
    <div className="flex items-center gap-2 relative">
      <Image
        src={cover}
        width={100}
        height={100}
        alt="Book-Cover"
        priority={true}
        className="rounded-lg"
      />
      <div className="flex flex-col text-primary text-start">
        <h2 className="font-semibold">Book Name</h2>
        <h3 className="font-light">Chapter</h3>
        <h4 className="font-medium text-wrap">
          Description: Lorem ipsum, dolor
        </h4>
      </div>
    </div>
  );
};

export default ContinueReadingBookCard;
