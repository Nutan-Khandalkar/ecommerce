import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md px-6 py-3 flex justify-between items-center">
      <h1 className="text-2xl font-bold text-blue-600">ShopMate</h1>
      <div className="flex gap-6">
        <Link to="/" className="hover:text-blue-600">Home</Link>
        <Link to="/cart" className="hover:text-blue-600">Cart</Link>
        <Link to="/login" className="hover:text-blue-600">Login</Link>
      </div>
    </nav>
  );
}
