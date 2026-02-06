import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="flex justify-between items-center p-4 bg-linear-to-r from-yellow-400 via-orange-400 to-pink-400 text-white shadow-md">
      <Link to="/" className="text-2xl font-bold tracking-tight">
        Task App
      </Link>

      <div className="flex items-center gap-6">
        <Link
          to="/tasks"
          className="font-medium hover:text-yellow-100 transition-colors"
        >
          All Tasks
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
