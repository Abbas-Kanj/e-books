import connectDB from "@/config/database";
import Book from "@/models/Book";
import { NextRequest } from "next/server";

// GET /api/books/genre/:genre
export const GET = async (
  req: NextRequest,
  { params }: { params: { genre: string } }
): Promise<Response> => {
  try {
    await connectDB();

    const { genre } = params;

    const booksByGenre = await Book.find({ genre: genre })
      .limit(5)
      .select("_id imageUrl")
      .lean();

    if (booksByGenre.length === 0) {
      return new Response(JSON.stringify({ booksByGenre }), { status: 200 });
    }

    return new Response(JSON.stringify(booksByGenre), { status: 200 });
  } catch (error) {
    console.error(error);
    return new Response("Something went wrong", { status: 500 });
  }
};
