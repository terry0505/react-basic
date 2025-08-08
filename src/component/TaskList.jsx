export default function TaskList({ tasks }) {
  return (
    <div>
      {tasks.length === 0 ? (
        <p>할 일이 없습니다.</p>
      ) : (
        <ul>
          {tasks.map((task, index) => (
            <li key={index}>{task}</li>
          ))}
        </ul>
      )}
    </div>
  );
}
