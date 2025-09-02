import { useState } from "react";
import { IOSTabBar } from "./ui/ios-tab-bar";
import { ProfileScreen } from "./screens/ProfileScreen";
import { GroupsScreen } from "./screens/GroupsScreen";
import { SettingsScreen } from "./screens/SettingsScreen";
import { User, Users, Settings } from "lucide-react";

type TabId = "profile" | "groups" | "settings";

export function MobileApp() {
  const [activeTab, setActiveTab] = useState<TabId>("groups");

  const tabs = [
    {
      id: "profile" as const,
      label: "Profile",
      icon: User,
    },
    {
      id: "groups" as const,
      label: "Groups", 
      icon: Users,
      badge: 2, // Example badge for new activity
    },
    {
      id: "settings" as const,
      label: "Settings",
      icon: Settings,
    }
  ];

  const renderScreen = () => {
    switch (activeTab) {
      case "profile":
        return <ProfileScreen />;
      case "groups":
        return <GroupsScreen />;
      case "settings":
        return <SettingsScreen />;
      default:
        return <GroupsScreen />;
    }
  };

  return (
    <div className="h-screen w-full bg-background font-system">
      {/* Main Content */}
      <div className="h-full">
        {renderScreen()}
      </div>
      
      {/* Tab Bar */}
      <IOSTabBar 
        tabs={tabs}
        activeTab={activeTab}
        onTabChange={(tabId) => setActiveTab(tabId as TabId)}
      />
    </div>
  );
}