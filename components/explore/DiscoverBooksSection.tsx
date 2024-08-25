import React from "react";
import GenreSection from "./GenreSection";

type Props = {};

const DiscoverBooksSection = (props: Props) => {
  return (
    <section className="flex flex-col w-3/4 gap-10 mt-4">
      <GenreSection genre="Fiction" />
      <GenreSection genre="Romance" />
      <GenreSection genre="Mystery" />
      <GenreSection genre="Philosophy" />
    </section>
  );
};

export default DiscoverBooksSection;
