import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      <Link to="/">홈</Link>
      <Link to="/about">소개</Link>
      <Link to="/contact">연락처</Link>
    </div>
  );
}
