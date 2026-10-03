import { NavLink } from "react-router-dom";

function Sidebar() {
  return (
    <nav className="sidebar">
      <NavLink to="/" end>Dashboard</NavLink>
      <NavLink to="/books">Books</NavLink>
      <NavLink to="/members">Members</NavLink>
      <NavLink to="/issue">Issue / Return</NavLink>
    </nav>
  );
}

export default Sidebar;
