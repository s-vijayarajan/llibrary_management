function BookCard({ book }) {
  return (
    <div className="card">
      <h3>{book.title}</h3>
      <p>{book.author}</p>
      <p>{book.category}</p>
      <p className={book.available ? "green" : "red"}>
        {book.available ? "Available" : "Issued"}
      </p>
    </div>
  );
}

export default BookCard;
