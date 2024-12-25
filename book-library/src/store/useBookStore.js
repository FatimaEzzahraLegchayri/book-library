import { create } from "zustand";
import axios from "axios";

const useBookStore = create((set) => ({
  books: [],
//   selectedBook: null,
  error: "",
  fetchBooks: async (title, author) => {
    console.log('query Store', title)
    try {
      const titleQuery = title ? title : '' 
      const authorQuery = author? author : ''
      const response = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=intitle:${titleQuery}+inauthor:${authorQuery}`);
      console.log('response store...', response)
      const bookData = response.data.items;
      if (bookData.length === 0) {
        set({ books: [], error: "No books found." });
      } else {
        set({ books: bookData, error: "" });
      }
    } catch (error) {
      set({ error: "No book match! Please try again." });
    }
  },
//   selectBook: (book) => set({ selectedBook: book }),
}));
export default useBookStore;

// use siteimo for insperation
// copy coller =>{
//   zustand StorageEvent, property list
//   search unput ...
// }