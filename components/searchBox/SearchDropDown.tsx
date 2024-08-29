"use client";
import Image from "next/image";
import React from "react";
import bookCover from "@/assets/Images/bookCover.jpg";
import { useRouter } from "next/navigation";

interface searchResultItem {
  imageUrl: string;
  author: string;
  title: string;
  _id: string;
}

type Props = {
  searchResults: string | searchResultItem[];
  clearSearchField: () => void;
  loading: boolean;
};

const SearchDropDown = ({
  searchResults,
  clearSearchField,
  loading,
}: Props) => {
  const router = useRouter();

  return (
    <div className="dropdown dropdown-open">
      <ul
        tabIndex={0}
        className="dropdown-content menu bg-base-300 overflow-y-auto overflow-x-hidden
        bg-opacity-90 rounded-box top-10 z-20 w-96 p-2 shadow max-h-96 block"
      >
        {/* Display loading when waiting for search results */}
        {loading && (
          <li className="py-6">
            <span className="loading loading-bars loading-lg mx-auto"></span>
          </li>
        )}

        {/* check if no results found */}
        {typeof searchResults === "string" &&
          searchResults !== "" &&
          !loading && (
            <li className="p-2 text-base font-semibold text-error text-center animate-fade">
              {searchResults} <span className="text-4xl self-center">😕</span>
            </li>
          )}

        {/* Check if search results is an array */}
        {Array.isArray(searchResults) &&
          !loading &&
          searchResults.map((result) => (
            <li key={result._id} className="animate-fade">
              <a
                onClick={() => {
                  router.push(`/books/${result._id}`);
                  clearSearchField();
                }}
                className="flex gap-10"
              >
                <Image
                  src={result.imageUrl || bookCover}
                  alt="book cover"
                  width={40}
                  height={40}
                />
                <div className="flex flex-col gap-2">
                  <h4 className="font-semibold text-lg text-clip text-primary truncate">
                    {result.title}
                  </h4>
                  <h3 className="">{result.author}</h3>
                </div>
              </a>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default SearchDropDown;
