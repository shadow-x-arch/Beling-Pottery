import React from "react";

const ActionIcons: React.FC = () => {
  return (
    <div className="flex space-x-4 p-2">
      {/* Download Icon */}
      <button
        className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-400"
        title="Download"
      >
        <img
          src="https://www.svgrepo.com/show/471346/download-04.svg"
          alt="Download"
          className="h-4 w-4"
        />
      </button>

      {/* Share Icon */}
      <button
        className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-400"
        title="Share"
      >
        <img
          src="https://www.svgrepo.com/show/526692/upload.svg"
          alt="Share"
          className="h-4 w-4"
        />
      </button>

      {/* Add Icon */}
      <button
        className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-400"
        title="Add"
      >
        <img
          src="https://www.svgrepo.com/show/532997/plus-large.svg"
          alt="Add"
          className="h-4 w-4"
        />
      </button>

      {/* Copy Icon */}
      <button
        className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-400"
        title="Copy"
      >
        <img
          src="https://www.svgrepo.com/show/521758/minimize.svg"
          alt="Copy"
          className="h-4 w-4"
        />
      </button>
    </div>
  );
};

export default ActionIcons;
