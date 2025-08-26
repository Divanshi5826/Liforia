import { Routes, Route } from "react-router-dom";
import Home from "../pages/home";
import Dashboard from "../pages/dashboard";
import Journal from "../pages/journal";
import Stats from "../pages/stats";
import Contact from "../pages/contact";
import Settings from "../pages/settings";
// import Profile from "../pages/profile"; 

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/journal" element={<Journal />} />
      <Route path="/stats" element={<Stats />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/settings" element={<Settings />} />
      {/* <Route path="/profile" element={<Profile />} /> */}
    </Routes>
  );
}
