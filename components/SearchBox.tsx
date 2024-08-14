"use client";
import { apiDomain } from "@/utils/requests";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

const SearchBox = () => {
  // States
  const [searchField, setSearchField] = useState("");

  useEffect(() => {
    const debounceTimer = setTimeout(async () => {
      if (searchField === "") {
        toast.warning("Search field cannot be empty!");
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
          console.log(data);
        }
      } catch (error) {
        console.error(error);
        toast.error("Cannot search at this time");
      }
    }, 3000);
    return () => clearTimeout(debounceTimer);
  }, [searchField]);

  return (
    <label className="input input-bordered flex items-center gap-2">
      <input
        type="text"
        className="grow w-80"
        placeholder="Search book titles, authors, publishers..."
        onChange={(e) => setSearchField(e.target.value)}
      />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 16 16"
        fill="currentColor"
        className="h-4 w-4 opacity-70"
      >
        <path
          fillRule="evenodd"
          d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
          clipRule="evenodd"
        />
      </svg>
    </label>
  );
};

export default SearchBox;
