import { useState } from "react";
import { FaSearch } from "react-icons/fa";

function TableRow({ id, customer, total, status }) {
  return (
    <tr className="border-t hover:bg-gray-50 transition">
      <td className="px-6 py-4 font-medium text-gray-800">#{id}</td>
      <td className="px-6 py-4 text-gray-700">{customer}</td>
      <td className="px-6 py-4 text-gray-600">{total}</td>

      <td className="px-6 py-4">
        <span
          className={`px-3 py-1 rounded-full text-xs font-medium ${
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

      <td className="px-6 py-4">
        <div className="flex gap-3">
          <button className="text-blue-500 hover:underline text-sm">
            View
          </button>
          <button className="text-red-500 hover:underline text-sm">
            Cancel
          </button>
        </div>
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
      {/* Header */}
      <div className="flex justify-between items-center mb-5">
        <div>
          <h1 className="text-xl font-semibold text-gray-800">
            Orders List
          </h1>
          <p className="text-sm text-gray-400">
            Manage your orders data
          </p>
        </div>

        <button className="bg-green-500 text-white px-4 py-2 rounded-lg text-sm shadow hover:bg-green-600 transition">
          + Add Order
        </button>
      </div>

      {/* Search */}
      <div className="relative mb-4 w-80">
        <input
          type="text"
          placeholder="Search orders..."
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
              <th className="px-6 py-4 font-medium">Order ID</th>
              <th className="px-6 py-4 font-medium">Customer</th>
              <th className="px-6 py-4 font-medium">Total</th>
              <th className="px-6 py-4 font-medium">Status</th>
              <th className="px-6 py-4 font-medium">Action</th>
            </tr>
          </thead>

          <tbody>
            {filtered.map((o) => (
              <TableRow key={o.id} {...o} />
            ))}

            {filtered.length === 0 && (
              <tr>
                <td colSpan="5" className="text-center py-10 text-gray-400">
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