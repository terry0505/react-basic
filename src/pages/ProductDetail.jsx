import React from "react";
import { useParams } from "react-router-dom";

export default function ProductDetail() {
  const { id } = useParams();
  return (
    <div>
      <p>상품 상세 페이지</p>
      <p>상품 id : {id}</p>
    </div>
  );
}
