import React from "react";
import { Search, User } from "lucide-react";

const Navbar: React.FC = () => {
  return (
    <header className="flex items-center justify-between bg-white shadow px-6 py-3">
      <h1 className="text-xl font-semibold text-gray-700">Dashboard</h1>
      <div className="flex items-center gap-3">
        <div className="relative">
          <input
            type="text"
            placeholder="Search packets..."
            className="pl-8 pr-4 py-1.5 text-sm border border-gray-300 rounded-md focus:ring focus:ring-blue-100 focus:border-blue-400"
          />
          <Search
            size={16}
            className="absolute left-2 top-2 text-gray-400"
          />
        </div>
        <User className="text-gray-500" size={20} />
      </div>
    </header>
  );
};

export default Navbar;
