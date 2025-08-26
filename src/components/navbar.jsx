import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom"; 
import profilePic from "../assets/profile.png";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navigate = useNavigate();
  const location = useLocation(); 
  const currentPage = location.pathname;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", path: "/", icon: "🏠" },
    { name: "Dashboard", path: "/dashboard", icon: "🎮" },
    { name: "Journal", path: "/journal", icon: "📓" },
    { name: "Stats", path: "/stats", icon: "📊" },
    { name: "Contact", path: "/contact", icon: "📞" },
    { name: "Settings", path: "/settings", icon: "⚙️" },
  ];

  const handleNavigation = (path) => {
    navigate(path);
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-gray-900/95 backdrop-blur-md shadow-lg shadow-purple-500/10"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <button
          className="flex items-center gap-3 group"
          onClick={() => handleNavigation("/")}
        >
          <img
            src="src/assets/logo.png"
            alt="Logo"
            className="w-14 h-14 object-contain hover:scale-110 transition-transform"
          />
          <span className="text-2xl font-black bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
            LIFORA
          </span>
        </button>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-1">
          {navItems.map((item) => (
            <button
              key={item.name}
              onClick={() => handleNavigation(item.path)}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl transition-all duration-200 group ${
                currentPage === item.path
                  ? "text-white bg-purple-600/20 border border-purple-500/30"
                  : "text-gray-300 hover:text-white hover:bg-gray-800/50"
              }`}
            >
              <span className="group-hover:scale-125 transition-transform">
                {item.icon}
              </span>
              <span className="font-medium">{item.name}</span>
              {currentPage === item.path && (
                <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
              )}
            </button>
          ))}

          {/* Profile with username */}
          <div
            onClick={() => handleNavigation("/profile")}
            className="ml-4 flex flex-col items-center cursor-pointer"
          >
            <img
              src={profilePic}
              alt="Profile"
              className="w-10 h-10 rounded-full border-2 border-purple-500 hover:scale-105 transition-transform"
            />
            <span className="text-xs text-gray-300 mt-1 font-medium">
              Divanshi
            </span>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-gray-900/95 backdrop-blur-md border-t border-gray-700/50">
          <div className="container mx-auto px-6 py-4 space-y-2">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavigation(item.path)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 ${
                  currentPage === item.path
                    ? "text-white bg-purple-600/20 border border-purple-500/30"
                    : "text-gray-300 hover:text-white hover:bg-gray-800/50"
                }`}
              >
                <span className="text-xl">{item.icon}</span>
                <span className="font-medium">{item.name}</span>
              </button>
            ))}

            {/* Profile Avatar with name */}
            <button
              onClick={() => handleNavigation("/profile")}
              className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-gray-300 hover:text-white hover:bg-gray-800/50"
            >
              <img
                src={profilePic}
                alt="Profile"
                className="w-8 h-8 rounded-full border-2 border-purple-500"
              />
              <span className="font-medium">Divanshi</span>
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
