import { useContext, useState } from "react";
import AuthContext from "../AuthContext";

export default function LoginPage() {
  const [name, setName] = useState("");
  const { user, login } = useContext(AuthContext);

  function handleSubmit(e) {
    e.preventDefault();
    if (!name.trim()) {
      alert("Name is required");
      return;
    }
    login(name);
  }

  return (
    <div style={{ maxWidth: 400, margin: "2rem auto" }}>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: "1rem" }}>
          <div>
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
        </div>
        <button type="submit">Login</button>
      </form>
      {user.isAuth && <p>Welcome, {user.name}!</p>}
    </div>
  );
}
