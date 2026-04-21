import { useState } from "react";
import { FaSearch } from "react-icons/fa";

function TableRow({ name, email, status }) {
  return (
    <tr className="border-t hover:bg-gray-50 transition">
      <td className="px-6 py-4 font-medium text-gray-800">{name}</td>
      <td className="px-6 py-4 text-gray-500">{email}</td>

      <td className="px-6 py-4">
        <span
          className={`px-3 py-1 rounded-full text-xs font-medium ${
            status === "Active"
              ? "bg-green-100 text-green-600"
              : "bg-red-100 text-red-500"
          }`}
        >
          {status}
        </span>
      </td>

      <td className="px-6 py-4">
        <div className="flex gap-3">
          <button className="text-blue-500 hover:underline text-sm">
            View
          </button>
          <button className="text-red-500 hover:underline text-sm">
            Delete
          </button>
        </div>
      </td>
    </tr>
  );
}

export default function Customers() {
  const [search, setSearch] = useState("");

  const data = [
    { name: "Rafi", email: "rafi@email.com", status: "Active" },
    { name: "Andi", email: "andi@email.com", status: "Inactive" },
    { name: "Siti", email: "siti@email.com", status: "Active" },
    { name: "Budi", email: "budi@email.com", status: "Active" },
  ];

  const filtered = data.filter((c) =>
    c.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      {/* Header Section */}
      <div className="flex justify-between items-center mb-5">
        <div>
          <h1 className="text-xl font-semibold text-gray-800">
            Customers List
          </h1>
          <p className="text-sm text-gray-400">
            Manage your customers data
          </p>
        </div>

        <button className="bg-green-500 text-white px-4 py-2 rounded-lg text-sm shadow hover:bg-green-600 transition">
          + Add Customer
        </button>
      </div>

      {/* Search */}
      <div className="relative mb-4 w-80">
        <input
          type="text"
          placeholder="Search customer..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
        />
        <FaSearch className="absolute left-3 top-3 text-gray-400 text-sm" />
      </div>

      {/* Table */}
      <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
        <table className="w-full text-left">
          <thead className="bg-gray-50 text-gray-500 text-sm">
            <tr>
              <th className="px-6 py-4 font-medium">Name</th>
              <th className="px-6 py-4 font-medium">Email</th>
              <th className="px-6 py-4 font-medium">Status</th>
              <th className="px-6 py-4 font-medium">Action</th>
            </tr>
          </thead>

          <tbody>
            {filtered.map((c, i) => (
              <TableRow key={i} {...c} />
            ))}

            {filtered.length === 0 && (
              <tr>
                <td colSpan="4" className="text-center py-10 text-gray-400">
                  No customers found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}