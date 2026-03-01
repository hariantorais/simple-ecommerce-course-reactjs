import { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../AuthContext";

export default function Navbar() {
  const { user, logout } = useContext(AuthContext);
  return (
    <nav style={{ flexDirection: "row", display: "flex", gap: "1rem" }}>
      <div style={{ gap: "1rem", display: "flex" }}>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </div>
      <div style={{ gap: "1rem", display: "flex", marginLeft: "auto" }}>
        {!user.isAuth ? (
          <Link to="/login">Login</Link>
        ) : (
          <button onClick={logout}>Logout</button>
        )}
      </div>
    </nav>
  );
}
