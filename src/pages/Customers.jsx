import { useState } from "react";

function TableRow({ name, email, status }) {
  return (
    <tr className="border-t hover:bg-gray-50">
      <td className="px-6 py-4">{name}</td>
      <td className="px-6 py-4">{email}</td>
      <td className="px-6 py-4">
        <span
          className={`px-3 py-1 rounded-full text-xs ${
            status === "Active"
              ? "bg-green-100 text-green-600"
              : "bg-red-100 text-red-500"
          }`}
        >
          {status}
        </span>
      </td>
      <td className="px-6 py-4 space-x-2">
        <button className="text-blue-500 text-sm">View</button>
        <button className="text-red-500 text-sm">Delete</button>
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
      {/* Search */}
      <div className="mt-4 mb-4">
        <input
          type="text"
          placeholder="Search customer..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="px-4 py-2 border rounded-lg w-80 focus:outline-none focus:ring-2 focus:ring-green-400"
        />
      </div>

      {/* Table */}
      <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
        <table className="w-full text-left">
          <thead className="bg-gray-100 text-gray-600 text-sm">
            <tr>
              <th className="px-6 py-3">Name</th>
              <th className="px-6 py-3">Email</th>
              <th className="px-6 py-3">Status</th>
              <th className="px-6 py-3">Action</th>
            </tr>
          </thead>

          <tbody>
            {filtered.map((c, i) => (
              <TableRow key={i} {...c} />
            ))}

            {filtered.length === 0 && (
              <tr>
                <td colSpan="4" className="text-center py-6 text-gray-400">
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