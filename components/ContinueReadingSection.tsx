import React from "react";
import ContinueReadingBookCard from "./ContinueReadingBookCard";

type Props = {};

function ContinueReadingSection({}: Props) {
  return (
    <section className="flex flex-col gap-4 mt-4">
      <h1 className="text-xl font-semibold w-fit text-primary">
        Continue Reading...
      </h1>
      <div className="flex flex-col bg-current rounded-md p-3 gap-2">
        <ContinueReadingBookCard />
        <div className="rounded-full w-72 h-0.5 self-center bg-base-200"></div>
        <ContinueReadingBookCard />
        <div className="rounded-full w-72 h-0.5 self-center bg-base-200"></div>
        <ContinueReadingBookCard />
      </div>
    </section>
  );
}

export default ContinueReadingSection;
