import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Menu, X, Music, ListMusic, Radio, Library } from "lucide-react";

const playlists = [
  "Recently Added",
  "Recently Played",
  "Top Songs",
  "Top Albums",
  "Top Artists",
  "Logic Discography",
  "Bedtime Beats",
  "Feeling Happy",
  "I miss Y2K Pop",
  "Runtober",
  "Mellow Days",
  "Eminem Essentials",
];

const SideBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative flex flex-col">
      {/* Toggle Button */}
      <Button 
        variant="ghost" 
        className="lg:hidden absolute top-2 left-2 z-50" 
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </Button>
      
      {/* Sidebar */}
      <div
        className={`fixed lg:relative top-0 left-0 h-full bg-gray-100 shadow-md px-4 py-4 rounded-md transition-transform transform ${
          isOpen ? "translate-x-0 w-64" : "w-64"
        } lg:w-60 z-40 flex flex-col items-start`}
      >
        <h2 className="mb-4 text-lg font-semibold tracking-tight text-center">Discover</h2>
        <div className="space-y-2 w-full">
          <Button variant="ghost" className="w-full flex items-center">
            <Music className="h-5 w-5" />
            <span className="ml-2">Listen Now</span>
          </Button>
          <Button variant="ghost" className="w-full flex items-center">
            <ListMusic className="h-5 w-5" />
            <span className="ml-2">Browse</span>
          </Button>
          <Button variant="ghost" className="w-full flex items-center">
            <Radio className="h-5 w-5" />
            <span className="ml-2">Radio</span>
          </Button>
        </div>

        <h2 className="mt-4 mb-2 text-lg font-semibold tracking-tight">Library</h2>
        <div className="space-y-2 w-full">
          <Button variant="ghost" className="w-full flex items-center">
            <Library className="h-5 w-5" />
            <span className="ml-2">Playlists</span>
          </Button>
          <Button variant="ghost" className="w-full flex items-center">
            <ListMusic className="h-5 w-5" />
            <span className="ml-2">Songs</span>
          </Button>
        </div>

        <h2 className="mt-4 mb-2 text-lg font-semibold tracking-tight">Playlists</h2>
        <ScrollArea className="h-[250px] px-1 w-full">
          <div className="space-y-2 w-full">
            {playlists.map((playlist, i) => (
              <Button key={i} variant="ghost" className="w-full flex items-center">
                <ListMusic className="h-5 w-5" />
                <span className="ml-2">{playlist}</span>
              </Button>
            ))}
          </div>
        </ScrollArea>
      </div>
    </div>
  );
};

export default SideBar;
