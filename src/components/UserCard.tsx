import type { User } from "../types/User";

interface UserCardProps {
  user: User;
}

function UserCard({ user }: UserCardProps) {
  const statusColor = user.status === "active" ? "bg-green-500" : "bg-gray-400";

  return (
    <div
      className={`
        ${statusColor}
        p-5
        rounded-xl
        cursor-pointer
        transition
        hover:opacity-70
        break-words
      `}
    >
      <p className="font-bold">ID: {user.id}</p>
      <p className="font-bold">Name: {user.name}</p>
      <p className="font-bold">Email: {user.email}</p>
      <p className="font-bold">Gender: {user.gender}</p>
      <p className="font-bold">Status: {user.status}</p>
    </div>
  );
}

export default UserCard;
