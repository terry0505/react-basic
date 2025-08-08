import { useEffect, useState } from "react";

export default function GreetingTimer() {
  const [message, setMessage] = useState("안녕하세요!");

  useEffect(() => {
    const interval = setTimeout(() => {
      setMessage("5초 지남 - 인사 종료");
    }, 5000);

    return () => clearTimeout(interval);
  }, []);

  return <div>{message}</div>;
}
