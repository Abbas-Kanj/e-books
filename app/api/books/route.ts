import connectDB from "@/config/database";
import Book from "@/models/Book";
import { getSessionUser } from "@/utils/getSessionUser";

// GET /api/books
export const GET = async () => {
  try {
    await connectDB();

    // const sessionUser = await getSessionUser();

    // if (!sessionUser || !sessionUser.userId) {
    //   return new Response("User ID is required", { status: 401 });
    // }
    const books = await Book.find({});

    return new Response(JSON.stringify(books), { status: 200 });
  } catch (error) {
    console.log(error);
    return new Response("Something went wrong", { status: 500 });
  }
};
