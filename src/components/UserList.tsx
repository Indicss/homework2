import { useEffect, useState } from "react";
import { type User } from "../types/User";
import UserCard from "./UserCard";

function UserList() {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    fetch("https://gorest.co.in/public/v2/users")
      .then((res) => res.json())
      .then((data: User[]) => setUsers(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="grid gap-5 grid-cols-[repeat(auto-fill,minmax(220px,1fr))]">
      {users.map((user) => (
        <UserCard key={user.id} user={user} />
      ))}
    </div>
  );
}

export default UserList;
