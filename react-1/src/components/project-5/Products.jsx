export function Products({ products }) {
  return (
    <div className="products-container">
      {products.map((product) => {
        return (
          <div className="product" key={product.id}>
            <img src={product.images[0]} />
            <p>{product.title}</p>
          </div>
        );
      })}
    </div>
  );
}
