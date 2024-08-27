import Book from "@/models/Book";
import { NextRequest } from "next/server";

// GET /api/books/:id/pdf
export const GET = async (
  req: NextRequest,
  { params }: { params: { id: string } }
) => {
  try {
    const { id } = params;

    const book = await Book.findById(id);

    if (!book) {
      return new Response(JSON.stringify({ message: "Book not found" }), {
        status: 404,
      });
    }

    const pdfFileName = await Book.findById(id).select("pdfUrl -_id");

    return new Response(JSON.stringify(pdfFileName), { status: 200 });
  } catch (error) {
    console.error(error);
    return new Response("Something went wrong", { status: 500 });
  }
};
