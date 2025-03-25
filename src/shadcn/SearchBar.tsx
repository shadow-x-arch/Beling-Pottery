import React from "react";

const SearchBar: React.FC = () => {
  return (
    <div className="flex items-center space-x-4 p-4">
      {/* Shield Icon (Outside of the search bar) */}
      <div className="flex items-center justify-center w-10 h-10">
        <img
          src="https://www.svgrepo.com/show/527879/shield-minimalistic.svg"
          alt="Shield"
          className="h-7 w-7"
        />
      </div>

      {/* Search Bar */}
      <div className="flex items-center flex-grow bg-gray-100 rounded-md shadow-md px-4 py-2 space-x-2">
        {/* Lockpad Icon */}
        <div>
          <img
            src="https://www.svgrepo.com/show/491292/padlock.svg"
            alt="Padlock"
            className="h-5 w-5"
          />
        </div>

        {/* Search Input */}
        <input
          type="text"
          defaultValue="emura.studio"
          className="flex-grow text-sm bg-transparent outline-none text-gray-700 placeholder-gray-500"
          placeholder="Search or type a URL"
        />

        {/* Refresh Icon */}
        <button className="hover:opacity-75">
          <img
            src="https://www.svgrepo.com/show/526141/refresh-circle.svg"
            alt="Refresh"
            className="h-5 w-5"
          />
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
