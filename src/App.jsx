import "./assets/tailwind.css";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Customers from "./pages/Customers";
import Orders from "./pages/Orders";
import AddCustomer from "./pages/AddCustomer";
import AddOrder from "./pages/AddOrder";
import ErrorPage from "./pages/ErrorPage";
import MainLayout from "./layouts/MainLayout";

function App() {
  return (
    <div className="flex bg-[#F3F4F6] min-h-screen">
      <Routes>

        {/* Main Layout */}
        <Route element={<MainLayout />}>
          
          {/* Dashboard */}
          <Route path="/" element={<Dashboard />} />

          {/* Customers */}
          <Route path="/customers" element={<Customers />} />
          <Route path="/customers/add" element={<AddCustomer />} />

          {/* Orders */}
          <Route path="/orders" element={<Orders />} />
          <Route path="/orders/add" element={<AddOrder />} />

          {/* Error Pages */}
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

          {/* 404 */}
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
    </div>
  );
}

export default App;