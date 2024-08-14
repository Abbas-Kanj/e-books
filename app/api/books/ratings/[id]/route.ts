import connectDB from "@/config/database";
import Book from "@/models/Book";

// GET /api/books/ratings/:id
export const GET = async (req, { params }) => {
  try {
    await connectDB();

    const { id } = params;

    const book = await Book.findById(id).select("reviews.rating");

    const ratings = book.reviews.map(
      (review: { rating: number }) => review.rating
    );

    return new Response(JSON.stringify({ ratings }), {
      status: 200,
    });
  } catch (error) {
    console.error(error);
    return new Response("Something went wrong", { status: 500 });
  }
};
