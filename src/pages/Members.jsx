import { useState } from "react";
import MemberTable from "../components/MemberTable.jsx";

function Members({ members }) {
  const [search, setSearch] = useState("");

  const filtered = members.filter((m) =>
    m.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <h2>Members</h2>
      <div className="filters">
        <input
          type="text"
          placeholder="Search member name"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <MemberTable members={filtered} />
    </div>
  );
}

export default Members;
