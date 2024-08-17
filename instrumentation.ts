import dbConnnect from "@/dbConnection";

export async function register() {
  try {
    await dbConnnect();
    console.log("🚀 🚀 🚀 Db Connected Successfully 🚀 🚀 🚀");
  } catch (error) {
    console.log("Error connecting to DB");
    console.log(error);
  }
}
