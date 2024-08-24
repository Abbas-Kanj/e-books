import Book from "@/models/Book";
import { NextRequest } from "next/server";

// GET /api/reviews/:id
export const GET = async (
  req: NextRequest,
  { params }: { params: { id: string } }
) => {
  try {
    const { id } = params;

    const reviews = await Book.findById(id).select("reviews -_id").populate({
      path: "reviews.userId",
      select: "username image -_id", // exclude the id
    });

    if (reviews.length === 0) {
      return new Response(JSON.stringify({ reviews }), { status: 200 });
    }

    return new Response(JSON.stringify(reviews), { status: 200 });
  } catch (error) {
    console.error(error);
  }
};
