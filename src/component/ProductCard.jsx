export default function ProductCard({ name, price }) {
  return (
    <div>
      <span>제품명 : {name}</span>
      <span> / </span>
      <span>가격 : {price.toLocaleString()}</span>
    </div>
  );
}
