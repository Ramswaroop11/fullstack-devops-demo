import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [name, setName] = useState("");
  const [users, setUsers] = useState([]);

  const API = "http://localhost:8080/api/users";

  const loadUsers = async () => {
    const res = await axios.get(API);
    setUsers(res.data);
  };

  useEffect(() => {
    loadUsers();
  }, []);

  const addUser = async () => {
    await axios.post(API, { name });
    setName("");
    loadUsers();
  };

  return (
    <div style={{ padding: 30 }}>
      <h1>DevOps Demo</h1>

      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter name"
      />

      <button onClick={addUser}>Add</button>

      <ul>
        {users.map((u) => (
          <li key={u.id}>{u.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;