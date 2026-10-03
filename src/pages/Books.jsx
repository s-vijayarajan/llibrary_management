import { useState } from "react";
import BookTable from "../components/BookTable.jsx";
import BookCard from "../components/BookCard.jsx";

function Books({ books }) {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [view, setView] = useState("table");

  // unique category names for the dropdown
  const categories = ["All", ...new Set(books.map((b) => b.category))];

  const filteredBooks = books.filter((b) => {
    const text = search.toLowerCase();
    const matchSearch =
      b.title.toLowerCase().includes(text) || b.author.toLowerCase().includes(text);
    const matchCategory = category === "All" || b.category === category;
    return matchSearch && matchCategory;
  });

  return (
    <div>
      <h2>Books</h2>

      <div className="filters">
        <input
          type="text"
          placeholder="Search by title or author"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          {categories.map((c) => (
            <option key={c} value={c}>{c}</option>
          ))}
        </select>
        <button onClick={() => setView(view === "table" ? "cards" : "table")}>
          {view === "table" ? "Card view" : "Table view"}
        </button>
      </div>

      {view === "table" ? (
        <BookTable books={filteredBooks} />
      ) : (
        <div className="grid">
          {filteredBooks.map((b) => (
            <BookCard key={b.id} book={b} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Books;
