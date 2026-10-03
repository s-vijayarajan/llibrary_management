// Starting data. Later this can come from an API.
export const initialBooks = [
  { id: 1, title: "Clean Code", author: "Robert Martin", category: "Technology", available: true },
  { id: 2, title: "The Alchemist", author: "Paulo Coelho", category: "Fiction", available: true },
  { id: 3, title: "A Brief History of Time", author: "Stephen Hawking", category: "Science", available: true },
  { id: 4, title: "Sapiens", author: "Yuval Noah Harari", category: "History", available: true },
  { id: 5, title: "JavaScript: The Good Parts", author: "Douglas Crockford", category: "Technology", available: true },
  { id: 6, title: "Wings of Fire", author: "A.P.J. Abdul Kalam", category: "Biography", available: true },
];

export const initialMembers = [
  { id: 1, name: "Vijayarajan", email: "vijay@example.com", phone: "9876543210" },
  { id: 2, name: "karthiga", email: "karthiga@example.com", phone: "9876501234" },
  { id: 3, name: "Leo Das", email: "leo@example.com", phone: "9123456780" },
];

// Each record: { id, bookId, memberId, issueDate, returnDate }
export const initialIssues = [];
