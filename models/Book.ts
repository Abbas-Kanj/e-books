import { Schema, model, models } from "mongoose";
import User from "./User";

const ReviewSchema = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: User,
      required: [true, "UserId is required"],
    },
    rating: {
      type: Number,
      min: 1,
      max: 5,
      required: [true, "Rating is required"],
    },
    text: {
      type: String,
      required: [true, "Text is required"],
    },
  },
  { timestamps: true }
);

const BookSchema = new Schema(
  {
    title: {
      type: String,
      required: [true, "Title is required"],
    },
    author: {
      type: String,
      required: [true, "Author is required"],
    },
    isbn: {
      type: String,
      required: [true, "ISBN is required"],
    },
    detailedSummary: {
      type: String,
    },
    publisherDescription: {
      type: String,
    },
    isFree: {
      type: Boolean,
    },
    price: {
      type: Number,
    },
    genre: {
      type: Array,
      required: [true, "Category is required"],
    },
    reviews: [ReviewSchema],
    averageRating: {
      type: Number,
    },
    length: {
      type: Number,
      required: [true, "Length is required"],
    },
    publishedDate: {
      type: Date,
      required: [true, "PublishedDate is required"],
    },
    imageUrl: {
      type: String,
    },
    audioUrl: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const Book = models.Book || model("Book", BookSchema);

export default Book;
