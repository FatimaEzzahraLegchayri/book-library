import React, { useState } from "react";
import useBookStore from "../store/useBookStore";
import BookDetail from "./BookDetails";

const BookCard = () => {
  const { books, error } = useBookStore();
  const [selectedBook, setSelectedBook] = useState(null);

  if (error) {
    return <p className="text-red-500 text-center m-9">{error}</p>;
  }

  return (
    <div className="p-4">
      {selectedBook ? (
        // Render BookDetail if a book is selected
        <BookDetail book={selectedBook} onBack={() => setSelectedBook(null)} />
      ) : (
        // Render book cards in a responsive grid layout
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {books.length > 0 ? (
            books.map((book) => (
              <div
                key={book.id}
                onClick={() => setSelectedBook(book)}
                className="border p-4 cursor-pointer hover:shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105"
              >
                {book.volumeInfo.imageLinks && (
                  <img
                    src={book.volumeInfo.imageLinks.thumbnail}
                    alt={book.volumeInfo.title}
                    className="w-full h-48 object-cover mb-2"
                  />
                )}
                <h2 className="font-bold text-lg md:text-xl">{book.volumeInfo.title}</h2>
                <p className="text-sm text-gray-600">{book.volumeInfo.authors?.join(", ")}</p>
                <p className="text-sm text-gray-600">{book.volumeInfo.publisher}</p>
              </div>
            ))
          ) : (
            <p>No books found</p>
          )}
        </div>
      )}
    </div>
  );
};

export default BookCard;
