import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Sidebar from "./components/Sidebar.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import Books from "./pages/Books.jsx";
import Members from "./pages/Members.jsx";
import IssueBook from "./pages/IssueBook.jsx";
import { initialBooks, initialMembers, initialIssues } from "./data.js";

// read saved data from the browser (if any)
function load(key, fallback) {
  const saved = localStorage.getItem(key);
  return saved ? JSON.parse(saved) : fallback;
}

function App() {
  const [books, setBooks] = useState(() => load("books", initialBooks));
  const [members] = useState(() => load("members", initialMembers));
  const [issues, setIssues] = useState(() => load("issues", initialIssues));

  // save to the browser whenever data changes
  useEffect(() => {
    localStorage.setItem("books", JSON.stringify(books));
    localStorage.setItem("issues", JSON.stringify(issues));
    localStorage.setItem("members", JSON.stringify(members));
  }, [books, issues, members]);

  function issueBook(bookId, memberId) {
    const today = new Date().toISOString().slice(0, 10);
    setIssues([...issues, { id: Date.now(), bookId, memberId, issueDate: today, returnDate: null }]);
    setBooks(books.map((b) => (b.id === bookId ? { ...b, available: false } : b)));
  }

  function returnBook(issueId) {
    const today = new Date().toISOString().slice(0, 10);
    const issue = issues.find((i) => i.id === issueId);
    setIssues(issues.map((i) => (i.id === issueId ? { ...i, returnDate: today } : i)));
    setBooks(books.map((b) => (b.id === issue.bookId ? { ...b, available: true } : b)));
  }

  return (
    <div>
      <Navbar />
      <div className="layout">
        <Sidebar />
        <main className="content">
          <Routes>
            <Route path="/" element={<Dashboard books={books} members={members} issues={issues} />} />
            <Route path="/books" element={<Books books={books} />} />
            <Route path="/members" element={<Members members={members} />} />
            <Route
              path="/issue"
              element={
                <IssueBook
                  books={books}
                  members={members}
                  issues={issues}
                  onIssue={issueBook}
                  onReturn={returnBook}
                />
              }
            />
          </Routes>
        </main>
      </div>
    </div>
  );
}

export default App;
