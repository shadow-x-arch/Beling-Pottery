
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, Settings, LayoutDashboard, CheckSquare, FileText, BarChart2, File, Folder } from "lucide-react";

const AppCompontent = () => {
  return (
    <div className=" shadow-md px-4 rounded-md text-gray-500 h-135 mt-5 bg-gray-300" >
      {/* Profile Section */}
      <div className="flex flex-col items-start mb-4">
        <span className="font-semibold">Judha Maygustya</span>
        <span className="text-sm text-gray-500 flex items-center">
          judha@emura.studio
        </span>
      </div>
      <hr className="my-4 " />
      
      {/* Search Bar */}
      <div className="relative flex items-center mb-4">
        <Search className="absolute left-2 w-4 h-4 text-gray-500" />
        <Input placeholder="Search" className="pl-8 pr-8" />
        <Settings className="absolute right-2 w-4 h-4 text-gray-500" />
      </div>
      <hr className="my-4" />
      
      {/* Main Menu */}
      <div className="mb-4">
        <h5 className="text-sm font-semibold text-gray-600">MAIN MENU</h5>
        <Button variant="ghost" className="w-full flex items-center justify-start">
          <LayoutDashboard className="w-4 h-4 mr-2" /> Dashboard
        </Button>
        <Button variant="ghost" className="w-full flex items-center justify-start">
          <CheckSquare className="w-4 h-4 mr-2" /> My To-Do
        </Button>
        <Button variant="ghost" className="w-full flex items-center justify-start">
          <FileText className="w-4 h-4 mr-2" /> Request Form
        </Button>
        <Button variant="ghost" className="w-full flex items-center justify-start">
          <BarChart2 className="w-4 h-4 mr-2" /> Reports
        </Button>
      </div>
      <hr className="my-4" />
      
      {/* My Projects */}
      <div>
        <h6 className="text-sm font-semibold text-gray-600">MY PROJECT’S</h6>
        <Button variant="ghost" className="w-full flex items-center justify-start">
        <Folder className="w-4 h-4 mr-2" />  Emura Project
        </Button>
        <Button variant="ghost" className="w-full flex items-center justify-start">
        <Folder className="w-4 h-4 mr-2" />  Daily Exploration
        </Button>
        <Button variant="ghost" className="w-full flex items-center justify-start">
          <Folder className="w-4 h-4 mr-2" /> Dashboard
        </Button>
        <Button variant="ghost" className="w-full flex items-center justify-start">
          <File className="w-4 h-4 mr-2" /> Data
        </Button>
        <Button variant="ghost" className="w-full flex items-center justify-start">
          <File className="w-4 h-4 mr-2" /> info
        </Button>
        
      </div>
    </div>
  );
};

export default AppCompontent;
