import "./assets/tailwind.css";
import { Routes, Route } from "react-router-dom";
import Sidebar from "./layouts/Sidebar";
import Header from "./layouts/Header";
import Dashboard from "./pages/Dashboard";
import Customers from "./pages/Customers";
import Orders from "./pages/Orders";
import AddCustomer from "./pages/AddCustomer";
import AddOrder from "./pages/AddOrder";
import ErrorPage from "./pages/ErrorPage";

function App() {
  return (
    <div className="flex bg-[#F3F4F6] min-h-screen">
      
      {/* Sidebar */}
      <Sidebar />

      {/* Main */}
      <div className="flex-1">
        <Header />

        <div className="px-6 py-5">

          {/* ROUTES */}
          <Routes>
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

            {/* 404 fallback */}
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
          </Routes>

        </div>
      </div>
    </div>
  );
}

export default App;