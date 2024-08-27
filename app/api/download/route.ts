import { NextRequest, NextResponse } from "next/server";
import { Storage } from "@google-cloud/storage";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const fileName = searchParams.get("fileName");

  if (!fileName) {
    return NextResponse.json(
      { error: "fileName is required" },
      { status: 400 }
    );
  }

  try {
    const storage = new Storage({
      projectId: process.env.GOOGLE_CLOUD_PROJECT_ID,
      credentials: {
        client_email: process.env.GOOGLE_CLOUD_CLIENT_EMAIL,
        private_key: process.env.GOOGLE_CLOUD_PRIVATE_KEY?.replace(
          /\\n/g,
          "\n"
        ),
      },
    });

    const bucketName = "book_collection_1";
    const file = storage.bucket(bucketName).file(fileName);

    const [fileContents] = await file.download();

    const response = new NextResponse(fileContents);
    response.headers.set(
      "Content-Disposition",
      `attachment; filename=${fileName}`
    );
    response.headers.set("Content-Type", "application/octet-stream");

    return response;
  } catch (error) {
    console.error("Error downloading file:", error);
    return NextResponse.json(
      { error: "Error downloading file" },
      { status: 500 }
    );
  }
}
