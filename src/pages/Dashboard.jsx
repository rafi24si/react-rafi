import {
  FaShoppingCart,
  FaTruck,
  FaBan,
  FaDollarSign,
} from "react-icons/fa";

import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

import { useNavigate } from "react-router-dom";

function Card({ icon, value, label, bg }) {
  return (
    <div className="bg-white rounded-2xl shadow-sm px-5 py-4 flex items-center gap-4">
      <div
        className={`w-12 h-12 flex items-center justify-center rounded-full ${bg} text-white text-lg`}
      >
        {icon}
      </div>

      <div>
        <p className="text-lg font-semibold text-gray-800">{value}</p>
        <p className="text-sm text-gray-400">{label}</p>
      </div>
    </div>
  );
}

export default function Dashboard() {
  const navigate = useNavigate();

  const chartData = [
    { name: "Jan", orders: 30, revenue: 100 },
    { name: "Feb", orders: 50, revenue: 200 },
    { name: "Mar", orders: 40, revenue: 150 },
    { name: "Apr", orders: 70, revenue: 300 },
    { name: "May", orders: 60, revenue: 250 },
    { name: "Jun", orders: 90, revenue: 400 },
  ];

  return (
    <div>

      {/* 🔥 BUTTON ACTION */}
      <div className="flex justify-end gap-3 mb-4">
        <button
          onClick={() => navigate("/customers/add")}
          className="bg-blue-500 text-white px-4 py-2 rounded-xl shadow hover:bg-blue-600"
        >
          + Add Customer
        </button>

        <button
          onClick={() => navigate("/orders/add")}
          className="bg-green-500 text-white px-4 py-2 rounded-xl shadow hover:bg-green-600"
        >
          + Add Order
        </button>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-4 gap-5 mt-4">
        <Card icon={<FaShoppingCart />} value="75" label="Total Orders" bg="bg-green-500" />
        <Card icon={<FaTruck />} value="175" label="Total Delivered" bg="bg-blue-500" />
        <Card icon={<FaBan />} value="40" label="Total Canceled" bg="bg-red-500" />
        <Card icon={<FaDollarSign />} value="Rp.128" label="Total Revenue" bg="bg-yellow-500" />
      </div>

      {/* Charts */}
      <div className="grid grid-cols-2 gap-5 mt-6">
        
        {/* Line Chart */}
        <div className="bg-white p-5 rounded-2xl shadow-sm">
          <h2 className="text-lg font-semibold text-gray-700 mb-4">
            Orders Overview
          </h2>

          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="orders" stroke="#22c55e" strokeWidth={3} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Bar Chart */}
        <div className="bg-white p-5 rounded-2xl shadow-sm">
          <h2 className="text-lg font-semibold text-gray-700 mb-4">
            Revenue Overview
          </h2>

          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="revenue" fill="#3b82f6" />
            </BarChart>
          </ResponsiveContainer>
        </div>

      </div>
    </div>
  );
}