export default function UserCard({ name, age }) {
  return (
    <div style={{ border: "1px solid #ccc", margin: "8px", padding: "12px" }}>
      <p>내 이름은 {name} 입니다.</p>
      <p>내 나이는 {age} 세 입니다.</p>
    </div>
  );
}
