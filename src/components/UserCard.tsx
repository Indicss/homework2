import type { User } from "../types/User";

interface UserCardProps {
  user: User;
}

function UserCard({ user }: UserCardProps) {
  return (
    <div className={`user-card ${user.status}`}>
      <p>ID: {user.id}</p>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
      <p>Gender: {user.gender}</p>
      <p>Status: {user.status}</p>
    </div>
  );
}

export default UserCard;
