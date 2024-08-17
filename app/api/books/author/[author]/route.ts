import connectDB from "@/config/database";
import Book from "@/models/Book";
import { NextRequest } from "next/server";

// GET /api/books/author
export const GET = async (
  req: NextRequest,
  { params }: { params: { author: string } }
) => {
  try {
    await connectDB();

    const { author } = params;

    const authourBooks = await Book.find({ author: author })
      .limit(6)
      .select("title author price isFree imageUrl")
      // lean() is used for better performance as it returns plain JavaScript
      // objects instead of full Mongoose documents.
      .lean();

    if (authourBooks.length === 0 || authourBooks.length === 1) {
      return new Response(JSON.stringify([]), { status: 200 });
    }

    return new Response(JSON.stringify(authourBooks), { status: 200 });
  } catch (error) {
    console.error("Error fetching author books", error);
    return new Response("Something went wrong", { status: 500 });
  }
};
