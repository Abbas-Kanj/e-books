import React from "react";
import { polyfillPromiseWithResolvers } from "@/utils/polyfilsResolver";
import "core-js/full/promise/with-resolvers.js";
polyfillPromiseWithResolvers();

const BookmarksPage = () => {
  return <div>BookmarksPage</div>;
};

export default BookmarksPage;
