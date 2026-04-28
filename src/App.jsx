import "./assets/tailwind.css";
import { Routes, Route } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import Customers from "./pages/Customers";
import Orders from "./pages/Orders";
import AddCustomer from "./pages/AddCustomer";
import AddOrder from "./pages/AddOrder";
import ErrorPage from "./pages/ErrorPage";

import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import Forgot from "./pages/auth/Forgot";

import MainLayout from "./layouts/MainLayout";
import AuthLayout from "./layouts/AuthLayout";

function App() {
  return (
    <Routes>

      {/* AUTH ROUTES (tanpa sidebar) */}
      <Route element={<AuthLayout />}>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot" element={<Forgot />} />
      </Route>

      {/* MAIN ROUTES (pakai sidebar/header) */}
      <Route element={<MainLayout />}>

        <Route path="/" element={<Dashboard />} />

        <Route path="/customers" element={<Customers />} />
        <Route path="/customers/add" element={<AddCustomer />} />

        <Route path="/orders" element={<Orders />} />
        <Route path="/orders/add" element={<AddOrder />} />

        <Route
          path="/400"
          element={
            <ErrorPage
              code="400"
              description="Bad Request. Permintaan tidak valid."
              image="/img/400.png"
            />
          }
        />

        <Route
          path="/401"
          element={
            <ErrorPage
              code="401"
              description="Unauthorized. Silakan login terlebih dahulu."
              image="/img/401.png"
            />
          }
        />

        <Route
          path="/403"
          element={
            <ErrorPage
              code="403"
              description="Forbidden. Kamu tidak punya akses."
              image="/img/403.png"
            />
          }
        />

        <Route
          path="*"
          element={
            <ErrorPage
              code="404"
              description="Page not found."
              image="/img/404.png"
            />
          }
        />

      </Route>

    </Routes>
  );
}

export default App;