import Book from "@/models/Book";
import User from "@/models/User";
import { getSessionUser } from "@/utils/getSessionUser";
import { NextRequest } from "next/server";

// PUT /api/reviews
export const PUT = async (req: NextRequest) => {
  try {
    const sessionUser = await getSessionUser();

    if (!sessionUser || !sessionUser.userId) {
      return new Response("User ID is required", { status: 401 });
    }

    const { userId } = sessionUser;

    // Find user in database
    const user = await User.findOne({ _id: userId });

    const { bookId, rating, text } = await req.json();

    // Find book in database
    const book = await Book.findById(bookId);

    const review = {
      userId: userId,
      rating: rating,
      text: text,
    };

    // Update average rating
    // reduce() reduces an array to a single value

    let totalRatings = rating;

    if (book.reviews.length !== 0) {
      totalRatings = book.reviews.reduce(
        (sum: number, review: { rating: number }) => sum + review.rating,
        0
      );
    }

    // Update book data
    const updatedBook = await Book.findByIdAndUpdate(
      bookId,
      {
        $push: { reviews: review },
        $set: { averageRating: totalRatings / book.reviews.length },
      },
      {
        new: true,
        runValidators: true,
      }
    );

    // Update user data
    await User.findByIdAndUpdate(userId, {
      $push: {
        reviews: updatedBook.reviews[updatedBook.reviews.length - 1]._id,
      },
    });

    return new Response(
      JSON.stringify({ message: "Review added successfully", status: 201 })
    );
  } catch (error) {
    console.error(error);
    return new Response(
      JSON.stringify({ message: "Something went wrong", status: 500 })
    );
  }
};
