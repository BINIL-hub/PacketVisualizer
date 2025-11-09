import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Home, FileSearch, Upload, BarChart3, Settings } from "lucide-react";

const Sidebar: React.FC = () => {
  const location = useLocation();

  const links = [
    { name: "Dashboard", path: "/", icon: <Home size={18} /> },
    { name: "Analyzer", path: "/analyzer", icon: <FileSearch size={18} /> },
    { name: "Upload", path: "/upload", icon: <Upload size={18} /> },
    { name: "Reports", path: "/reports", icon: <BarChart3 size={18} /> },
    { name: "Settings", path: "/settings", icon: <Settings size={18} /> },
  ];

  return (
    <aside className="w-60 bg-[#0f172a] text-gray-200 flex flex-col">
      <div className="p-6 text-xl font-semibold border-b border-gray-700">
        PacketAnalyser
      </div>
      <nav className="flex-1 mt-4 space-y-1">
        {links.map((link) => (
          <Link
            key={link.path}
            to={link.path}
            className={`flex items-center gap-3 px-5 py-2.5 rounded-md transition-colors ${
              location.pathname === link.path
                ? "bg-blue-600 text-white"
                : "hover:bg-blue-900 hover:text-white text-gray-300"
            }`}
          >
            {link.icon}
            <span className="text-sm font-medium">{link.name}</span>
          </Link>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
