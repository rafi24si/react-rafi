import { useState } from "react";

function TableRow({ id, customer, total, status }) {
  return (
    <tr className="border-t hover:bg-gray-50">
      <td className="px-6 py-4">#{id}</td>
      <td className="px-6 py-4">{customer}</td>
      <td className="px-6 py-4">{total}</td>
      <td className="px-6 py-4">
        <span
          className={`px-3 py-1 rounded-full text-xs ${
            status === "Delivered"
              ? "bg-green-100 text-green-600"
              : status === "Pending"
              ? "bg-yellow-100 text-yellow-600"
              : "bg-red-100 text-red-500"
          }`}
        >
          {status}
        </span>
      </td>
      <td className="px-6 py-4 space-x-2">
        <button className="text-blue-500 text-sm">View</button>
        <button className="text-red-500 text-sm">Cancel</button>
      </td>
    </tr>
  );
}

export default function Orders() {
  const [search, setSearch] = useState("");

  const data = [
    { id: 101, customer: "Rafi", total: "Rp 120.000", status: "Delivered" },
    { id: 102, customer: "Andi", total: "Rp 75.000", status: "Pending" },
    { id: 103, customer: "Siti", total: "Rp 200.000", status: "Canceled" },
    { id: 104, customer: "Budi", total: "Rp 150.000", status: "Delivered" },
  ];

  const filtered = data.filter((o) =>
    o.customer.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      {/* Search */}
      <div className="mt-4 mb-4">
        <input
          type="text"
          placeholder="Search orders..."
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
              <th className="px-6 py-3">Order ID</th>
              <th className="px-6 py-3">Customer</th>
              <th className="px-6 py-3">Total</th>
              <th className="px-6 py-3">Status</th>
              <th className="px-6 py-3">Action</th>
            </tr>
          </thead>

          <tbody>
            {filtered.map((o) => (
              <TableRow key={o.id} {...o} />
            ))}

            {filtered.length === 0 && (
              <tr>
                <td colSpan="5" className="text-center py-6 text-gray-400">
                  No orders found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}