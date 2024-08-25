import React from "react";
import GenreList from "./GenreList";

const BrowseSection = () => {
  return (
    <section className="w-1/4 flex flex-col gap-4 items-start bg-base-300 p-4 rounded-lg">
      <h1 className="text-xl font-semibold w-fit text-primary">Browse</h1>
      <GenreList />
    </section>
  );
};

export default BrowseSection;
