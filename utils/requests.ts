const apiDomain = process.env.NEXT_PUBLIC_API_DOMAIN || null;

// Fetch all Books
async function fetchBooks() {
  try {
    // handle the case where the domain is not available yet
    if (!apiDomain) {
      return [];
    }

    const res = await fetch(`${apiDomain}/books`, { cache: "no-store" });

    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }
    return res.json();
  } catch (error) {
    console.log(error);
    return [];
  }
}

export { fetchBooks };
