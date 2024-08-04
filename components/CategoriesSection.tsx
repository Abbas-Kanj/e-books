import Link from "next/link";
import React from "react";
import { GiRevolver, GiSwordAltar, GiHearts } from "react-icons/gi";
import {
  MdExplore,
  MdAccountCircle,
  MdBalance,
  MdKeyboardArrowRight,
} from "react-icons/md";
import { BiHappy } from "react-icons/bi";
import { LiaTheaterMasksSolid } from "react-icons/lia";
import { FaGhost, FaFlask, FaPeoplePulling } from "react-icons/fa6";
import { SlMagnifier } from "react-icons/sl";
import { FaRegQuestionCircle, FaFire } from "react-icons/fa";
type Props = {};

function CategoriesSection({}: Props) {
  return (
    <section className="flex flex-col gap-4 w-[560px] mt-4">
      <h1 className="text-xl font-semibold w-fit text-primary">
        Discover Popular Categories
      </h1>
      <div className="grid grid-cols-3 bg-transparent rounded-md p-3 gap-3">
        <Link
          href="/explore/action"
          className="flex items-center gap-2 px-3 py-1 rounded-lg border-current border border-solid cursor-pointer hover:opacity-40 w-fit"
        >
          <GiRevolver className="size-6" />
          <span className=" font-bold">Action</span>
        </Link>
        <Link
          href="/explore/action"
          className="flex items-center gap-2 px-3 py-1 rounded-lg border-current border border-solid cursor-pointer hover:opacity-40 w-fit"
        >
          <MdExplore className="size-6" />
          <span className=" font-bold">Adventure</span>
        </Link>
        <Link
          href="/explore/action"
          className="flex items-center gap-2 px-3 py-1 rounded-lg border-current border border-solid cursor-pointer hover:opacity-40 w-fit"
        >
          <MdAccountCircle className="size-6" />
          <span className=" font-bold">AudioBiography</span>
        </Link>
        <Link
          href="/explore/action"
          className="flex items-center gap-2 px-3 py-1 rounded-lg border-current border border-solid cursor-pointer hover:opacity-40 w-fit"
        >
          <BiHappy className="size-6" />
          <span className=" font-bold">Comedy</span>
        </Link>
        <Link
          href="/explore/action"
          className="flex items-center gap-2 px-3 py-1 rounded-lg border-current border border-solid cursor-pointer hover:opacity-40 w-fit"
        >
          <GiSwordAltar className="size-6" />
          <span className=" font-bold">Crime</span>
        </Link>
        <Link
          href="/explore/action"
          className="flex items-center gap-2 px-3 py-1 rounded-lg border-current border border-solid cursor-pointer hover:opacity-40 w-fit"
        >
          <LiaTheaterMasksSolid className="size-6" />
          <span className=" font-bold">Drama</span>
        </Link>
        <Link
          href="/explore/action"
          className="flex items-center gap-2 px-3 py-1 rounded-lg border-current border border-solid cursor-pointer hover:opacity-40 w-fit"
        >
          <MdBalance className="size-6" />
          <span className=" font-bold">Dystopian</span>
        </Link>
        <Link
          href="/explore/action"
          className="flex items-center gap-2 px-3 py-1 rounded-lg border-current border border-solid cursor-pointer hover:opacity-40 w-fit"
        >
          <FaGhost className="size-6" />
          <span className=" font-bold">Horror</span>
        </Link>
        <Link
          href="/explore/action"
          className="flex items-center gap-2 px-3 py-1 rounded-lg border-current border border-solid cursor-pointer hover:opacity-40 w-fit"
        >
          <SlMagnifier className="size-6" />
          <span className=" font-bold">Mystery</span>
        </Link>
        <Link
          href="/explore/action"
          className="flex items-center gap-2 px-3 py-1 rounded-lg border-current border border-solid cursor-pointer hover:opacity-40 w-fit"
        >
          <GiHearts className="size-6" />
          <span className=" font-bold">Romance</span>
        </Link>
        <Link
          href="/explore/action"
          className="flex items-center gap-2 px-3 py-1 rounded-lg border-current border border-solid cursor-pointer hover:opacity-40 w-fit"
        >
          <FaFlask className="size-6" />
          <span className=" font-bold">Sci-Fi</span>
        </Link>
        <Link
          href="/explore/action"
          className="flex items-center gap-2 px-3 py-1 rounded-lg border-current border border-solid cursor-pointer hover:opacity-40 w-fit"
        >
          <FaRegQuestionCircle className="size-6" />
          <span className=" font-bold">Self-Help</span>
        </Link>
        <Link
          href="/explore/action"
          className="flex items-center gap-2 px-3 py-1 rounded-lg border-current border border-solid cursor-pointer hover:opacity-40 w-fit"
        >
          <FaFire className="size-6" />
          <span className=" font-bold">Thriller</span>
        </Link>
        <Link
          href="/explore/action"
          className="flex items-center gap-2 px-3 py-1 rounded-lg border-current border border-solid cursor-pointer hover:opacity-40 w-fit"
        >
          <FaPeoplePulling className="size-6" />
          <span className=" font-bold">Young Adult</span>
        </Link>
        <Link
          href="/explore"
          className="flex items-center gap-2 px-3 py-1 rounded-lg bg-current w-fit cursor-pointer hover:opacity-40"
        >
          <span className="text-primary font-bold">View all</span>
          <MdKeyboardArrowRight className="text-primary size-6" />
        </Link>
      </div>
    </section>
  );
}

export default CategoriesSection;
