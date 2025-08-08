import { useState } from "react";

export default function MultiCounter() {
  const [count, setCount] = useState(0);

  const handleAdd = () => setCount(count + 1);
  const handleMinus = () => setCount(count - 1);
  const handleReset = () => setCount(0);

  return (
    <div>
      <p>{count}</p>
      <button onClick={handleAdd}>+1</button>
      <button onClick={handleMinus}>-1</button>
      <button onClick={handleReset}>0으로 초기화</button>
    </div>
  );
}
