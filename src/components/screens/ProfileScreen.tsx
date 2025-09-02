import { IOSNavigationBar } from "@/components/ui/ios-navigation-bar";
import { IOSList, IOSListItem } from "@/components/ui/ios-list";
import { IOSIcon } from "@/components/ui/ios-icon";
import { User, Mail, Globe, DollarSign, Camera, Settings } from "lucide-react";
import { useState } from "react";

export function ProfileScreen() {
  const [user] = useState({
    name: "John Doe",
    email: "john.doe@example.com",
    avatar: null,
    currency: "USD",
    locale: "en-US"
  });

  return (
    <div className="flex flex-col h-full bg-ios-gray">
      <IOSNavigationBar title="Profile" />
      
      <div className="flex-1 p-4 space-y-4 overflow-auto pb-24">
        {/* Profile Header */}
        <div className="ios-card p-6 text-center">
          <div className="relative w-24 h-24 mx-auto mb-4">
            <div className="w-full h-full bg-muted rounded-full flex items-center justify-center">
              <IOSIcon icon={User} size="xl" className="text-muted-foreground" />
            </div>
            <button className="absolute bottom-0 right-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center ios-scale-tap">
              <IOSIcon icon={Camera} size="sm" className="text-primary-foreground" />
            </button>
          </div>
          <h2 className="ios-title text-xl font-bold">{user.name}</h2>
          <p className="ios-body text-muted-foreground">{user.email}</p>
        </div>

        {/* Account Information */}
        <IOSList>
          <IOSListItem
            title="Name"
            subtitle={user.name}
            leftIcon={<IOSIcon icon={User} className="text-primary" />}
            showChevron
            onClick={() => {}}
          />
          <IOSListItem
            title="Email"
            subtitle={user.email}
            leftIcon={<IOSIcon icon={Mail} className="text-primary" />}
            showChevron
            onClick={() => {}}
          />
          <IOSListItem
            title="Default Currency"
            subtitle={user.currency}
            leftIcon={<IOSIcon icon={DollarSign} className="text-success" />}
            showChevron
            onClick={() => {}}
          />
          <IOSListItem
            title="Language & Region"
            subtitle={user.locale}
            leftIcon={<IOSIcon icon={Globe} className="text-ios-blue" />}
            showChevron
            onClick={() => {}}
          />
        </IOSList>

        {/* Account Settings */}
        <IOSList>
          <IOSListItem
            title="Account Settings"
            subtitle="Password, security, privacy"
            leftIcon={<IOSIcon icon={Settings} className="text-ios-gray-5" />}
            showChevron
            onClick={() => {}}
          />
        </IOSList>
      </div>
    </div>
  );
}