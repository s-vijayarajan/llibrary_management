import { useState } from "react";

function IssueBookForm({ books, members, onIssue }) {
  const [bookId, setBookId] = useState("");
  const [memberId, setMemberId] = useState("");
  const [message, setMessage] = useState("");

  const availableBooks = books.filter((b) => b.available);

  function handleSubmit(e) {
    e.preventDefault();
    if (!bookId || !memberId) {
      setMessage("Please select a book and a member.");
      return;
    }
    onIssue(Number(bookId), Number(memberId));
    setMessage("Book issued successfully.");
    setBookId("");
    setMemberId("");
  }

  return (
    <form onSubmit={handleSubmit} className="form">
      <label>Book</label>
      <select value={bookId} onChange={(e) => setBookId(e.target.value)}>
        <option value="">-- Select book --</option>
        {availableBooks.map((b) => (
          <option key={b.id} value={b.id}>{b.title}</option>
        ))}
      </select>

      <label>Member</label>
      <select value={memberId} onChange={(e) => setMemberId(e.target.value)}>
        <option value="">-- Select member --</option>
        {members.map((m) => (
          <option key={m.id} value={m.id}>{m.name}</option>
        ))}
      </select>

      <button type="submit">Issue Book</button>
      {message && <p>{message}</p>}
    </form>
  );
}

export default IssueBookForm;
