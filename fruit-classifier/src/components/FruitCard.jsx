export default function FruitCard({ fruit }) {
  if (!fruit) return <p>Please select a fruit.</p>;

  return (
    <div className="fruit-card">
      <h2>{fruit.name}</h2>
      <p>
        <strong>Type:</strong> {fruit.type}
      </p>
      <p>
        <strong>Color:</strong> {fruit.color}
      </p>
      <p>{fruit.description}</p>
    </div>
  );
}
