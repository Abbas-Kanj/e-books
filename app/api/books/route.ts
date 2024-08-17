import connectDB from "@/config/database";
import Book from "@/models/Book";

// GET /api/books
export const GET = async () => {
  try {
    const books = await Book.find({});

    return new Response(JSON.stringify(books), { status: 200 });
  } catch (error) {
    console.log(error);
    return new Response("Something went wrong", { status: 500 });
  }
};
