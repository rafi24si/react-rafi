import "./assets/tailwind.css";
import React, { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";

import Loading from "./components/Loading";

/* Lazy Pages */
const Dashboard = lazy(() => import("./pages/Dashboard"));
const Customers = lazy(() => import("./pages/Customers"));
const Orders = lazy(() => import("./pages/Orders"));
const AddCustomer = lazy(() => import("./pages/AddCustomer"));
const AddOrder = lazy(() => import("./pages/AddOrder"));
const ErrorPage = lazy(() => import("./pages/ErrorPage"));

const Login = lazy(() => import("./pages/auth/Login"));
const Register = lazy(() => import("./pages/auth/Register"));
const Forgot = lazy(() => import("./pages/auth/Forgot"));

const MainLayout = lazy(() => import("./layouts/MainLayout"));
const AuthLayout = lazy(() => import("./layouts/AuthLayout"));

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>

        {/* Auth */}
        <Route element={<AuthLayout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot" element={<Forgot />} />
        </Route>

        {/* Main */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<Dashboard />} />

          <Route path="/customers" element={<Customers />} />
          <Route path="/customers/add" element={<AddCustomer />} />

          <Route path="/orders" element={<Orders />} />
          <Route path="/orders/add" element={<AddOrder />} />

          <Route path="/400" element={<ErrorPage code="400" />} />
          <Route path="/401" element={<ErrorPage code="401" />} />
          <Route path="/403" element={<ErrorPage code="403" />} />

          <Route path="*" element={<ErrorPage code="404" />} />
        </Route>

      </Routes>
    </Suspense>
  );
}

export default App;