import IssueBookForm from "../components/IssueBookForm.jsx";

function IssueBook({ books, members, issues, onIssue, onReturn }) {
  const activeIssues = issues.filter((i) => !i.returnDate);

  function bookTitle(id) {
    return books.find((b) => b.id === id)?.title;
  }
  function memberName(id) {
    return members.find((m) => m.id === id)?.name;
  }

  return (
    <div>
      <h2>Issue Book</h2>
      <IssueBookForm books={books} members={members} onIssue={onIssue} />

      <h2>Return Book</h2>
      {activeIssues.length === 0 ? (
        <p>No books are currently issued.</p>
      ) : (
        <div className="table-wrap">
          <table>
            <thead>
              <tr>
                <th>Book</th>
                <th>Member</th>
                <th>Issued on</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {activeIssues.map((i) => (
                <tr key={i.id}>
                  <td>{bookTitle(i.bookId)}</td>
                  <td>{memberName(i.memberId)}</td>
                  <td>{i.issueDate}</td>
                  <td><button onClick={() => onReturn(i.id)}>Return</button></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default IssueBook;
