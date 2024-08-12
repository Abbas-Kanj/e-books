import connectDB from "@/config/database";
import Book from "@/models/Book";

// GET /api/reviews/:id
export const GET = async (req, { params }) => {
  try {
    await connectDB();

    const { id } = params;

    const reviews = await Book.findById(id).select("reviews -_id").populate({
      path: "reviews.userId",
      select: "username image -_id", // exclude the id
    });

    if (reviews.length === 0) return [];

    return new Response(JSON.stringify(reviews), { status: 200 });
  } catch (error) {
    console.error(error);
  }
};
