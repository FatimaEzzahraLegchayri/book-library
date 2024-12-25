import React from "react";
import SearchBar from "./components/SearchBar";
import BookCard from "./components/BookCard";

const App = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold my-6 text-center">Book Library</h1>
      <SearchBar />
      <BookCard />
      {/* <BookDetails /> */}
    </div>
  );
};

export default App;
