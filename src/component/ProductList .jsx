import ProductCard from "./ProductCard";

export default function ProductList({ products }) {
  return (
    <div>
      {products.map((product) => (
        <ProductCard
          key={product.id}
          name={product.name}
          price={product.price}
        />
      ))}
    </div>
  );
}
