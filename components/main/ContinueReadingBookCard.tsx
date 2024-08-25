import Image from "next/image";
import React from "react";
import cover from "@/assets/Images/rdpd.jpg";

const ContinueReadingBookCard = () => {
  return (
    <div className="flex items-center gap-2 w-[540px]">
      <Image src={cover} alt="Book-Cover" className="size-28 rounded-lg" />
      <div className="flex flex-col text-primary text-start">
        <h2 className="font-semibold">Book Name</h2>
        <h3 className="font-light">Chapter</h3>
        <p className="font-medium text-wrap">
          Description: ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
          lorem ipsum loremipsum lorem ipsum lorem ipsum lorem
        </p>
      </div>
    </div>
  );
};

export default ContinueReadingBookCard;
