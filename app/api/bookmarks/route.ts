import connectDB from "@/config/database";
import User from "@/models/User";
import { getSessionUser } from "@/utils/getSessionUser";
import { NextRequest } from "next/server";

// GET /api/bookmarks/:id
export const GET = async (): Promise<Response> => {
  try {
    await connectDB();

    const sessionUser = await getSessionUser();

    if (!sessionUser || !sessionUser.userId) {
      return new Response("Unauthorized", { status: 401 });
    }

    const { userId } = sessionUser;

    // Find user in database
    const user = await User.findOne({ _id: userId }).select("bookmarks -_id");

    if (!user || !user.bookmarks || user.bookmarks.length === 0) {
      return new Response(JSON.stringify({ bookmarks: [] }), { status: 200 });
    }

    return new Response(JSON.stringify({ bookmarks: user.bookmarks }), {
      status: 200,
    });
  } catch (error) {
    console.error(error);
    return new Response("Something went wrong", { status: 500 });
  }
};

// POST /api/bookmarks
export const POST = async (req: NextRequest): Promise<Response> => {
  try {
    await connectDB();

    const { bookId } = await req.json();

    const sessionUser = await getSessionUser();

    if (!sessionUser || !sessionUser.userId) {
      return new Response("User ID is required", { status: 401 });
    }

    const { userId } = sessionUser;

    // Find user in database
    const user = await User.findOne({ _id: userId });

    // Check if book is bookmarked
    let isBookmarked = user.bookmarks.includes(bookId);

    let message;

    if (isBookmarked) {
      // If already bookmarked, remove it
      user.bookmarks.pull(bookId);
      message = "Bookmark removed successfully";
      isBookmarked = false;
    } else {
      // If not bookmarked, add it
      user.bookmarks.push(bookId);
      message = "Bookmark added successfully";
      isBookmarked = true;
    }

    await user.save();

    return new Response(JSON.stringify({ message, isBookmarked }), {
      status: 200,
    });
  } catch (error) {
    console.log(error);
    return new Response("Something went wrong", { status: 500 });
  }
};
