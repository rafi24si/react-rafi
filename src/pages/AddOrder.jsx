import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AddOrder() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    customer: "",
    total: "",
    status: "Pending",
    date: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // VALIDASI
    if (!form.customer || !form.total || !form.date) {
      setError("Semua field wajib diisi!");
      return;
    }

    console.log("DATA ORDER:", form);

    // kembali ke halaman orders
    navigate("/orders");
  };

  return (
    <div className="max-w-2xl mx-auto bg-white p-6 rounded-2xl shadow">
      
      <h1 className="text-2xl font-semibold mb-4">
        Add Order
      </h1>

      {error && (
        <div className="mb-3 text-red-500 text-sm">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">

        {/* CUSTOMER */}
        <div>
          <label className="text-sm text-gray-600">Customer Name</label>
          <input
            type="text"
            name="customer"
            value={form.customer}
            onChange={handleChange}
            placeholder="Enter customer name"
            className="w-full mt-1 border px-3 py-2 rounded-lg focus:ring-2 focus:ring-green-400 outline-none"
          />
        </div>

        {/* TOTAL */}
        <div>
          <label className="text-sm text-gray-600">Total Price</label>
          <input
            type="text"
            name="total"
            value={form.total}
            onChange={handleChange}
            placeholder="Contoh: Rp 100000"
            className="w-full mt-1 border px-3 py-2 rounded-lg focus:ring-2 focus:ring-green-400 outline-none"
          />
        </div>

        {/* STATUS */}
        <div>
          <label className="text-sm text-gray-600">Status</label>
          <select
            name="status"
            value={form.status}
            onChange={handleChange}
            className="w-full mt-1 border px-3 py-2 rounded-lg focus:ring-2 focus:ring-green-400 outline-none"
          >
            <option>Pending</option>
            <option>Completed</option>
            <option>Cancelled</option>
          </select>
        </div>

        {/* DATE */}
        <div>
          <label className="text-sm text-gray-600">Order Date</label>
          <input
            type="date"
            name="date"
            value={form.date}
            onChange={handleChange}
            className="w-full mt-1 border px-3 py-2 rounded-lg focus:ring-2 focus:ring-green-400 outline-none"
          />
        </div>

        {/* BUTTON */}
        <div className="flex justify-end gap-2 pt-4">
          <button
            type="button"
            onClick={() => navigate("/orders")}
            className="px-4 py-2 border rounded-lg"
          >
            Cancel
          </button>

          <button
            type="submit"
            className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
          >
            Save Order
          </button>
        </div>

      </form>
    </div>
  );
}