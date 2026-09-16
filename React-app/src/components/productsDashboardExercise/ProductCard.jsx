function ProductCard({ product, onClick }) {
  return (
    <div className="product-card">
      <h4>{product.name}</h4>
      <h4> {product.price} </h4>
      <h4> {product.inStock ? "🟢 In Stock" : "🔴 Out of Stock"}</h4>
      <h4> {product.inStock && "🔥 Available to order"} </h4>
      <button onClick={() => onClick(product.name)}>buy</button>
    </div>
  );
}

export default ProductCard;
