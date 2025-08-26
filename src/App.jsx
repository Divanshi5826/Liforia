// src/App.jsx
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes/Approutes";
import Navbar from "./components/navbar";
import Footer from "./components/footer";

export default function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen">
        {/* Navbar at Top */}
        <Navbar />

        {/* Main Content */}
        <main className="flex-grow bg-gray-50 p-6">
          <AppRoutes />
        </main>

        {/* Footer at Bottom */}
        <Footer />
      </div>
    </BrowserRouter>
  );
}
