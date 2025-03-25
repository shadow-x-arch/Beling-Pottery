import React from "react";

const WindowControls: React.FC = () => {
  return (
    <div className="flex items-center space-x-4 p-4">
      {/* Red, Yellow, Green buttons */}
      <div className="flex space-x-2">
        <a
          href="#"
          className="w-3 h-3 bg-red-500 rounded-full hover:opacity-75"
          title="Close"
        ></a>
        <a
          href="#"
          className="w-3 h-3 bg-yellow-500 rounded-full hover:opacity-75"
          title="Minimize"
        ></a>
        <a
          href="#"
          className="w-3 h-3 bg-green-500 rounded-full hover:opacity-75"
          title="Maximize"
        ></a>
      </div>

      <div className="flex space-x-2">
<button className="hover:opacity-75">
        <img
          src="https://www.svgrepo.com/show/533337/sidebar.svg"
          alt="Refresh"
          className="h-5 w-5"
        />
      </button>
        
      </div>
      {/* Navigation buttons */}
      <div className="flex space-x-2">
        {/* Left Arrow  */}
        <a
          href="#"
          className="w-5 h-5 bg-gray-400 rounded-full flex items-center justify-center hover:bg-gray-500"
          title="Go Back"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-3 w-3 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </a>

        {/* Right Arrow */}
        <a
          href="#"
          className="w-5 h-5 bg-gray-400 rounded-full flex items-center justify-center hover:bg-gray-500"
          title="Go Forward"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-3 w-3 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default WindowControls;
