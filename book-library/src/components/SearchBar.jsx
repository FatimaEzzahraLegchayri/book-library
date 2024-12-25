import React, { useEffect, useState } from "react";
import useBookStore from "../store/useBookStore";

const SearchBar = () => {
  const [title, setTitle] = useState(" ");
  const [author, setAuthor] = useState(" ");
  const { fetchBooks } = useBookStore();

  const handleSearch = (e) => {
    e.preventDefault();
    console.log('query author...', title, author);
    fetchBooks(title, author);
  };

  useEffect(() => {
    fetchBooks(title, author);
  }, []);

  return (
    <form onSubmit={handleSearch} className="mb-4 flex flex-col sm:flex-row gap-4 sm:gap-2 justify-center">
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Search by book title ..."
        className="border px-4 py-2 w-full sm:w-64"
      />
      <input
        type="text"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
        placeholder="Search by author..."
        className="border px-4 py-2 w-full sm:w-64"
      />
      <button type="submit" className="bg-blue-500 text-white px-6 py-2 rounded mt-2 sm:mt-0 sm:w-auto">
        Search
      </button>
    </form>
  );
};

export default SearchBar;
