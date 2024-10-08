import User from "@/models/User";
import { getSessionUser } from "@/utils/getSessionUser";
import { NextRequest } from "next/server";

export const dynamic = "force-dynamic";

export const POST = async (req: NextRequest) => {
  try {
    const { bookId } = await req.json();

    const sessionUser = await getSessionUser();

    if (!sessionUser || !sessionUser.userId) {
      return new Response("User ID is required", { status: 401 });
    }

    const { userId } = sessionUser;

    // Find user in database
    const user = await User.findOne({ _id: userId });

    // Check if property is bookmarked
    let isBookmarked = user.bookmarks.includes(bookId);

    return new Response(JSON.stringify({ isBookmarked }), { status: 200 });
  } catch (error) {
    console.log(error);
    return new Response("Something went wrong", { status: 500 });
  }
};
