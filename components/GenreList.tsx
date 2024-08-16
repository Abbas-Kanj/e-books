"use client";
import { useRouter } from "next/navigation";
import React from "react";

const genres = [
  // Fiction
  "Adventure",
  "Fantasy",
  "Science Fiction",
  "Dystopian",
  "Horror",
  "Mystery",
  "Thriller",
  "Suspense",
  "Crime",
  "Detective Fiction",
  "Romance",
  "Historical Fiction",
  "Literary Fiction",
  "Magical Realism",
  "Realist Literature",
  "Western",
  "Young Adult (YA)",
  "Children’s Fiction",
  "New Adult",
  "Contemporary",
  "Urban Fiction",
  "Paranormal",
  "Steampunk",
  "Gothic Fiction",
  "Comic/Graphic Novel",
  "Erotica",
  "Tragedy",
  "Drama",
  "Psychological Fiction",
  "Coming-of-Age",
  "Absurdist Fiction",
  "Fairy Tale",
  "Epic Poetry",
  "Mythology",
  "Saga",

  // Non-Fiction
  "Biography",
  "Autobiography",
  "Memoir",
  "Self-Help",
  "Health",
  "Fitness",
  "Wellness",
  "Cooking",
  "True Crime",
  "History",
  "Essay",
  "Travel",
  "Guide/How-to",
  "Humor",
  "Religion",
  "Spirituality",
  "Philosophy",
  "Science",
  "Technology",
  "Politics",
  "Economics",
  "Business",
  "Finance",
  "Education",
  "Sports",
  "Art",
  "Photography",
  "Music",
  "Poetry",
  "Journalism",
  "Criticism",
  "Anthology",
  "Reference",
  "Language",
  "Textbook",

  // Cross-Genre/Other
  "Speculative Fiction",
  "Historical Romance",
  "Science Fantasy",
  "Space Opera",
  "Dark Fantasy",
  "Urban Fantasy",
  "Cyberpunk",
  "Biopunk",
  "Metafiction",
  "Cli-Fi (Climate Fiction)",
  "LGBTQ+ Fiction",
  "Chick Lit",
  "Men's Adventure",
  "Superhero Fiction",
  "Dieselpunk",
  "Solarpunk",
  "Transgressive Fiction",
  "Noir",
  "Post-Apocalyptic",
  "Afrofuturism",
];

type Props = {};

const GenreList = (props: Props) => {
  const router = useRouter();
  return (
    <ul className="flex flex-wrap justify-between gap-2">
      {genres.map((genre, index) => (
        <li
          className="w-[48%] cursor-pointer underline hover:opacity-60 truncate"
          key={index}
          onClick={() => router.push(`/explore/${genre}`)}
        >
          {genre}
        </li>
      ))}
    </ul>
  );
};

export default GenreList;
