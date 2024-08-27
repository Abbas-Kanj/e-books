export const apiDomain = process.env.NEXT_PUBLIC_API_DOMAIN || null;

// Fetch all Books
async function fetchBooks() {
  try {
    // handle the case where the domain is not available yet
    if (!apiDomain) {
      return [];
    }

    const res = await fetch(`${apiDomain}/books`);

    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }
    return res.json();
  } catch (error) {
    console.log(error);
    return [];
  }
}

// Fetch book by Id
async function fetchBookById(id: any) {
  try {
    // handle the case where the domain is not available yet
    if (!apiDomain) {
      return [];
    }

    const res = await fetch(`${apiDomain}/books/${id}`);

    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }
    return res.json();
  } catch (error) {
    console.log(error);
    return [];
  }
}

// Fetch books by Author
async function fetchBooksByAuthor(author: any) {
  try {
    if (!apiDomain) {
      return [];
    }

    const res = await fetch(`${apiDomain}/books/author/${author}`);

    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }

    return res.json();
  } catch (error) {
    console.error(error);
    return [];
  }
}

// Fetch books by genre
async function fetchBooksByGenre(genre: string) {
  try {
    if (!apiDomain) {
      return [];
    }

    const res = await fetch(`${apiDomain}/books/genre/${genre}`);

    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }

    return res.json();
  } catch (error) {
    console.error(error);
    return [];
  }
}

// Add a book review
async function addBookReview(
  text: string,
  rating: number,
  bookId: string | string[]
) {
  try {
    if (!apiDomain) {
      return null;
    }

    const res = await fetch(`${apiDomain}/reviews`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        text: text,
        rating: rating,
        bookId: bookId,
      }),
    });

    return res.json();
  } catch (error) {
    console.error(error);
    return null;
  }
}

// fetch pdfFileName by book id
async function fetchPdfFileName(id: string) {
  try {
    if (!apiDomain) {
      return null;
    }

    const res = await fetch(`${apiDomain}/books/${id}/pdf`);

    if (res.status === 404) {
      return null;
    }
    return res.json();
  } catch (error) {
    console.error;
    return null;
  }
}

export {
  fetchBooks,
  fetchBookById,
  fetchBooksByAuthor,
  fetchBooksByGenre,
  addBookReview,
  fetchPdfFileName,
};
