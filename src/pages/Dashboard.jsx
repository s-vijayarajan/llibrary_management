function Dashboard({ books, members, issues }) {
  const issuedNow = issues.filter((i) => !i.returnDate).length;

  return (
    <div>
      <h2>Dashboard</h2>
      <div className="stats">
        <div className="card"><h3>{books.length}</h3><p>Total books</p></div>
        <div className="card"><h3>{members.length}</h3><p>Members</p></div>
        <div className="card"><h3>{issuedNow}</h3><p>Currently issued</p></div>
        <div className="card"><h3>{books.length - issuedNow}</h3><p>Available</p></div>
      </div>
    </div>
  );
}

export default Dashboard;
