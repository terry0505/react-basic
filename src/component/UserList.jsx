import UserCard from "./UserCard";

export default function UserList() {
  const users = [
    { id: 1, name: "박하나", age: 29 },
    { id: 2, name: "오테리", age: 36 }
  ];
  return (
    <div>
      {users.map((user) => (
        <UserCard key={user.id} name={user.name} age={user.age} />
      ))}
    </div>
  );
}
