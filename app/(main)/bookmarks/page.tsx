"use client";
import PdfReader from "@/components/PdfReader.client";
import React from "react";
import { polyfillPromiseWithResolvers } from "@/utils/polyfilsResolver";
import "core-js/full/promise/with-resolvers.js";
polyfillPromiseWithResolvers();

const BookmarksPage = () => {
  return (
    <div>
      <PdfReader />
    </div>
  );
};

export default BookmarksPage;
