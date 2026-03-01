import { useContext } from "react";
import AuthContext from "../AuthContext";

export default function AboutPage() {
  const { user } = useContext(AuthContext);
  return (
    <div>
      <h1>About Page</h1>
      Name : {user.name || "Guest"}
    </div>
  );
}
