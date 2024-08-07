import { Schema, model, models } from "mongoose";

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
    price: {
      type: Number,
      required: [true, "Price is required"],
    },
    category: {
      type: String,
      required: [true, "Category is required"],
    },
    description: {
      type: String,
      required: [true, "Description is required"],
    },
    publishedDate: {
      type: Date,
      required: [true, "PublishedDate is required"],
    },
    imageUrl: {
      type: String,
      required: [true, "Image is required"],
    },
    audioUrl: {
      type: String,
      required: [false, "Audio is required"],
    },
  },
  {
    timestamps: true,
  }
);

const Book = models.Book || model("Book", BookSchema);

export default Book;
