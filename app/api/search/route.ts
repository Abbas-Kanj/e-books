import connectDB from "@/config/database";
import Book from "@/models/Book";
import { NextRequest } from "next/server";

// POST /api/search
export const POST = async (req: NextRequest) => {
  try {
    await connectDB();

    const { searchedData } = await req.json();

    // handle if search field is empty
    if (searchedData.length === 0) {
      return new Response("Search Field is empty", { status: 400 });
    }

    let results = [];

    // the 'i' flag makes the search case insensitive
    const regExPattern = searchedData.map(
      (key: string | RegExp) => new RegExp(key, "i")
    );

    results = await Book.find({
      $or: [
        { title: { $in: regExPattern } },
        { author: { $in: regExPattern } },
      ],
    }).select("_id imageUrl author title");

    if (results.length === 0) {
      return new Response(
        JSON.stringify({
          message: "We couldn't find what you are looking for",
        }),
        {
          status: 404,
        }
      );
    }

    return new Response(JSON.stringify(results), { status: 200 });
  } catch (error) {
    console.error(error);
    return new Response("Something went wrong", { status: 500 });
  }
};
