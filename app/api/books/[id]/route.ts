import Book from "@/models/Book";
import { NextRequest } from "next/server";

// GET /api/books/:id
export const GET = async (
  req: NextRequest,
  { params }: { params: { id: string } }
) => {
    const { id } = params;

    const book = await Book.findById(id);

    if (!book) return new Response("Book not found", { status: 404 });

    return new Response(JSON.stringify(book), { status: 200 });
  } catch (error) {
    console.log(error);
    return new Response("Something went wrong", { status: 500 });
  }
};
