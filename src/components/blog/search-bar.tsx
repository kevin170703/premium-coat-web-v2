"use client";

import { useState } from "react";
import { IconSearch } from "@tabler/icons-react";

export function SearchBar() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (value: string) => {
    setSearchTerm(value);
    // Dispatch custom event to communicate with PostList
    window.dispatchEvent(
      new CustomEvent("search-update", {
        detail: { searchTerm: value },
      })
    );
  };

  return (
    <div className="relative max-w-md">
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        <IconSearch className="h-5 w-5 text-gray-400" />
      </div>
      <input
        type="text"
        placeholder="Buscar posts..."
        value={searchTerm}
        onChange={(e) => handleSearch(e.target.value)}
        className="border border-gray-300 rounded-2xl p-2 pl-10 w-full focus:ring-2 focus:ring-blue-500 focus:border-transparent"
      />
    </div>
  );
}
