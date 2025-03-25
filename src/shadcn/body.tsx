import React, { useState } from 'react';
import { Menu, X, Home, Settings, Users, } from 'lucide-react';
import { ChevronLeft, ChevronRight, Plus, Bookmark, Share2, MoreHorizontal, KanbanSquare, Calendar, BarChart2, List, Baseline as Timeline } from 'lucide-react';
import AppCompontent from './AppCompontent.tsx'
import AvatarI  from './avatar.tsx';
import App  from './cards.tsx';
function ResponsiveDrawer() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="min-h-screen flex bg-gray-100 mt-0 ">
      {/* Sidebar */}
      <div 
        className={`fixed lg:relative bg-gray-200 mt-0 h-screen transition-all duration-300 ease-in-out ${
          isExpanded ? 'w-[40%] lg:w-[40%]' : 'w-[15%]'
        }`}
      >
        <div className="p-2 mt-3">
          <div className="flex items-center justify-between mb-2 h-[2px]">
            <h1 className={`font-bold text-xl ${!isExpanded && 'hidden lg:block'}`}>Dashboard</h1>
            <button 
              onClick={() => setIsExpanded(!isExpanded)}
              className="p-2 hover:bg-gray-500 rounded-lg"
            >
              {isExpanded ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          <nav className="space-y-2">
           <AppCompontent />
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div className={`flex-1 p-8 transition-all duration-300 ease-in-out ${
        isExpanded ? 'ml-[5%]' : 'ml-[14%]'
      } lg:ml-0`}>
        <div className="max-w-[2000px] mx-auto rounded-md">



    <div className=" bg-gray-50 rounded-md ">
      {/* Top Navigation */}
      <nav className="px-4 py-2 border-b bg-white border-gray-400 rounded-md">
        <div className="flex items-center justify-between rounded-md">
          <div className="flex items-center space-x-4 rounded-md">
            <div className="flex items-center space-x-2 rounded-md">
              <button className="p-1 hover:bg-gray-100 rounded">
                <ChevronLeft className="w-5 h-5 text-gray-600" />
              </button>
              <button className="p-1 hover:bg-gray-100 rounded">
                <ChevronRight className="w-5 h-5 text-gray-600" />
              </button>
            </div>
            <div className="flex items-center space-x-2 rounded-md">
              <span className="text-sm text-gray-500">My Pages</span>
              <span className="text-sm text-gray-500">/</span>
              <span className="text-sm text-gray-500">Emura Project</span>
              <span className="text-sm text-gray-500">/</span>
              <span className="text-sm">Beling Pottery</span>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <button className="flex items-center space-x-2 px-3 py-1.5 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700">
              <Plus className="w-4 h-4" />
              <span className="text-sm">New Tab</span>
            </button>
            <button className="p-1 hover:bg-gray-100 rounded">
              <Bookmark className="w-5 h-5 text-gray-600" />
            </button>
            <button className="p-1 hover:bg-gray-100 rounded">
              <Share2 className="w-5 h-5 text-gray-600" />
            </button>
            <button className="p-1 hover:bg-gray-100 rounded">
              <MoreHorizontal className="w-5 h-5 text-gray-600" />
            </button>
          </div>
        </div>
      </nav>

      {/* Project Header */}
      <div className="px-4 py-4 bg-white">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center rounded-lg">
            <img 
  src="https://api.freelogodesign.org/assets/thumb/logo/9af3a9661c474e51b28a242f1c60c59c_400.png"
  alt="Logo"
  className="h-8 w-auto className"
/>

            </div>
            <div>
              <div className="flex items-center space-x-2">
                <h1 className="text-xl font-semibold">Beling-Pottery</h1>
                <ChevronRight className="w-4 h-4 text-gray-400" />
              </div>
              <div className="flex items-center space-x-4 text-sm text-gray-500 mt-1">
                <span>Timeline: Aug 16, 2025 - Sep 16, 2025</span>
                <span>Client: Ben Barlow</span>
                <span className="flex items-center">
                  Status: <span className="text-yellow-500 ml-1">In Progress</span>
                </span>
              </div>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <div className="flex -space-x-2">
              <AvatarI />
              </div>
            <button className="px-3 py-1.5 bg-indigo-50 text-indigo-600 rounded-lg text-sm font-medium hover:bg-indigo-100">
              Invite
            </button>
          </div>
        </div>
      </div>

      {/* View Options */}
      <div className="px-4 py-2 bg-white border-b border-gray-400 flex items-center justify-between">
        <div className="flex space-x-6 border-1 border-gray-300 rounded-lg">
        <div className="flex space-x-2 px-1 py-1">
          <button className="flex items-center space-x-2 px-3 py-2 text-gray-700  bg-slate-200 rounded-md">
            <KanbanSquare className="w-5 h-5" />
            <span >Kanban</span>
          </button>
          </div>
          <button className="flex items-center space-x-2 px-3 py-2 text-gray-500 hover:text-gray-700">
            <Calendar className="w-5 h-5" />
            <span>Calendar</span>
          </button>
          <button className="flex items-center space-x-2 px-3 py-2 text-gray-500 hover:text-gray-700">
            <BarChart2 className="w-5 h-5" />
            <span>Gantt</span>
          </button>
          <button className="flex items-center space-x-2 px-3 py-2 text-gray-500 hover:text-gray-700">
            <List className="w-5 h-5" />
            <span>List</span>
          </button>
          <button className="flex items-center space-x-2 px-3 py-2 text-gray-500 hover:text-gray-700">
            <Timeline className="w-5 h-5" />
            <span>Timeline</span>
          </button>
        </div>
        <div className="flex items-center space-x-2 border-1 border-gray-600 rounded-lg">
          <button className="p-2 hover:bg-gray-100 rounded">
            <img src="https://www.google.com/favicon.ico" alt="Google" className="w-5 h-5" />
          </button>
          <button className="p-2 hover:bg-gray-100 rounded">
            <img src="https://ssl.gstatic.com/images/branding/product/1x/drive_2020q4_32dp.png" alt="Google Drive" className="w-5 h-5" />
          </button>
          <button className="p-2 hover:bg-gray-100 rounded">
            <img src="https://calendar.google.com/googlecalendar/images/favicon_v2018_256.png" alt="Google Calendar" className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Main Content Area (placeholder) */}
      <div className="p-0 m-0 frex h-max bg-color-white-500 mt-5 mr-2 ml-2 gap-2">
    <div
    className="text-gray-500 flex h-max bg-color-white-500  gap-2">
      <><App /></>
    </div>
 
      </div>
    </div>

        </div>
      </div>
    </div>
  );
}

function NavItem({ icon, text, expanded }: { icon: React.ReactNode; text: string; expanded: boolean }) {
  return (
    <a 
      href="#" 
      className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-800 transition-colors"
    >
      {icon}
      <span className={`${!expanded && 'hidden lg:inline-block'}`}>{text}</span>
    </a>
  );
}

export default ResponsiveDrawer;

