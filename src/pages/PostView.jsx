import React from "react";
import { useParams } from "react-router-dom";

export default function PostView() {
  const { id } = useParams();
  return (
    <div>
      <h2>게시글 상세 페이지</h2>
      <p>게시글 번호 : {id}</p>
    </div>
  );
}
