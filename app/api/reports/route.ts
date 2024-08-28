import Report from "@/models/Report";
import { NextRequest } from "next/server";

// POST /api/reports
export const POST = async (req: NextRequest) => {
  try {
    const message = await req.json();
    const resolved = false;

    await Report.create({ message, resolved });

    return new Response("Report Created", { status: 201 });
  } catch (error) {
    console.error(error);
    return new Response("Something went wrong", { status: 500 });
  }
};
