import BrowseSection from "@/components/explore/BrowseSection";
import DiscoverBooksSection from "@/components/explore/DiscoverBooksSection";
import React from "react";

const ExplorePage = () => {
  return (
    <main className="flex flex-col gap-4 w-full items-start p-4">
      <h1 className="text-2xl font-semibold w-fit text-primary">Genres</h1>
      <div className="flex w-full px-2 gap-16">
        <DiscoverBooksSection />
        <BrowseSection />
      </div>
    </main>
  );
};

export default ExplorePage;
