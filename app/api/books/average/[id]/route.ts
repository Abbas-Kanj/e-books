import connectDB from "@/config/database";
import Book from "@/models/Book";

// GET /api/books/average/:id
export const GET = async (req, { params }) => {
  try {
    await connectDB();

    const { id } = params;

    const averageRating = await Book.findById(id).select("averageRating -_id");

    return new Response(JSON.stringify({ averageRating }), { status: 200 });
  } catch (error) {
    console.error(error);
    return new Response("Something went wrong", { status: 500 });
  }
};
