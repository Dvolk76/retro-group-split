import { IOSNavigationBar } from "@/components/ui/ios-navigation-bar";
import { IOSList, IOSListItem } from "@/components/ui/ios-list";
import { IOSIcon } from "@/components/ui/ios-icon";
import { 
  Bell, 
  Shield, 
  Download, 
  HelpCircle, 
  FileText, 
  Star, 
  LogOut,
  Moon,
  Globe,
  CreditCard
} from "lucide-react";

export function SettingsScreen() {
  return (
    <div className="flex flex-col h-full bg-ios-gray">
      <IOSNavigationBar title="Settings" />
      
      <div className="flex-1 p-4 space-y-4 overflow-auto pb-24">
        {/* App Settings */}
        <IOSList>
          <IOSListItem
            title="Notifications"
            subtitle="Expense alerts and reminders"
            leftIcon={<IOSIcon icon={Bell} className="text-ios-blue" />}
            showChevron
            onClick={() => {}}
          />
          <IOSListItem
            title="Privacy & Security"
            subtitle="Manage your privacy settings"
            leftIcon={<IOSIcon icon={Shield} className="text-success" />}
            showChevron
            onClick={() => {}}
          />
          <IOSListItem
            title="Currency & Region"
            subtitle="USD, United States"
            leftIcon={<IOSIcon icon={Globe} className="text-ios-orange" />}
            showChevron
            onClick={() => {}}
          />
          <IOSListItem
            title="Payment Methods"
            subtitle="Manage payment options"
            leftIcon={<IOSIcon icon={CreditCard} className="text-success" />}
            showChevron
            onClick={() => {}}
          />
        </IOSList>

        {/* Data & Storage */}
        <IOSList>
          <IOSListItem
            title="Export Data"
            subtitle="Download your expense data"
            leftIcon={<IOSIcon icon={Download} className="text-primary" />}
            showChevron
            onClick={() => {}}
          />
        </IOSList>

        {/* Support */}
        <IOSList>
          <IOSListItem
            title="Help & Support"
            subtitle="Get help and contact support"
            leftIcon={<IOSIcon icon={HelpCircle} className="text-ios-blue" />}
            showChevron
            onClick={() => {}}
          />
          <IOSListItem
            title="Terms & Privacy"
            subtitle="Legal information"
            leftIcon={<IOSIcon icon={FileText} className="text-ios-gray-5" />}
            showChevron
            onClick={() => {}}
          />
          <IOSListItem
            title="Rate RetroSplit"
            subtitle="Share your feedback"
            leftIcon={<IOSIcon icon={Star} className="text-warning" />}
            showChevron
            onClick={() => {}}
          />
        </IOSList>

        {/* Account Actions */}
        <IOSList>
          <IOSListItem
            title="Sign Out"
            leftIcon={<IOSIcon icon={LogOut} className="text-destructive" />}
            onClick={() => {}}
          />
        </IOSList>

        {/* App Info */}
        <div className="text-center pt-4">
          <p className="ios-caption text-muted-foreground">RetroSplit Mobile</p>
          <p className="ios-caption text-muted-foreground">Version 1.0.0</p>
        </div>
      </div>
    </div>
  );
}