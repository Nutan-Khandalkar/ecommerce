import ProductCard from "../components/ProductCard";

const dummyProducts = [
  { id: 1, name: "Laptop", description: "Powerful performance", price: 55000, image: "https://via.placeholder.com/150" },
  { id: 2, name: "Phone", description: "Latest smartphone", price: 25000, image: "https://via.placeholder.com/150" },
];

export default function Home() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {dummyProducts.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </div>
  );
}
