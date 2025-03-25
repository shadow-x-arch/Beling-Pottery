import WindowControls from "./logo";
import AddressBar from "./SearchBar";
import ActionIcons from "./Navigation";

interface HeaderProps {
  onMenuClick?: () => void;
  onSearch?: (query: string) => void;
  onUploadClick?: () => void;
  onNotificationsClick?: () => void;
  onUserClick?: () => void;
  userAvatarUrl?: string;
  notificationCount?: number;
}

const Headerr: React.FC<HeaderProps> = () => {
  return (
    <header className="fixed top-0 left-0 right-0 h-11 bg-white border-b border-gray-200 z-50 px-4 shadow-md">
      <div className="flex items-center justify-between h-full max-w-[2000px] mx-auto">
        {/* Window Controls */}
        <div className="flex-shrink-0">
          <WindowControls />
        </div>

        {/* Address Bar */}
        <div className="flex flex-grow justify-center max-w-[800px] ">
          <AddressBar/>
        </div>

        {/* Action Icons */}
        <div className="flex-shrink-0">
          <ActionIcons
          />
        </div>
      </div>
    </header>
  );
};

export default Headerr;
