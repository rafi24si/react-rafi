import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaSearch,
  FaChevronLeft,
  FaChevronRight,
  FaEye,
  FaTrashAlt,
  FaShoppingCart,
} from "react-icons/fa";

const ITEMS_PER_PAGE = 5;

// ✅ Status Badge (biar konsisten kayak loyalty)
function StatusBadge({ status }) {
  const styles =
    status === "Completed"
      ? "bg-green-100 text-green-600"
      : status === "Pending"
      ? "bg-yellow-100 text-yellow-600"
      : "bg-red-100 text-red-500";

  return (
    <span className={`px-3 py-1 rounded-full text-xs font-medium ${styles}`}>
      {status}
    </span>
  );
}

function TableRow({ id, customer, total, status, date }) {
  return (
    <tr className="border-t hover:bg-gray-50 transition">
      <td className="px-6 py-4 text-gray-500">#{id}</td>

      <td className="px-6 py-4 font-medium text-gray-800">
        {customer}
      </td>

      <td className="px-6 py-4 text-gray-500">{total}</td>

      <td className="px-6 py-4">
        <StatusBadge status={status} />
      </td>

      <td className="px-6 py-4 text-gray-500">{date}</td>

      <td className="px-6 py-4">
        <div className="flex gap-3">
          <button className="text-blue-500 hover:underline text-sm flex items-center gap-1">
            <FaEye /> View
          </button>

          <button className="text-red-500 hover:underline text-sm flex items-center gap-1">
            <FaTrashAlt /> Cancel
          </button>
        </div>
      </td>
    </tr>
  );
}

export default function Orders() {
  const navigate = useNavigate();

  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const data = Array.from({ length: 30 }, (_, i) => ({
    id: 100 + i,
    customer: ["Rafi", "Andi", "Siti", "Budi"][i % 4] + " " + (i + 1),
    status: ["Pending", "Completed", "Cancelled"][i % 3],
    total: `Rp ${(i + 1) * 10000}`,
    date: `2025-04-${(i % 30) + 1}`,
  }));

  const filtered = data.filter((o) =>
    o.customer.toLowerCase().includes(search.toLowerCase())
  );

  const totalPages = Math.ceil(filtered.length / ITEMS_PER_PAGE);
  const start = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentData = filtered.slice(start, start + ITEMS_PER_PAGE);

  return (
    <div className="p-6">

      {/* HEADER */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-semibold text-gray-800">
            Orders
          </h1>
          <p className="text-sm text-gray-400">
            Manage your orders data
          </p>
        </div>

        <button
          onClick={() => navigate("/orders/add")}
          className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-xl shadow"
        >
          <FaShoppingCart /> Add Order
        </button>
      </div>

      {/* SEARCH */}
      <div className="relative mb-5 w-80">
        <input
          type="text"
          placeholder="Search orders..."
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            setCurrentPage(1);
          }}
          className="w-full pl-10 pr-4 py-2 border rounded-xl focus:ring-2 focus:ring-green-400 outline-none"
        />
        <FaSearch className="absolute left-3 top-3 text-gray-400 text-sm" />
      </div>

      {/* TABLE CARD */}
      <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
        <table className="w-full text-left">
          <thead className="bg-gray-50 text-gray-500 text-sm">
            <tr>
              <th className="px-6 py-4">Order ID</th>
              <th className="px-6 py-4">Customer</th>
              <th className="px-6 py-4">Total</th>
              <th className="px-6 py-4">Status</th>
              <th className="px-6 py-4">Date</th>
              <th className="px-6 py-4">Action</th>
            </tr>
          </thead>

          <tbody>
            {currentData.map((o) => (
              <TableRow key={o.id} {...o} />
            ))}

            {currentData.length === 0 && (
              <tr>
                <td colSpan="6" className="text-center py-10 text-gray-400">
                  No orders found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* PAGINATION */}
      <div className="flex justify-between items-center mt-5">
        <p className="text-sm text-gray-500">
          Page {currentPage} of {totalPages}
        </p>

        <div className="flex gap-2">
          <button
            onClick={() => setCurrentPage((p) => p - 1)}
            disabled={currentPage === 1}
            className="px-3 py-1 border rounded disabled:opacity-50"
          >
            <FaChevronLeft />
          </button>

          <button
            onClick={() => setCurrentPage((p) => p + 1)}
            disabled={currentPage === totalPages}
            className="px-3 py-1 border rounded disabled:opacity-50"
          >
            <FaChevronRight />
          </button>
        </div>
      </div>
    </div>
  );
}