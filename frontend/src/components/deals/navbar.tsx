const Navbar = () => {
  return (
    <div className="bg-white p-3 shadow flex justify-between">
      <input
        placeholder="Search deals..."
        className="border px-3 py-1 rounded w-1/3"
      />

      <div className="flex gap-3">
        <button className="border px-3 py-1 rounded">Filters</button>
        <button className="bg-blue-600 text-white px-3 py-1 rounded">
          + Deal
        </button>
      </div>
    </div>
  );
};

export default Navbar;