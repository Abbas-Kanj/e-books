"use client";
import { apiDomain } from "@/utils/requests";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import SearchDropDown from "./SearchDropDown";

const SearchBox = () => {
  // States
  const [searchField, setSearchField] = useState("");
  const [searchResults, setSearchResults] = useState("");
  const [loading, setLoading] = useState(false);

  // Clear search field after navigating
  const clearSearchField = () => {
    setSearchField("");
    setSearchResults("");
  };
  useEffect(() => {
    setLoading(true);
    const debounceTimer = setTimeout(async () => {
      if (searchField === "") {
        setSearchResults("");
        return;
      }
      try {
        const res = await fetch(`${apiDomain}/search`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            searchedData: searchField.split(" "),
          }),
        });

        if (res.ok) {
          const data = await res.json();
          setLoading(false);
          setSearchResults(data);
        }

        if (res.status === 404) {
          setLoading(false);
          setSearchResults("We couldn't find what you are looking for");
        }
      } catch (error) {
        console.error(error);
        toast.error("Cannot search at this time");
      }
    }, 2000);
    return () => clearTimeout(debounceTimer);
  }, [searchField]);

  return (
    <>
      {searchField !== "" && (
        <SearchDropDown
          searchResults={searchResults}
          clearSearchField={clearSearchField}
          loading={loading}
        />
      )}

      <label className="input input-bordered input-xs md:input-md md:w-96 flex items-center">
        <input
          role="button"
          type="text"
          className="grow placeholder:truncate placeholder:text-wrap placeholder:text-xs "
          placeholder="Search book titles, authors..."
          onChange={(e) => {
            setSearchField(e.target.value);
            setSearchResults("");
          }}
          value={searchField}
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          fill="currentColor"
          className="h-2 w-2 md:h-4 md:w-4 opacity-70"
        >
          <path
            fillRule="evenodd"
            d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
            clipRule="evenodd"
          />
        </svg>
      </label>
    </>
  );
};

export default SearchBox;
