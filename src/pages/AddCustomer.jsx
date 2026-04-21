import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AddCustomer() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    loyalty: "Bronze",
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

    // VALIDASI SEDERHANA
    if (!form.name || !form.email || !form.phone) {
      setError("Semua field wajib diisi!");
      return;
    }

    console.log("DATA CUSTOMER:", form);

    // redirect kembali ke halaman customers
    navigate("/customers");
  };

  return (
    <div className="max-w-2xl mx-auto bg-white p-6 rounded-2xl shadow">
      
      <h1 className="text-2xl font-semibold mb-4">
        Add Customer
      </h1>

      {error && (
        <div className="mb-3 text-red-500 text-sm">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">

        {/* NAME */}
        <div>
          <label className="text-sm text-gray-600">Name</label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Enter name"
            className="w-full mt-1 border px-3 py-2 rounded-lg focus:ring-2 focus:ring-green-400 outline-none"
          />
        </div>

        {/* EMAIL */}
        <div>
          <label className="text-sm text-gray-600">Email</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Enter email"
            className="w-full mt-1 border px-3 py-2 rounded-lg focus:ring-2 focus:ring-green-400 outline-none"
          />
        </div>

        {/* PHONE */}
        <div>
          <label className="text-sm text-gray-600">Phone</label>
          <input
            type="text"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            placeholder="Enter phone"
            className="w-full mt-1 border px-3 py-2 rounded-lg focus:ring-2 focus:ring-green-400 outline-none"
          />
        </div>

        {/* LOYALTY */}
        <div>
          <label className="text-sm text-gray-600">Loyalty</label>
          <select
            name="loyalty"
            value={form.loyalty}
            onChange={handleChange}
            className="w-full mt-1 border px-3 py-2 rounded-lg focus:ring-2 focus:ring-green-400 outline-none"
          >
            <option>Bronze</option>
            <option>Silver</option>
            <option>Gold</option>
          </select>
        </div>

        {/* BUTTON */}
        <div className="flex justify-end gap-2 pt-4">
          <button
            type="button"
            onClick={() => navigate("/customers")}
            className="px-4 py-2 border rounded-lg"
          >
            Cancel
          </button>

          <button
            type="submit"
            className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
          >
            Save Customer
          </button>
        </div>

      </form>
    </div>
  );
}