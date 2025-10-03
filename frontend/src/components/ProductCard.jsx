export default function ProductCard({ product }) {
  return (
    <div className="border rounded-xl shadow-sm bg-white p-4 hover:shadow-lg transition">
      <img src={product.image} alt={product.name} className="w-full h-48 object-cover rounded-md" />
      <h2 className="mt-3 text-lg font-semibold">{product.name}</h2>
      <p className="text-gray-600 text-sm">{product.description}</p>
      <div className="flex justify-between items-center mt-3">
        <span className="text-blue-600 font-bold">₹{product.price}</span>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
          Add to Cart
        </button>
      </div>
    </div>
  );
}
