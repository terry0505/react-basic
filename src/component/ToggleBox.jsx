import React from "react";
import useToggle from "../hooks/useToggle";

export default function ToggleBox() {
  const [isVisible, toggleVisible] = useToggle(false);
  return (
    <div>
      <button onClick={toggleVisible}>{isVisible ? "숨기기" : "보이기"}</button>

      {isVisible && <div>이 박스는 보였다가 숨겨질 수 있어요!</div>}
    </div>
  );
}
