import Dashboard from "./pages/Dashboard";
import "./assets/tailwind.css";
import Sidebar from "./layouts/Sidebar";
import Header from "./layouts/Header";
import PageHeader from "./components/PageHeader";
import { Routes, Route } from "react-router-dom";
import Customers from "./pages/Customers";
import Orders from "./pages/Orders";
import NotFound from "./pages/NotFound";
import ErrorPage from "./pages/ErrorPage";

function App() {
  return (
    <div className="flex bg-[#F3F4F6] min-h-screen">
      <Sidebar />

      <div className="flex-1">
        <Header />

        <div className="px-6 py-5">
          <PageHeader />

          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/customers" element={<Customers />} />

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
