import { MoreVertical, Plus } from 'lucide-react';

function TopCardComplete() {
  return (
    <div className="lex items-center justify-center">
      <div className="flex items-center gap-1 bg-white  px-3 py-2 w-60 ">
        <div className="flex items-center gap-2">
          <div className="w-1.5 h-4 bg-lime-400 rounded-full"></div>
          <span className="text-gray-700 font-medium">Complete</span>
          <span className="bg-gray-100 text-gray-600 text-sm px-2 py-0.5 rounded">1</span>
        </div>
        
        <div className="flex items-center gap-1 ml-2">
          <button className="p-1 hover:bg-gray-100 rounded-md transition-colors">
            <Plus size={16} className="text-gray-600" />
          </button>
          <button className="p-1 hover:bg-gray-100 rounded-md transition-colors">
            <MoreVertical size={16} className="text-gray-600" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default TopCardComplete;