import React from "react";

const BookDetail = ({ book, onBack }) => {
  console.log("book in detail:", book);

  // Ensure the book object and volumeInfo are available
  if (!book || !book.volumeInfo) {
    return (
      <div className="p-4">
        <button onClick={onBack} className="mb-4 bg-blue-500 text-white px-4 py-2">
          Back
        </button>
        <p>Book details are not available.</p>
      </div>
    );
  }

  const { volumeInfo } = book;

  // Extract ISBN, pageCount, and categories
  const isbn = volumeInfo.industryIdentifiers?.find(id => id.type === "ISBN_13")?.identifier || "Not available";
  const pageCount = volumeInfo.pageCount || "Not available";
  const categories = volumeInfo.categories?.join(", ") || "Not available";

  return (
    <div className="p-4 max-w-screen-sm mx-auto">
      <button onClick={onBack} className="mb-4 bg-blue-500 text-white px-4 py-2 rounded">
        Back
      </button>
      {volumeInfo.imageLinks?.thumbnail && (
        <img
          src={volumeInfo.imageLinks.thumbnail}
          alt={volumeInfo.title || "No title available"}
          className="w-full h-64 object-cover mb-4 rounded-lg"
        />
      )}
      <h1 className="text-2xl sm:text-3xl font-bold">{volumeInfo.title || "No title available"}</h1>
      <p className="text-sm sm:text-base mt-2">Authors: {volumeInfo.authors?.join(", ") || "Unknown authors"}</p>
      <p className="text-sm sm:text-base mt-2">Publisher: {volumeInfo.publisher || "No publisher available"}</p>
      <p className="text-sm sm:text-base mt-2">Published Date: {volumeInfo.publishedDate || "Unknown date"}</p>
      <p className="text-sm sm:text-base mt-2">ISBN: {isbn}</p>
      <p className="text-sm sm:text-base mt-2">Number of Pages: {pageCount}</p>
      <p className="text-sm sm:text-base mt-2">Categories: {categories}</p>
      <p className="mt-4 text-sm sm:text-base">{volumeInfo.description || "No description available"}</p>
    </div>
  );
};

export default BookDetail;
